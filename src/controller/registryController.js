const connetion = require("../database/dbConnect");
const checkParams = require("../checkParameters");
const registerUser = require("../registerDeleteAndSearch/registerUser");

const controllerRegisterUser = (req, res) => {
	let params = req.body;
	let checkResults = checkParams(params);
	if (checkResults["error"]) { return res.status(400).send(checkResults["msg"]); };

	let name = req.body.name,
	 	age = req.body.age,
	 	rg = req.body.rg,
	 	cpf = req.body.cpf;

	console.log(params)
	registerUser(name, age, rg, cpf).
		then((result) => {
			console.log(result)
			return res.status(200).send(result["msg"]);
		}).
		catch((error) => {
			return res.status(400).send(error["msg"]);
		});
	
}

module.exports = controllerRegisterUser;