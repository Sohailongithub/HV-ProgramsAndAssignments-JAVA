import java.util.Scanner;

public class loopsANDCondition {
    public static void main(String[] args) {

        //  Multiplication 
         Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int num = scanner.nextInt();
        scanner.close();

        for (int i = 1; i <= 10; i++) {
            int result = num * i;
            System.out.println(num + " x " + i + " = " + result);
        }
        
    }
}
