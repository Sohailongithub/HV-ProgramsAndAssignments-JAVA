import java.util.Scanner;

public class distanceConverter {
    public static void main(String[] args) {
        

        Scanner scanner = new Scanner(System.in);
        String choice = "y";

        do {
            System.out.println("\nMenu based app - Unit conversion for Distance");
            System.out.println("1. CM to M");
            System.out.println("2. M to KM");
            System.out.println("3. KM to M");
            System.out.println("4. M to CM");
            System.out.print("Enter your menu: ");
            int menu = scanner.nextInt();

            double value;
            double convertedValue;
            String unitFrom;
            String unitTo;

            switch (menu) {
                case 1:
                    unitFrom = "CM";
                    unitTo = "M";
                    System.out.print("Please enter the CM value: ");
                    value = scanner.nextDouble();
                    convertedValue = value / 100;
                    break;
                case 2:
                    unitFrom = "M";
                    unitTo = "KM";
                    System.out.print("Please enter the M value: ");
                    value = scanner.nextDouble();
                    convertedValue = value / 1000;
                    break;
                case 3:
                    unitFrom = "KM";
                    unitTo = "M";
                    System.out.print("Please enter the KM value: ");
                    value = scanner.nextDouble();
                    convertedValue = value * 1000;
                    break;
                case 4:
                    unitFrom = "M";
                    unitTo = "CM";
                    System.out.print("Please enter the M value: ");
                    value = scanner.nextDouble();
                    convertedValue = value * 100;
                    break;
                default:
                    System.out.println("Invalid menu choice.");
                    continue;
            }

            System.out.println(value + " " + unitFrom + " = " + convertedValue + " " + unitTo);

            System.out.print("\nDo you want to Continue (y/n): ");
            choice = scanner.next();
        } while (choice.equalsIgnoreCase("y"));

        scanner.close();
    }
    
}
