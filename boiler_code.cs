using System;

public class Class1 : Iplugin
{
    public void Execute(IServiceProvider serviceprovider)
    {
        //obtain the tracingservice
        ITracingService tracingservice =
        (ITracingService)serviceprovider.GetService(typeof(ITracingService));
        //obtain the context 
        IPluginExecutionContext context =
        (IPluginExecutionContext)serviceprovider.GetService(typeof(IPluginExecutionContext));
        //validation point for target 
        if (context.InputParameters.Contains("Target") && context.InputParameters["Target"] is Entity && context.depth < 2)
        {
            Entity entity = (Entity)context.InputParameters["Target"];

            IOrganizationService ServiceFactory = (IOrganizationService)serviceprovider.GetService(typeof(IOrganizationService));
            IOrganizationService service = ServiceFactory.CreateOrganizationService(context.UserId);

            try
            {
                //for sharing a case 
                var incidentref = new EntityReference(entity.LogicalName, entity.ID);
                var userref = new EntityReference("systemuser", new Guid("76858628c4d2e911910400155d0a0438"));

                var grantaccessrequest = new GrantAccessRequest
                {
                    PrincipalAccess = new PrincipalAccess
                    {
                        AccessMask = AccessRights.ReadAccess | AccessRights.WriteAccess | AccessRights.AppendAccess | AccessRights.AppendToAccess

                    },
                    Target = incidentref
                };
                service.Execute(incidentref);

                //optionset 

                //for getting the optionset 
                Entity status_value = service.Retrieve(entity.LogicalName, entity.Id, new ColumnSet("statuscode"));
                var status_info = (OptionSetValue)status_value.Attributes["statuscode"];
                var status_value = status_info.Attributes["statuscode"];
                int status_num = status_value.Value;

                //for setting the optionset 
                Entity status_ref = service.Retrieve(entity.LogicalName, entity.Id, new ColumnSet("statuscode"));
                status_ref.Attributes["statuscode"] = new OptionSetValue(10000);
                service.Update(status_ref);

                //optionset 


                //LookupValue:
                //for getting the Lookup value 

                Entity incidentref = service.Retrieve(entity.LogicalName, entity.Id, new ColumnSet("new_pendingat"));
                if (incidentref.Contains("new_pendingat"))
                {
                    var ownerdetails = (EntityReference)incidentref.Attributes["new_pendingat"];

                    var ownerstatus = service.Retrieve(ownerdetails.LogicalName, ownerdetails.Id, new ColumnSet("fullname"));
                    if (ownerstatus.Contains("fullname"))
                    {
                        

                    }


                }
                //if ryou dont have Entity's logical Id and want to retrieve something from there

                QueryByAttribute querybyexpression = new QueryByAttribute("new_joborder");
                querybyexpression.AddAttributeValue("new_relatedcaseid",entity.Id);
                int count = querybyexpression.Values.Count;

                
                
                //
                QueryByAttribute querybyexpression = new QueryByAttribute("new_joborder");
                querybyexpression.AddAttributeValue("new_relatedcaseid",entity.Id);
                int count = querybyexpression.Values.Count;
                //

                QueryByAttribute querybyexpression = new QueryByAttribute("new_joborder");
                querybyexpression.AddAttributeValue("new_relatedcaseid", entity.Id);
                int count = querybyexpression.Values.Count;
                







            }

            catch (Exception ex)
            {
                throw new Exception("" + ex.Message);
            }
        }
    }
}
