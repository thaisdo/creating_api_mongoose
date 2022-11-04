const express = require("express");

const produtos = require("./routes/produtoRouter");

const app = express();

app.use(express.json()); 
app.use("/produtos", produtos);

module.exports = app;