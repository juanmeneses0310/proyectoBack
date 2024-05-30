import ModeloUsuario from "../modelos/modeloUsuario.js";

const controladorUsuarios1 = {
  crearUsuario: async (req, res) => {
    try {
      const nuevoUsuario = new ModeloUsuario(req.body);
      const usuarioCreado = await nuevoUsuario.save();
      /*if (req.body.nombre === "") throw new Error("falta el nombre");
      if (req.body.apellido === "") throw new Error("falta el apellido");
      if (req.body.email === "") throw new Error("falta el email");
      if (req.body.contrasenia === "") throw new Error("falta la contraseña ");
      if (req.body.confirmarContrasenia === "")
        throw new Error("falta la confirmación de la contraseña");
      if (req.body.usuario === "") throw new Error("falta el usuario");
      if (req.body.telefono === "") throw new Error("falta el teléfono");
      if (req.body.pais === "") throw new Error("falta el país");
      if (req.body.ciudad === "") throw new Error("falta la ciudad");
      if (req.body.genero === "") throw new Error("falta el genero");
      if (req.body.fechanacimiento === "")
        throw new Error("falta la fecha de nacimiento");
      if (req.body.foto === "") throw new Error("falta la foto");*/
      if (usuarioCreado._id) {
        res.json({
          resultado: "bien",
          mensaje: "usuario creado",
          datos: usuarioCreado._id,
        });
      }
    } catch (error) {
      res.json({
        resultado: "mal",
        mensaje: "ocurrió un error al crear usuario",
        datos: error,
      });
    }
  },
  leerUsuario: async (req, res) => {
    try {
      const usuarioEncontrado = await ModeloUsuario.findById(req.params.id);
      if (usuarioEncontrado._id) {
        res.json({
          resultado: "bien",
          mensaje: "usuario leído",
          datos: usuarioEncontrado,
        });
      }
    } catch (error) {
      res.json({
        resultado: "mal",
        mensaje: "ocurrió un error al leer el usuario",
        datos: error,
      });
    }
  },
  leerUsuarios: async (req, res) => {
    try {
      const todosLosUsuarios = await ModeloUsuario.find();
      res.json({
        resultado: "bien",
        mensaje: "usuarios leídos",
        datos: todosLosUsuarios,
      });
    } catch (error) {
      res.json({
        resultado: "mal",
        mensaje: "ocurrió un error al leer todos los usuarios",
        datos: error,
      });
    }
  },
  actualizarUsuarios: async (req, res) => {
    try {
      const usuarioActualizado = await ModeloUsuario.findByIdAndUpdate(
        req.params.id,
        req.body
      );
      if (usuarioActualizado._id) {
        res.json({
          resultado: "bien",
          mensaje: "usuario actualizado",
          datos: usuarioActualizado._id,
        });
      }
    } catch (error) {
      res.json({
        resultado: "mal",
        mensaje: "ocurrio un error al eliminar el usuario",
        datos: error,
      });
    }
  },
  eliminarUsuarios: async (req, res) => {
    try {
      const usuarioEliminado = await ModeloUsuario.findByIdAndDelete(
        req.params.id
      );
      if (usuarioEliminado) {
        res.json({
          resultado: "bien",
          mensaje: "usuario eliminado",
          datos: null,
        });
      }
    } catch (error) {
      res.json({
        resultado: "mal",
        mensaje: "ocurrió un error al eliminar el usuario",
        datos: error,
      });
    }
  },
};

export default controladorUsuarios1;
