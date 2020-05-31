const connetion = require("../database/dbConnect");
const searchUser = require("../registerDeleteAndSearch/searchUser");

const userResearchController = (req, res) => {
	let acceptableValues = ['all', 'name', 'age', 'rg', 'cpf'] 
	let searchFor = req.body.searchFor,
		value = req.body.value
	if (acceptableValues.indexOf(searchFor) == -1){ 
		return res.status(400).send({msg: "Unacceptable value"})
	}
	
	searchUser(searchFor, value).
		then((result) => {
			return res.status(200).send(result);
		}).
		catch((err) => {
			console.log(err)
			return res.status(400).send(err);
		})
}

module.exports = userResearchController