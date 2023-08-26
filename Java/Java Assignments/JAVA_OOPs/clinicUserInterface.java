package JAVA_OOPs;
import java.util.Scanner;

public class clinicUserInterface {
    public static void main(String[] args) {
        Clinic clinic = new Clinic();
        try (Scanner scanner = new Scanner(System.in)) {
            while (true) {
                System.out.println("--------------------------------------------------------------------");
                System.out.println("Welcome to the Small Clinic Appointment Management System ");
                System.out.println("--------------------------------------------------------------------");
                System.out.println("1. View Visitors List");
                System.out.println("2. Add New Visitor ");
                System.out.println("3. Edit Visitor Details");
                System.out.println("4. View Appointment Schedule for a Day ");
                System.out.println("5. Book an Appointment");
                System.out.println("6. Edit/Cancel Appointment");
                System.out.println("7. Exit");
                System.out.println("----------------------------------------------------------------------");

                int choice = scanner.nextInt();
                scanner.nextLine(); // Consume the newline character

                switch (choice) {
                    case 1:
                        // TODO:Implement View Visitors List
                        break;
                    case 2:
                        // TODO: Implement Add New Visitor
                        break;
                    case 3:
                        // TODO: Implement Edit Visitor Details
                        break;
                    case 4:
                        // TODO: Implement View Appointment Schedule for a Day
                        break;
                    case 5:
                        // TODO: Implement Book an Appointment
                        break;
                    case 6:
                        // TODO: Implement Edit/Cancel Appointment
                        break;
                    case 7:
                        System.out.println("Exiting the system. Goodbye!");
                        System.exit(0);
                        break;
                    default:
                        System.out.println("Invalid choice. Please enter a valid option.");
            }
   }
        }
}
}