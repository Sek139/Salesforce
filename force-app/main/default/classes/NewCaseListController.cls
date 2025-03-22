public class NewCaseListController {

    
  
    public List<Case> getNewCases(){
        
        List<Case> listCases = new List<Case>();
        
        listCases = [SELECT ID ,CaseNumber, status FROM Case WHERE status = 'New' LIMIT 10];
    
        return listCases;
        
    }
    
}