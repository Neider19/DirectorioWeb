const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


mongoose.connect("mongodb://localhost:27017/directorioWeb")
    .then(() => console.log("Contectado corretamente a MongoDB"))
    .catch(error => {
        console.error("Error al conectar a MongoDB", error);
        process.exit(1);
    }
    )
// Schema Contactos
const contactoSchema = new mongoose.Schema({
    nombre: { type: String, require: true },
    telefono: { type: Number, require: true },
    correo: { type: String, require: true },
    direccion: { type: String, require: true },
    ciudad: { type: String, require: true }

}, { timestamps: true });

const contacto = mongoose.model("contacto", contactosSchema);

// Schema Usuarios
const usuarioSchema = new mongoose.Schema({
    usuario: { type: String, require: true },
    contrasena: { type: String, require: true }
}, { timestamps: true });


const usuario = mongoose.model("usuario", usuarioSchema);

// Schema Registrar Usuarios
const registroUsuarioSchema = new mongoose.Schema({
    usuario: { type: String, require: true },
    telefono: { type: Number, require: true },
    correo: { type: String, require: true },
    contrasena: { type: String, require: true },


}, { timestamps: true });

const registroUsuario = mongoose.model("registroUsuario", registroUsuarioSchema);


app.get("/api/contacto", async (req, res) => {

    try {
        const contactos = await contacto.find();
        res.status(200).json(contactos)
    } catch (error) {
        res.status(500).json({ error: "Error al obtener los contactos" })

    }

});



// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});