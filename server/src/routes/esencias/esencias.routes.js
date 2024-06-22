import { Router } from "express";
import { db, storage} from "../../services/firebase.config.js";
import { collection, getDocs, addDoc, deleteDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';

const upload = multer({ storage: multer.memoryStorage() });
const esencias = Router();

//Mostrar perfumes
esencias.get("/listarEsencias", async (req, res) => {
    try {
      const productsCollection = collection(db, "esencias");
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


  //Agregar esencia
  esencias.post('/agregarEsencia', upload.single('imagen'), async (req, res) => {
    try {
      const { descripcion, nombre, precio } = req.body;
      const file = req.file;
  
      // Validar datos requeridos
      if (!descripcion || !nombre || !precio || !file) {
        return res.status(400).json({ success: false, error: 'Todos los campos y la imagen son requeridos' });
      }
  
      // Subir imagen a Firebase Storage
      const storageRef = ref(storage, `esencias/${uuidv4()}-${file.originalname}`);
      const metadata = {
        contentType: file.mimetype,
      };
      await uploadBytes(storageRef, file.buffer, metadata);
      const imageUrl = await getDownloadURL(storageRef);
  
      // Guardar detalles de la esencia en Firestore
      const newEsencia = {
        descripcion,
        nombre,
        precio,
        imagen: imageUrl,
      };
      const docRef = await addDoc(collection(db, 'esencias'), newEsencia);
  
      // Responder con éxito y el ID del nuevo documento
      res.json({ success: true, id: docRef.id, data: newEsencia });
    } catch (error) {
      console.error('Error adding Esencia:', error);
      res.status(500).json({ success: false, error: 'Error adding Esencia' });
    }
  });

//Eliminar Esencia
esencias.delete('/eliminarEsencia/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // Referencia al documento a eliminar en Firestore
    const docRef = doc(db, 'esencias', id);

    // Obtener la esencia antes de eliminarla para obtener la URL de la imagen
    const docSnapshot = await getDoc(docRef);
    if (!docSnapshot.exists()) {
      return res.status(404).json({ success: false, error: 'Documento no encontrado' });
    }

    // Obtener la URL de la imagen desde los datos del documento
    const data = docSnapshot.data();
    const imageUrl = data.imagen; // Asegúrate de que "imagen" sea el nombre del campo que contiene la URL de la imagen

    // Eliminar el documento de la esencia en Firestore
    await deleteDoc(docRef);

    // Eliminar la imagen del almacenamiento en Firebase Storage
    if (imageUrl) {
      const imageRef = ref(storage, imageUrl);
      await deleteObject(imageRef);
    }

    res.json({ success: true, message: 'Esencia eliminada correctamente' });
  } catch (error) {
    console.error('Error deleting Esencia:', error);
    res.status(500).json({ success: false, error: 'Error eliminando Esencia' });
  }
});

  //ACTUALIZAR ESENCIA
  esencias.put('/actualizarEsencia/:id', upload.single('imagen'), async (req, res) => {
    try {
      const { id } = req.params;
      const { descripcion, nombre, precio } = req.body;
      const file = req.file;
  
      // Validar datos requeridos
      if (!descripcion && !nombre && !precio && !file) {
        return res.status(400).json({ success: false, error: 'Al menos un campo o la imagen deben ser actualizados' });
      }
  
      // Referencia al documento a actualizar en Firestore
      const docRef = doc(db, 'esencias', id);
  
      // Verificar si el documento existe antes de intentar actualizarlo
      const docSnapshot = await getDoc(docRef);
      if (!docSnapshot.exists()) {
        return res.status(404).json({ success: false, error: 'Documento no encontrado' });
      }
  
      // Actualizar la imagen si se proporciona un nuevo archivo
      let imageUrl = null;
      if (file) {
        // Eliminar la imagen anterior si existe
        const data = docSnapshot.data();
        if (data.imagen) {
          const imageRef = ref(storage, data.imagen);
          await deleteObject(imageRef);
        }
  
        // Subir la nueva imagen a Firebase Storage
        const storageRef = ref(storage, `esencias/${uuidv4()}-${file.originalname}`);
        const metadata = {
          contentType: file.mimetype,
        };
        await uploadBytes(storageRef, file.buffer, metadata);
        imageUrl = await getDownloadURL(storageRef);
      }
  
      // Crear un objeto con los campos a actualizar
      const updatedData = {};
      if (descripcion) updatedData.descripcion = descripcion;
      if (nombre) updatedData.nombre = nombre;
      if (precio) updatedData.precio = precio;
      if (imageUrl) updatedData.imagen = imageUrl;
  
      // Actualizar el documento en Firestore
      await updateDoc(docRef, updatedData);
  
      // Responder con éxito
      res.json({ success: true, message: 'Esencia actualizada correctamente' });
    } catch (error) {
      console.error('Error updating Esencia:', error);
      res.status(500).json({ success: false, error: 'Error actualizando Esencia' });
    }
  });
  

export default esencias;