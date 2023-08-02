public class arrayInJava {
    public static void main(String[] args) {
        
        // String[] studentName = {"Jack", "Ryan", "Newton"};
        
        // for(int i = 0; i <= studentName.length; i++){
        //     System.out.println(studentName[i]);
            
        // }

        int[] temp = {25, 26, 28};
        for (int i = 0; i < temp.length; i++ ){
        System.out.println(temp[i]);
        
        }



        String[] location = {"Mmmbai","Delhi", "Agra"}; 

        location[2] = "KOLKATA";

        System.out.println("We have change the Location from Agra to " + location[2]);
        System.out.println("Today in " + location[1] + " the temperature is " + temp[1]);
        System.out.println("There is total of " + location.length);

        String[] names = new String[5];

        names[0] = "Sohail";
        names[1] = "Cooper";
        names[2] = "Aftab";
        names[3] = "Afreen";
        names[4] = "Murph";
        // names[5] = "Nolan";

        System.out.println(names[4]);



        int[] numArray = { 3, 5, 1, 4, 2 };

        // num1 = 3 and num2 = 1
        // if(num1 > num2) = num1 = 1 num 2 = 3 - Ascending
        // if(num1 < num2) = num1 = 5 num 2 = 3 - descending

        System.out.println("Array elements befor sorting");

        for (int i = 0; i < numArray.length; i++) {
            System.out.print(numArray[i] + " ");
        }

        for (int i = 0; i < numArray.length; i++) {
            for (int j = i; j < numArray.length; j++) {
                if (numArray[i] > numArray[j]) {
                    int tmp = numArray[i];
                    numArray[i] = numArray[j];
                    numArray[j] = tmp;
                }
            }
            // System.out.println();
        }

        System.out.println("\nArray elements after sorting");

        for (int i = 0; i < numArray.length; i++) {
            System.out.print(numArray[i] + " ");
        }

    }
    
}
