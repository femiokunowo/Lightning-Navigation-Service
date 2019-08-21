({
    getUrl : function(component, event, helper) {
       
        component.set("v.navigationUrl",  'https://www.cnn.com'); 

        var pageReference = {
            type: 'standard__webPage',
            attributes: {
                url: 'https://www.cnn.com'
            }
        };
     
        component.set("v.pageReference", pageReference);  
        
    },

    navigationHandler: function(component, event, helper) {
        
        var navService  = component.find("navigationService");
        var theUrl = component.get("v.navigationUrl");
       
        var pageReference = { 
            type: 'standard__webPage',
            attributes: {
                url: theUrl
            }
        };
        
        navService.navigate(pageReference);
     
        
        
    }

})
