import { Router } from "express";
import { db } from "../../services/firebase.config.js";
import { collection, getDocs, addDoc, deleteDoc, doc, getDoc, updateDoc } from "firebase/firestore";

const concetrados = Router();

//Listar Concentrados
concetrados.get("/listarConcetrados", async (req, res) => {
    try {
      const productsCollection = collection(db, "concentrados");
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

    //Agregar Concentrados
concetrados.post("/agregarConcentrado", async (req, res) => {
    try {
      const { descripcion, nombre, precio } = req.body;
  
      // Validar datos requeridos
      if (!descripcion || !nombre || !precio) {
        return res
          .status(400)
          .json({ success: false, error: "Todos los campos son requeridos" });
      }
  
      const newConcentrado = {
        descripcion,
        nombre,
        precio,
      };
      const docRef = await addDoc(collection(db, "concentrados"), newConcentrado);
  
      // Responder con éxito y el ID del nuevo documento
      res.json({ success: true, id: docRef.id });
    } catch (error) {
      console.error("Error adding concentrado:", error);
      res.status(500).json({ success: false, error: "Error adding concentrado" });
    }
  });

  //Eliminar Concentrados
  concetrados.delete("/eliminarConcentrado/:id", async (req, res) => {
    try {
      const { id } = req.params;
  
      // Referencia al documento a eliminar
      console.log("este es el id ", id);
      const docRef = doc(db, "concentrados", id);
  
      // Verificar si el documento existe antes de intentar eliminarlo
      const docSnapshot = await getDoc(docRef);
      if (!docSnapshot.exists()) {
        return res
          .status(404)
          .json({ success: false, error: "Documento no encontrado" });
      }
  
      // Eliminar el documento
      await deleteDoc(docRef);
  
      res.json({ success: true, message: "Concentrado eliminado correctamente" });
    } catch (error) {
      console.error("Error deleting Concentrado:", error);
      res.status(500).json({ success: false, error: "Error eliminando Concentrado" });
    }
  });

  //ACTUALIZAR CONCENTRADOS
concetrados.put('/actualizarConcentrado/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const { descripcion, nombre, precio } = req.body;
  
      // Validar datos requeridos
      if (!descripcion && !nombre && !precio) {
        return res.status(400).json({ success: false, error: 'Al menos un campo debe ser actualizado' });
      }
  
      // Referencia al documento a actualizar
      const docRef = doc(db, 'concentrados', id);
  
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
      res.json({ success: true, message: 'Concentrado actualizado correctamente' });
    } catch (error) {
      console.error('Error updating Concentrado:', error);
      res.status(500).json({ success: false, error: 'Error actualizando Concentrado' });
    }
  });

export default concetrados;