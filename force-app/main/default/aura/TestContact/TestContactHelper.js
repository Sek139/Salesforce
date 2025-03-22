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
               var PagList = [];
                for ( var i=0; i< pageSize; i++ ) {
                    if ( component.get("v.ListContact").length> i )
                        PagList.push(response.getReturnValue()[i]);    
                }
                component.set("v.ListContactLimit", PagList ); 
                
                var numberOfRecord = component.get("v.NumberOfRecord");
                numberOfRecord = component.get("v.ListContact").length;
                console.log("numberOfRecord"+ numberOfRecord);    
                component.set("v.NumberOfRecord", numberOfRecord);
                
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

    }
    
})