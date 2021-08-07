curl localhost:8000/settings/createDepartment -X POST -d "name=test1&address=isiksokak&description=some_description"
curl localhost:8000/settings/getDepartment/1
curl localhost:8000/settings/createDepartment -X POST -d "name=test1&address=isiksokak&description=some_description"

curl localhost:8000/settings/createUser -X POST -d "name=test1&email=test@test&phone=05526969192&password=eee&role=ADMIN&department_id=0"
curl localhost:8000/settings/getUser/3
curl localhost:8000/settings/getUsers 
curl localhost:8000/settings/updateUser/3 -X POST -d "department_id=2&name=kotak"

curl localhost:8000/settings/createService -X POST -d "name=PTB&description=Protez_tirnak_bakim&price=190"
curl localhost:8000/settings/getService/1
curl localhost:8000/settings/getServices
curl localhost:8000/settings/deleteService/2 -X POST 

curl localhost:8000/settings/createClient -X POST -d "name=Ayshe&surname=Perdeli&phone=905538388323&birth_date=2000-08-31"
curl localhost:8000/settings/getClient/3
curl localhost:8000/settings/getClients
curl localhost:8000/settings/updateClient/1 -X POST -d "surname=Cheshmebashi"