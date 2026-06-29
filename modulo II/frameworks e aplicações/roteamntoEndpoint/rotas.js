const express = require ('express')
const db = require ('./models/index');
const { where } = require('sequelize');
const router = express.Router()

//pega todos no banco de dados
router.get('/', async(req,res) => {
    let dados = await db.Nota.findAll();
    res.json(dados);
})

//procura pelo id
router.get('/:id', async(req,res) => {
    let dados = await db.Nota.findByPk(req.params.id);
    res.json(dados);
})

//envia dados
router.post('/', async(req,res) => {
    let dados = await db.Nota.create(req.body);
    res.json(dados);
})

//deleta 
router.delete('/:id', async(req,res) => {
    let dados = await db.Nota.destroy(
        {
            where:{
                id: req.params.id
            }
        }
    );
    res.end();
})

//altera
router.put('/:id', async(req,res) => {
    let dados = await db.Nota.update(
        req.body,{
            where:{
                id: req.params.id
            }
        }
    );
    res.end();
})

module.exports = router