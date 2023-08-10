import java.util.Scanner;

public class fileOperations {
    public static void main(String[] args) {
        try (Scanner scanner = new Scanner(System.in)) {
            int choice;

            do {
                System.out.println("-------------------------------------------------------------");
                System.out.println("Select the file operation you want to perform ");
                System.out.println("-------------------------------------------------------------");
                System.out.println("1. Create a new folder ");
                System.out.println("2. Create a new text file ");
                System.out.println("3. Write into a text file ");
                System.out.println("4. Append data to a text file ");
                System.out.println("5. Rename a file ");
                System.out.println("6. Delete a file ");
                System.out.println("7. Exit");

                choice = scanner.nextInt();

                switch (choice) {
                    case 1:
                        createFolder();
                        break;
                        case 2:
                        createTextFile();
                        break;
                        case 3:
                        writeFile();
                        break;
                        case 4:
                        appendDataToFile();
                        break;
                        case 5:
                        renameFile();
                        break;
                        case 6:
                        deleteFile();
                        break;
                        case 7:
                        System.out.println("Exit Succesful");
                        break;

                
                    default:
                    System.out.println("Invalid choice. Please try again.");
                        break;
                }
                
            } while(choice != 7);
        }
        
    }

    private static void deleteFile() {
    }

    private static void renameFile() {
    }

    private static void appendDataToFile() {
    }

    private static void writeFile() {
    }

    private static void createTextFile() {
    }

    private static void createFolder() {
    }
    
}