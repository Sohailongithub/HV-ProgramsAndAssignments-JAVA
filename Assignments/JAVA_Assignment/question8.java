import java.util.Scanner;

public class question8 {
    public static void main(String[] args) {
         Scanner scanner = new Scanner(System.in);

        System.out.print("Enter the first number: ");
        int num1 = scanner.nextInt();

        System.out.print("Enter the second number: ");
        int num2 = scanner.nextInt();

        System.out.print("Enter the third number: ");
        int num3 = scanner.nextInt();

        // Finding the smallest number
        int smallest = Math.min(num1, Math.min(num2, num3));

        // Finding the largest number
        int largest = Math.max(num1, Math.max(num2, num3));

        // Calculating the average
        double average = (num1 + num2 + num3) / 3.0;

        System.out.println("The Smallest Number: " + smallest);
        System.out.println("The Largest Number: " + largest);
        System.out.println("Average of all three numbers: " + average);

        scanner.close();
    }
}