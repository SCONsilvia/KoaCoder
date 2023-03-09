import Koa from "koa";
import mainRouter from "./routes/index.js";
import { koaBody } from "koa-body";
import { initMongoDB } from "./persistence/daos/mongodb/db/database.js";

const app = new Koa(); 

app.use(koaBody()); 

app.use(mainRouter);

const PORT = process.env.PORT;

const server = app.listen(PORT, async() => {
  await initMongoDB()
  console.log(`Servidor Koa escuchando en el puerto ${PORT}`);
});

server.on('error', (error) => console.log("Error en Servidor Koa:", error));