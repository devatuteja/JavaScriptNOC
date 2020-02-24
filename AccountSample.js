var data  = {
	"AccountName": "TridentInformation",
	"primarycontactid":
	{
		"logicalname":"contact",
		"id": id 
	}
}
	Xrm.WebApi.createRecord("account", data).then(
		function success(result){
			console.log("Account created with the I'd "+ result.id);

		},
		function error(result){
			console.log(error.message);
			//handle error conditions
		}


function SampleData(executionContext){
	debugger;
	

	var data = {
		
		"name": "TridentInformationSystem",
		"telephone1": "9999003606",
		"websiteurl":"www.google.com",
		"numberofemployees":100


	}
	Xrm.WebApi.createRecord("account", data).then(

		function success(result){
			alert("record created ");
		},
		function error(result){
			alert("error creating the sample database");
			return false;
		});
}