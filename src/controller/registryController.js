const connetion = require("../database/dbConnect");
const checkParams = require("../checkParameters");
const registerUser = require("../registerDeleteAndSearch/registerUser");

const controllerRegisterUser = (req, res) => {
	let params = req.body;
	let checkResults = checkParams(params);
	if (checkResults["error"]) { return res.status(400).send(JSON.stringify(checkResults)) };

	let name = req.body.name,
	 	age = req.body.age,
	 	rg = req.body.rg,
	 	cpf = req.body.cpf;

	console.log(params)
	registerUser(name, age, rg, cpf).
		then((result) => {
			console.log(result)
			return res.status(201).send(JSON.stringify(resutl));
		}).
		catch((error) => {
			return res.status(400).send(JSON.stringify(error));
		});
	
}

module.exports = controllerRegisterUser;