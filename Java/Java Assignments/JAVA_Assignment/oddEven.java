import java.util.Scanner;

public class oddEven {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String choice;

        do {
            System.out.println("\nMenu based app - Even/Odd Checker");
            System.out.print("Please enter the number: ");
            int number = scanner.nextInt();

            String result = (number % 2 == 0) ? "EVEN" : "ODD";
            System.out.println("The given number - " + number + " is an " + result + " Number");

            System.out.print("\nDo you want to Continue (y/n): ");
            choice = scanner.next();
        } while (choice.equalsIgnoreCase("y"));

        scanner.close();
    }
    
}
