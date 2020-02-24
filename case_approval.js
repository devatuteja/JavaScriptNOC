//MAKE SURE THAT THE FIELD IS MARKED TRUE FOR EVERY OWNER 
function approve_functionality(formContext){
	debugger;
	//flag field of fms
	owner_fms = formContext.getAttribute("fms_flag");
	owner_am = formContext.getAttribute("am_field");
	owner_rm = formContext.getAttribute("rm_field");
	if(owner_fms == true || owner_am == true || owner_rm == true){

	var confirmStrings = {text : "Do you want to proceed?", title: "Confirmation Dialog"};
	var confirmOptions = {height : 200, width : 450};
	Xrm.Navigation.openConfirmDialog(confirmStrings, confirmOptions).then(
		function(success){
			if (success.confirmed){
				//code for CEM approval to be set under setvalue option here.
				formContext.getAttribute("statuscode").setValue(); 
				formContext.data.entity.save()
				//make a flag field and turn it to true for CEM to indicate who's the user in the backend.,change the attributes name as well 
				formContext.getAttribute("cem_flag").setValue(true);
				formContext.data.entity.save();



			}
			else{
				console.log("Request Cancelled at approve_functionality");
			}
		}

		);
}
else{
console.log("owner is CEM right now");
}

}
