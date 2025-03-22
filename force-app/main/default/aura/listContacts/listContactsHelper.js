({
	getListContact : function(component) {

        
        var action = component.get("c.getListContacts");
       
        action.setCallback(this, function(response) {
            var state = response.getState();

            if (component.isValid() && state === "SUCCESS") {
                var pageSize = component.get("v.pageSize");
                var results = response.getReturnValue();
                console.log("Debug######"+JSON.stringify(results));
                component.set("v.ListContact",  response.getReturnValue());  
             
            } else if (state === "INCOMPLETE") {
                // do something
            } else if (state === "ERROR") {
                var errors = response.getError();
                if (errors) {
                    for (var i = 0; i < errors.length; i++) {
                        console.log("Error message: " + errors[i].message);
                    }
                }
            }
        });
  
        $A.enqueueAction(action);

    },
    setFocusedTabLabel : function(component, event, helper) {
        var workspaceAPI = component.find("workspace");
        workspaceAPI.getFocusedTabInfo().then(function(response) {
            var focusedTabId = response.tabId;
             console.log("Debug######"+JSON.stringify(response));
            workspaceAPI.setTabLabel({
                tabId: focusedTabId,
                label: "Documents GED Allianz"
            });
        })
        .catch(function(error) {
            console.log(error);
        });
    }
})