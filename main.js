__path = process.cwd();

var express = require('express')
var router = express.Router();
var fs = require('fs');

// primeiro a rota de interface da api 
router.get('/', (req,res) => {
    res.sendFile(__dirname + '/views/docs.html');
})

// aqui a rota de foto
router.get('/foto', async(req, res) => {
    res.json({
        'link': 'https://img.freepik.com/fotos-gratis/uma-garota-de-cabelo-rosa-e-um-violao-na-camisa_1340-32655.jpg?size=338&ext=jpg&ga=GA1.1.386372595.1698105600&semt=ais'
    })
})
 
module.exports = router