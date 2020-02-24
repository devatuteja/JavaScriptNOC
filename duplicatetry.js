function getrecord(executionContext){
	debugger;
	
	var formContext = primaryControl.getFormContext();
	var name = formContext.getAttribute('name').getvalue();
	var telephone1 = formContext.getAttribute('telephone1').getvalue();
	var websiteurl = formContext.getAttribute('websiteurl').getvalue();

	var data = {
		'name': name,
		'telephone1': telephone1,
		'websiteurl':websiteurl,
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