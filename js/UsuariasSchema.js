const mongoose = require("mongoose")
const Schema = mongoose.Schema
const UsuariasSchema = new Schema ({
    _id:{type: mongoose.Schema.Types.ObjectId, auto: true},
    nome:{type: String},
    email: {type: String},
    whatsapp: {type: String},
    tipo: {type: Boolean}
})

const usuariasModel = mongoose.model("usuaria", UsuariasSchema)

module.exports = {usuariasModel, UsuariasSchema}