const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./src/routes");
const app = express();
const port = 9735;


//Config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use('/', routes)

app.listen(port, () => {
	console.log("Escutando na porta: " + port)
});
