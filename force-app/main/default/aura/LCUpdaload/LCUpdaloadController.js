({
    afterFinish : function(component, event, helper) {
        //  Geting the list of uploaded files
        var uploadFiles = event.getParam("files");
        
        var strFileNames = '';
        
        // getting uploaded file names
        for(var i=0; i<uploadFiles.length; i++) {
            strFileNames += uploadFiles[i].name + ', ';
        }
        
        // Showing Success message
        component.find("notifLib").showToast({
            "variant": "success",
            "title": strFileNames,
            "message": uploadFiles.length + " Files are Uploaded Successfully!"
        });
        $A.get("e.force:refreshView").fire();
    }
})