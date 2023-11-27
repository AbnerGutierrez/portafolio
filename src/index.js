import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import indexRoutes from "./routes/index.js";
import morgan from "morgan";

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const __dirname = dirname(fileURLToPath(import.meta.url)); //Esto se transforma en la ruta absoluta para las vistas

app.set("views", join(__dirname, "views"));
app.set("view engine", "ejs"); //.set decirle que caracteristicas queremos utilizar,ejs es un motor de plantillas

app.use(indexRoutes);
app.use(express.static(join(__dirname, "/public")));

app.listen(3000);
console.log("Server on port: ", 3000);
