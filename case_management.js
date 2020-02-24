function Approve()
{
	//you've to customize this code later make sure that the owner is RM then execute this line of code.
var confirmStrings = { text: "Do you wish to Approve?" , title:"Confirmation Dialog"};
var confirmStrings = { height: 200, width:450};

Xrm.Navigation.openConfirmDialog(confirmStrings, confirmOptions).then(
	function(success){
		if(success.confirmed){
			formContext.getAttribute("statuscode").setValue(100000002);
			formContext.data.entity.save();
			formContext.getAttribute("new_rmcaseassignedcem").setValue(true);
			formContext.data.entity.save();
		}
		else{
			console.log("request for approval")
		}
	})





}
function Disapprove(){
	alert("this is disapprove button");
}
function Assign_To_SP(){
	alert("this is Assign_To_SP button");
}
function Send_For_Special_Approval(formContext){
	debugger;
   var confirmStrings = { text : "Do you really wish to send this for Special Approval.?", title:"Confirmation Dialog"};
   var confirmOptions = { height : 200, width:450};
   Xrm.Navigation.openConfirmDialog(confirmStrings, confirmOptions).then(
   	function(success){
   		if (success.confirmed) {
   	formContext.getAttribute("statuscode").setValue(100000000);
	formContext.data.entity.save();
	formContext.getAttribute("new_sentforrmapproval").setValue(true);
	formContext.data.entity.save();
   		}
   		else{
   			alert("Request Cancelled.")

   		}
   	});
}

function send_for_approval(formContext){
	alert("this is send for Approval");

}

function Send_For_SpareParts_Approval(){
	debugger;
	var confirmStrings = { text : "Do you really wish to send this for Spare Parts Approval?", title:"Confirmation Dialog"};
	var confirmOptions = { height : 200, width :450};
	Xrm.Navigation.openConfirmDialog(confirmStrings, confirmOptions).then(
		function(success){
			if (success.confirmed){
				formContext.getAttribute("statuscode").setValue(100000001);
				formContext.data.entity.save();
				formContext.getAttribute("new_sentforsparepartsapproval").setValue(true);
				formContext.data.entity.save();
			}
			else{
				console.log("request Cancelled");
			}


		});
}
function Send_For_Feedback(){
	alert("this is Send_For_Feedback button");
}



//this is the dialog box.
/*
function approve_special_confirmationbox(formContext){

var confirmStrings = { text:"Do you really want to continue?", title:"Confirmation Dialog" };
var confirmOptions = { height: 200, width: 450 };
Xrm.Navigation.openConfirmDialog(confirmStrings, confirmOptions).then(
function (success) {    
    if (success.confirmed)
        console.log("Dialog closed using OK button.");
    else
        console.log("Dialog closed using Cancel button or X.");
});
}
*/