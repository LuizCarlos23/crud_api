from requests import post, get
url = "http://localhost:9735"
urlRegister = url+"/register"
urlDelete = url+"/deleteUser"
urlSearch = url+"/search"

def registerUser(name=False, age=False, rg=False, cpf=False):
	if (not(name)):
		resultRegisterUser = post(urlRegister, {'name': 'Luiz Carlos', 'age': '16', 'cpf':"12345678909", 'rg':'123456789'})
		return resultRegisterUser
	resultRegisterUser = post(urlRegister, {'name': name, 'age': age, 'cpf': cpf, 'rg': rg})
	return resultRegisterUser
def deleteUser(id):
	resultDeletUser = post(urlDelete, {"id": id})
	return resultDeletUser

def searchUser (searchFor=False, value="Luiz"):
	if (not(searchFor)): 
		searchFor = "name"
	result = post(urlSearch, {"searchFor": searchFor, "value": value})
	return result

