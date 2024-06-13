import express from 'express';
import perfumes from './routes/perfumes/perfumes.routes.js';
import perfuminas from './routes/perfuminas/perfuminas.routes.js';

const app = express();

// Middleware para parsear JSON
app.use(express.json());

//ROUTES DE PERFUMES
app.use(perfumes);
app.use(perfuminas);

app.listen(3001, () => {
    console.log('Servidor está ejecutándose en el puerto 3001');
});