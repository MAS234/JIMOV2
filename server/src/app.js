import express from 'express';
import perfumes from './routes/perfumes/perfumes.routes.js';
import perfuminas from './routes/perfuminas/perfuminas.routes.js';
import velas from './routes/velas/velas.routes.js';
import difusores from './routes/difusores/difusores.routes.js';
import concetrados from './routes/concetradosPiso/concetrados.routes.js';
import aceites from './routes/aceitesHornitos/aceites.routes.js';
import esencias from './routes/esencias/esencias.routes.js';

const app = express();

// Middleware para parsear JSON
app.use(express.json());

//ROUTES
app.use(perfumes);
app.use(perfuminas);
app.use(velas);
app.use(difusores);
app.use(concetrados);
app.use(aceites);
app.use(esencias);

app.listen(3001, () => {
    console.log('Servidor está ejecutándose en el puerto 3001');
});