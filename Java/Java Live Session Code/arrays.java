import java.util.ArrayList;
import java.util.Collections;

public class arrays {
    public static void main(String[] args) {
        
        int[] arr;
        arr = new int[3];
        arr[0] = 10;        
        arr[1] = 20;
        arr[2] = 30;       
        //  arr[3] = 40;
         System.out.println(arr[2]);
        int[] arr2 = {100, 200, 300};
        System.out.println(arr2[2]);

        String[] arrName;
        arrName = new String[3];
        arrName[0] = "Chirstopher";
        arrName[1] = "Nolan";
        arrName[2] = "Java";

        System.out.println(arrName[1]);
        System.out.println(arrName.length);

        for(int i = 0; i < arrName.length; i++); 

            //Write a Java program to check if an array contains a specific element.

            int[] arr1 = {10, 20, 30, 40, 50, 60};
            int search = 500;
            boolean flag = false;
        
            // for each loop  // 
          
            for (int i : arr1) {
              if(i == search){
                System.out.println("Yes, value present ");
                flag = true;
                break;
              }
           
            }
            if (flag == false)  // flag
              System.out.println("No");
            
    
         ArrayList<String> name = new ArrayList<>();
        name.add("Hero");
        name.add("Vired");
        name.add("Python");
        name.add("Java");
        System.out.println(name);

        name.remove(0);
        System.out.println(name);

        name.set(0 , "Class");
        System.out.println(name);

        Collections.reverse(name);
        System.out.println(name);
        
        Collections.shuffle(name);
        System.out.println(name);

        


      



            
        
            










    }
}
