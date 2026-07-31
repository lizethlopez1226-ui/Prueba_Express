
import express from 'express';
//leer el archivo .env
import {configDotenv} from "dotenv"
configDotenv()

const app = express();
const port = process.env.PUERTO || 3030

app.get("/", (_, res) => {
res.send('Aprendiendo express,ficha 3407181, programa ADSO, 31 de Julio');
});

app.listen(port, () => {
console.log( `Servidor en funcionamiento en el puerto: ${port} `);
});
