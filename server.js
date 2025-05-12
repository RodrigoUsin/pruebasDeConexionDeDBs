import express from "express";
import morgan from "morgan";
import fileupload from "express-fileupload";
import cors from "cors";
import path from "path";

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.send("Servidor funcionando correctamente ✅");
});

export default server;
