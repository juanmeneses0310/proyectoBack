import { Schema, model } from "mongoose";

const esquemaUsuario = new Schema({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  email: { type: String, required: true },
  contrasenia: { type: String, required: true },
  confirmarContrasenia: { type: String, required: true },
  usuario: { type: String, required: true },
  telefono: { type: String, required: true },
  pais: { type: String, required: true },
  ciudad: { type: String, required: true },
  genero: { type: String, required: true },
  fechanacimiento: { type: String, required: true },
});
export default model("Usuario", esquemaUsuario);
