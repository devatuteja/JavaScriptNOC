function ribbon_button_visibility(formcontext)
{
	//lookup retrieve using javascript

	var lookup = formcontext.getAttribute("new_pendingat");
	var lookupval = lookup.getValue();
	//var id = lookupval[0].id;
	
	//retrieving the optionset will always return you integer
	var statusvalue = formcontext.getAttribute("statuscode").getValue();
	// retrieving the two option will give you the 1 or 0 true and false
	var approve_flag = formcontext.getAttribute("new_approve").getValue();
	var disapprove_flag = formcontext.getAttribute("").getValue();

	if (lookupval == null && statusvalue == 1 && approve_flag == 0 && disapprove_flag==0 )
	{

	}


}	