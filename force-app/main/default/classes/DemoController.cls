public class DemoController {
    public string[] firstName { get; set; }
    public string[] lastName { get; set; }
    public string[] cityName { get; set; }
    public Integer[] indexes { get; set; }
    public DemoController() {
        firstName = new string[] { 'John' , 'Amy' , 'Andrew'};
        lastName = new string[] { 'Smith' , 'Williams' , 'Jones'};
        cityName = new string[] { 'New York' , 'LA' , 'Miami'};
        indexes = new Integer[] { 0, 1, 2 };
            
            System.debug('firstName' +firstName);
    }
}