_path = process.cwd()

var express = require('express');
var cors = require('cors');
var secure = require('ssl-express-www');

var app = express();
var mainrouter = require("./main.js");
app.enable('trust proxy');
app.set('json spoaces', 2);
app.use(cors());
app.use(secure);
app.use(express.static('public'));

app.use('/', mainrouter);

app.listen(8080, () => {
    console.log('app rodando na porta 8080');
});
