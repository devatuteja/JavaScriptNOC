function Approve(executioncontext)
{
    debugger;
    var formcontext = executioncontext.getFormContext();
    var Role = Xrm.Utility.getGlobalContext().userSettings.securityRoles;
    for(var i =0; i<Role.length; i++)
    {
        Xrm.WebApi.retrieveRecord("roles",Role[i],"$select=name").then(
            function success(result){
                if(result.name != null){
                    if(result.name == "CEM"){
                        var formcontext = executioncontext.getFormContext();
                        formcontext.getAttribute("new_technicalfeasibilityapprovalremarks").setrequiredlevel("required");
                        var TFAR = formcontext.getAttribute("new_technicalfeasibilityapprovalremarks").getValue();
                    }

                }


            }
            
        );
    }

}