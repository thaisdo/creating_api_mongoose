const mongoose = require("mongoose");

const produtoSchema = new mongoose.Schema({
    nome:
    {
        type: String,
        required: [true, "Must have the name"],
        trim: true,
        minLength: [3 , "Must have 3 characters minimum"]
    },
    valor:
    {
        type: Number,
        required: [true, "Must have price"],
        trim: true,
        min: [0.00, "Valor deve ser maior que zero"]
    },
    situacao:
    {
        type: String,
        required: [true, "O produto está:"],
        trim: true,
        enum: {values: ["Ativo","Inativo"], message: "Deve ser um desses valores"}
    }
   
},{
    timestamps: true
})

module.exports = mongoose.model("Produto",produtoSchema);