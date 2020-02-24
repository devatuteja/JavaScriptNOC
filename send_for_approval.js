//for a ribbon button you dont pass executionContext. 
//formContext exists there by default.
//to access the header fields in just place header_fieldname and 
//rest process of selecting and getting the attribute remains the same

function send_for_approval(formContext){
	
	debugger;

	formContext.getControl("header_statuscode").setValue(100000000);
	formContext.data.entity.save();

	

}


function Send_For_Special_Approval(){
	debugger;
	formContext.getAttribute('statuscode').setValue(1);
	
	
	if (statuscode == 1){
	var lookup = formContext.getAttribute('statuscode').getValue();
	var status = lookup[0].name;
	formContext.getControl("status").setVisible(true);
	alert("We are in special approval");
}
	
	else{
		formContext.getControl("statuscode").setVisible(false);
	}
}

function Fms_approval(formContext){
	debugger;
	formContext.getAttribute("statuscode").setValue
}
