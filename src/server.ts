import express from "express";
import colors from "colors";
import cors, { CorsOptions } from "cors";
import morgan from "morgan";
import router from "./router";
import db from "./config/db";

// Conectar a base de datos
export async function connectDB() {
  try {
    await db.authenticate();
    db.sync();
    // console.log( colors.blue( 'Conexión exitosa a la BD'))
  } catch (error) {
    console.log(colors.red.bold("Hubo un error al conectar a la BD"));
  }
}
connectDB();

// Instancia de express
const server = express();

//Habilitamos los Cors
const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    if (origin === process.env.CLIENT_URL) {
      callback(null, true);
    } else {
      callback(new Error("Error de CORS"));
    }
  },
};

server.use(cors(corsOptions));

// Leer datos de formularios
server.use(express.json());

//Logger
server.use(morgan("common"));

//Config rutas
server.use("/api/products", router);

/* server.get("/api", (req, res) => {
  res.json({ msg: "Desde API" });
}); */

export default server;
