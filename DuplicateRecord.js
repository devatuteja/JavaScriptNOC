function getrecord(executionContext){
    debugger;
    
    var formContext = executionContext.getFormContext();
    var lookup = formContext.getAttribute('name');
    var lookupVal = lookup.getValue();
    if((lookupVal!=null)){
        var id = lookupVal[0].id;
    }
    else if(lookup ==  null){
        alert("there is no account value to fetch from");
        return false;
    }
   
    Xrm.WebApi.retrieveRecord("account", id, "?$select=name,telephone1,websiteurl").then({
        function success(result){
           
                var name = result.name;
                var telephone1 = result.telephone1;
                var websiteurl = result.websiteurl;
                var data = {
                    'telephone1': telephone1,
                    'name':name,
                    'websiteurl':websiteurl
                }
            
             Xrm.WebApi.createRecord("account", data).then(
        function success(result){
            alert("record created ");
        },
        function error(result){
            alert("there's a error");
            return false;
        });

         },

        function error(result){
            alert("something went wrong fetching the value");
            return false;

        }
        );
}