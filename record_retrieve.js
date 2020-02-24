//retrieving the value here 
function record_retrieve(formContext){
	debugger;
	Xrm.WebApi.retrieveRecord("entitlement", id, "?$select=new_serviceprovider").then(
	{
		function success(result){
			var serviceprovider = result.new_serviceprovider
		}
});
}