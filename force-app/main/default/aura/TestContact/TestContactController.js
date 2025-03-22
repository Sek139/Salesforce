({
    doInit : function(component, event, helper) {
        helper.getListContact(component);
    },
    
    goToNewPage: function(component, event, helper) {
        
        var urlEvent = $A.get("e.force:navigateToURL");
        urlEvent.setParams({
            "url": "/selfRegister"
        });
        
        urlEvent.fire();
    },
    
    goToExternalSite: function(component, event, helper) {
        
        var urlEvent = $A.get("e.force:navigateToURL");
        urlEvent.setParams({
            "url": "https://www.google.com/"
        });
        
        urlEvent.fire();
    },
    
    navigateToMyComponent : function(component, event, helper) {
        var evt = $A.get("e.force:navigateToComponent");
        evt.setParams({
            componentDef : "c:selfRegister",
            
        });
        evt.fire();
    },
 
     openTab: function(component, event, helper) {
        var workspaceAPI = component.find("workspace");
        workspaceAPI.openTab({
            pageReference: {
                "type": "standard__recordPage",
                "attributes": {
                    "recordId":"500xx000000Ykt2AAC",
                    "actionName":"view"
                },
                "state": {}
            },
            focus: true
        }).then(function(response) {
            workspaceAPI.getTabInfo({
                tabId: response
        }).then(function(tabInfo) {
            console.log("The recordId for this tab is: " + tabInfo.recordId);
        });
        }).catch(function(error) {
            console.log(error);
        });
    },

    
    navigate : function(component, event, helper) {
        var nagigateLightning = component.find('navigate');
        var pageReference = {    
            "type": "standard__component",
            "attributes": {
                "componentName": "c:listContacts"              
            } 
           
        };
   
       console.log("Debug######"+JSON.stringify( nagigateLightning.generateUrl(pageReference)));
        nagigateLightning.navigate(pageReference);
    }
})