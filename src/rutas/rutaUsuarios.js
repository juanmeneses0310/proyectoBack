import { Router } from "express";
import controladorUsuarios1 from "../controladores/controladorUsuario.js";

const enrutadorUsuarios = Router();

enrutadorUsuarios.post("/", controladorUsuarios1.crearUsuario);
enrutadorUsuarios.get("/:id", controladorUsuarios1.leerUsuario);
enrutadorUsuarios.get("/", controladorUsuarios1.leerUsuarios);
enrutadorUsuarios.put("/:id", controladorUsuarios1.actualizarUsuarios);
enrutadorUsuarios.delete("/:id", controladorUsuarios1.eliminarUsuarios);

export default enrutadorUsuarios;
