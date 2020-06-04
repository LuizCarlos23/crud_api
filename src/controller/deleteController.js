const connetion = require("../database/dbConnect");
const deleteUser = require("../registerDeleteAndSearch/deleteUser");

const controllerDeleteUser = (req, res) => {
	let id = req.body.id;
	deleteUser(id).
		then((result) => {
			return res.status(200).send(JSON.stringify({"msg":result["msg"]}));
		}).
		catch((err) => {
			return res.status(400).send(JSON.stringify({"msg":err["msg"]}));
		});
}

module.exports = controllerDeleteUser;