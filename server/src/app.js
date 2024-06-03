import express from 'express';
import routes from './routes/routes.info.js';

const app = express();

app.use(routes);

app.listen(3001, () => {
    console.log('Servidor está ejecutándose en el puerto 3001');
});
