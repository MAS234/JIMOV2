import { Router } from "express";
import { db } from "../../services/firebase.config.js";
import { collection, getDocs, addDoc, deleteDoc, doc, getDoc, updateDoc } from "firebase/firestore";

const difusores = Router();

//Listar Difusores
difusores.get("/listarDifusores", async (req, res) => {
    try {
      const productsCollection = collection(db, "difusores");
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

  //Agregar Difusores
difusores.post("/agregarDifusor", async (req, res) => {
    try {
      const { descripcion, nombre, precio } = req.body;
  
      // Validar datos requeridos
      if (!descripcion || !nombre || !precio) {
        return res
          .status(400)
          .json({ success: false, error: "Todos los campos son requeridos" });
      }
  
      const newDifusor = {
        descripcion,
        nombre,
        precio,
      };
      const docRef = await addDoc(collection(db, "difusores"), newPerfumina);
  
      // Responder con éxito y el ID del nuevo documento
      res.json({ success: true, id: docRef.id });
    } catch (error) {
      console.error("Error adding vela:", error);
      res.status(500).json({ success: false, error: "Error adding vela" });
    }
  });

    //Eliminar Difusores
    difusores.delete("/eliminarDifusor/:id", async (req, res) => {
        try {
          const { id } = req.params;
      
          // Referencia al documento a eliminar
          console.log("este es el id ", id);
          const docRef = doc(db, "difusores", id);
      
          // Verificar si el documento existe antes de intentar eliminarlo
          const docSnapshot = await getDoc(docRef);
          if (!docSnapshot.exists()) {
            return res
              .status(404)
              .json({ success: false, error: "Documento no encontrado" });
          }
      
          // Eliminar el documento
          await deleteDoc(docRef);
      
          res.json({ success: true, message: "Difusor eliminado correctamente" });
        } catch (error) {
          console.error("Error deleting Difusor:", error);
          res.status(500).json({ success: false, error: "Error eliminando Difusor" });
        }
      });

//ACTUALIZAR DIFUSORES
difusores.put('/actualizarDifusor/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const { descripcion, nombre, precio } = req.body;
  
      // Validar datos requeridos
      if (!descripcion && !nombre && !precio) {
        return res.status(400).json({ success: false, error: 'Al menos un campo debe ser actualizado' });
      }
  
      // Referencia al documento a actualizar
      const docRef = doc(db, 'difusores', id);
  
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
      res.json({ success: true, message: 'Difusor actualizado correctamente' });
    } catch (error) {
      console.error('Error updating Difusor:', error);
      res.status(500).json({ success: false, error: 'Error actualizando Difusor' });
    }
  });

export default difusores;
