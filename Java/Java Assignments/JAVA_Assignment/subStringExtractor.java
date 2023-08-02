import java.util.Scanner;

public class subStringExtractor {
    public static void main(String[] args) {
         Scanner scanner = new Scanner(System.in);

        System.out.print("Enter a string: ");
        String stringName = scanner.nextLine();

        System.out.print("Enter the starting index: ");
        int startIndex = scanner.nextInt();

        System.out.print("Enter the ending index: ");
        int endIndex = scanner.nextInt();

        // Check if the indices are within valid range
        if (startIndex >= 0 && endIndex < stringName.length() && startIndex <= endIndex) {
            String substring = stringName.substring(startIndex, endIndex + 1);
            System.out.println("Substring of " + stringName + " from " + startIndex + " to " + endIndex + " is: " + substring);
        } else {
            System.out.println("Invalid indices!");
        }

        scanner.close();
    }
    
}
