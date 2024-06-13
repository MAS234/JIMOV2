import { Router } from "express";
import { db } from "../../services/firebase.config.js";
import { collection, getDocs, addDoc, deleteDoc, doc, getDoc, updateDoc } from "firebase/firestore";

const perfumes = Router();

//Mostrar perfumes
perfumes.get("/listarPerfumes", async (req, res) => {
  try {
    const productsCollection = collection(db, "perfumes");
    const querySnapshot = await getDocs(productsCollection);
    const products = [];

    querySnapshot.forEach((doc) => {
      const productData = doc.data();
      const product = { id: doc.id, ...productData };
      products.push(product);
    });

    res.json({ success: true, data: products });
  } catch (error) {
    console.error("Error listing products:", error);
    res.status(500).json({ success: false, error: "Error listing products" });
  }
});

//Agregar perfume
perfumes.post("/agregarPerfume", async (req, res) => {
  try {
    const { descripcion, nombre, precio } = req.body;

    // Validar datos requeridos
    if (!descripcion || !nombre || !precio) {
      return res
        .status(400)
        .json({ success: false, error: "Todos los campos son requeridos" });
    }

    const newPerfume = {
      descripcion,
      nombre,
      precio,
    };
    const docRef = await addDoc(collection(db, "perfumes"), newPerfume);

    // Responder con éxito y el ID del nuevo documento
    res.json({ success: true, id: docRef.id });
  } catch (error) {
    console.error("Error adding perfume:", error);
    res.status(500).json({ success: false, error: "Error adding perfume" });
  }
});

//Eliminar Perfume
perfumes.delete("/eliminarPerfume/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Referencia al documento a eliminar
    console.log("este es el id ", id);
    const docRef = doc(db, "perfumes", id);

    // Verificar si el documento existe antes de intentar eliminarlo
    const docSnapshot = await getDoc(docRef);
    if (!docSnapshot.exists()) {
      return res
        .status(404)
        .json({ success: false, error: "Documento no encontrado" });
    }

    // Eliminar el documento
    await deleteDoc(docRef);

    res.json({ success: true, message: "Perfume eliminado correctamente" });
  } catch (error) {
    console.error("Error deleting perfume:", error);
    res.status(500).json({ success: false, error: "Error eliminando perfume" });
  }
});

//ACTUALIZAR PERFUME
perfumes.put('/actualizarPerfume/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { descripcion, nombre, precio } = req.body;

    // Validar datos requeridos
    if (!descripcion && !nombre && !precio) {
      return res.status(400).json({ success: false, error: 'Al menos un campo debe ser actualizado' });
    }

    // Referencia al documento a actualizar
    const docRef = doc(db, 'perfumes', id);

    // Verificar si el documento existe antes de intentar actualizarlo
    const docSnapshot = await getDoc(docRef);
    if (!docSnapshot.exists()) {
      return res.status(404).json({ success: false, error: 'Documento no encontrado' });
    }

    // Crear un objeto con los campos a actualizar
    const updatedData = {};
    if (descripcion) updatedData.descripcion = descripcion;
    if (nombre) updatedData.nombre = nombre;
    if (precio) updatedData.precio = precio;

    // Actualizar el documento
    await updateDoc(docRef, updatedData);

    // Responder con éxito
    res.json({ success: true, message: 'Perfume actualizado correctamente' });
  } catch (error) {
    console.error('Error updating perfume:', error);
    res.status(500).json({ success: false, error: 'Error actualizando perfume' });
  }
});

export default perfumes;
