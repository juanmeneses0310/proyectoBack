import mongoose from "mongoose";

mongoose
  .connect(process.env.MONGODB_ATLAS_URL)
  .then((dato) => {
    console.log("conectado a la base de datos");
  })
  .catch((error) => {
    console.log("ocurrió un error y no se conectó a la base de datos");
  });
