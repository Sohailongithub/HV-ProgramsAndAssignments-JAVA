// Consider two variables - num1 = 10;num2 = 20;
// Write a Java program utilizing Relational Operators to produce the following output:
// Equal: False
// Not Equal: True
// num1 is Greater Than num2: False
// num1 is Less Than num2: True 

public class relationalOperator {
    public static void main(String[] args) {
        

        // Q1 The Relational Operators 
        int num1 = 10;
        int num2 = 20;

        if(num1 == num2){
            System.out.println("The number is not equal : " + false );
        }
        else if(num1 != num2){
            System.out.println("Num 1 and Num 2 is not equal : " + true );
        }
        else if(num1 > num2){
            System.out.println("Its incorrect : " + false);
        }
        else if(num1 < num2){
            System.out.println("Num 1 is less than Num 2 : " + true);
        }
     




        // Q2 The Assignment Operators

     
     int num3 = 10;
        // Addition 
     num3 += 2;
        System.out.println("After Addition " + num3);
     
        // Subtraction
     num3 -= 4;
        System.out.println("After Subtraction " + num3);
     
        // Multiplication
     num3 *= 7;
        System.out.println("After Multiplication " + num3);
        
        // Division
     num3 /= 4;
        System.out.println("After Division by 4 : " + num3);
    
        // modulus
     num3 %= 3;
        System.out.println("After Remainder/modulus : " + num3 );
    
    


    }  
}



