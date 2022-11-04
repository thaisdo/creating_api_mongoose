const { ObjectId } = require('bson');
const Produto = require("../models/produtoModel");

async function listar(req, res) {
    await Produto.find({})
        .then(produto => { return res.json(produto) })
        .catch(error => { return res.status(500).json })
};

async function consultar(req, res) {
    await Produto.findOne({ _id: ObjectId(req.params.id) })
        .then(produto => {
            if (produto) { return res.json(produto) }
            else { return res.status(404).json(error) }
        })
        .catch(error => { return res.status(500) })
};

async function criar(req, res) {
    const produto = new Produto(req.body);
    await produto.save()
    .then (doc => {
        return res.status(201).json(doc);
    })
    .catch(error => {
        const msgError = {};
        Object.values(error.errors).forEach(({properties}) => {
           msgError [properties.path] = properties.message; 
        });
        return res.status(422).json(msgError);
    })

};

async function atualizar(req, res) {
    await Produto.findOneAndUpdate({_id:ObjectId(req.params.id)},req.body, {runValidators : true})
    .then (produto => { 
        if(produto) {
            return res.status(204).end();
        }else {
            return res.status(404).json( "Error" )
        }
    })
    .catch(error => {
        const msgError = {};
        Object.values(error.errors).forEach(({properties}) => {
           msgError [ properties.path] = properties.message; 
        });
        return res.status(422).json(msgError);
    })

};

async function deletar(req, res) {
    await Produto.findOneAndDelete({ _id: ObjectId(req.params.id) })
    .then(produto => {
        if(produto) {
            return res.status(204).end()
        }else {
            return res.status(404).json("não localizado!")
        }
    })
    .catch(error => {
        return res.status(500).json(error);
    })
};

module.exports = {listar, criar , consultar, atualizar, deletar};