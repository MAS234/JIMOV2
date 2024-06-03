import { Router } from 'express';
import { db } from '../services/firebase.config.js';
import { collection, getDocs } from 'firebase/firestore';

const routes = Router();

routes.get('/JIMO', async (req, res) => {
  try {
    const productsCollection = collection(db, 'products');
    const querySnapshot = await getDocs(productsCollection);
    const products = [];

    querySnapshot.forEach(doc => {
      const productData = doc.data();
      const product = { id: doc.id, ...productData }; 
      products.push(product);
    });

    res.json({ success: true, data: products }); 

  } catch (error) {
    console.error('Error listing products:', error);
    res.status(500).json({ success: false, error: 'Error listing products' }); // Manejo de errores mejorado
  }
});

export default routes;
