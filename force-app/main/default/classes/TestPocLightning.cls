public class TestPocLightning {
   
    @AuraEnabled
    public static List<Contact> getListContacts(){
        
        List<Contact> listContacts = new List<Contact>();
        listContacts = [SELECT Id,Birthdate,Email,FirstName,HomePhone,LastName,Name,Salutation FROM Contact];
  
        return listContacts;
    }
}