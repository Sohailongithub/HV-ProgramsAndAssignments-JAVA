package arrayAndFileHandling_Assignment;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.Scanner;

public class EmployeeDataGenerator {

    public static List<Employee> generateEmployeeData() {
        List<Employee> employees = new ArrayList<>();

        employees.add(new Employee(1, "John Doe", "Sales", 100000.0));
        employees.add(new Employee(2, "Jane Doe", "Marketing", 80000.0));
        employees.add(new Employee(3, "Bill Smith", "Engineering", 90000.0));
        employees.add(new Employee(4, "Mary Jones", "Finance", 70000.0));
        employees.add(new Employee(5, "Peter Brown", "IT", 60000.0));

        return employees;
    }

    public static void main(String[] args) {
        List<Employee> employees = generateEmployeeData();

        for (Employee employee : employees) {
            System.out.println(employee);
        }
    }
}

class Employee {

    private int id;
    private String name;
    private String department;
    private double salary;

    public Employee(int id, String name, String department, double salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getDepartment() {
        return department;
    }

    public double getSalary() {
        return salary;
    }

    @Override
    public String toString() {
        return String.format("%d,%s,%s,%.2f", id, name, department, salary);
    }
    
public class EmployeeInfoManager {
    public static void main(String[] args) {
        List<Personnel> staffList = new ArrayList<>();
        String outputFile = "output.csv";

        try (Scanner userInput = new Scanner(System.in)) {
            int selectedOption;

            do {
                showOptions();
                System.out.print("Please select an option: ");
                selectedOption = userInput.nextInt();

                switch (selectedOption) {
                    case 1:
                        staffList = createPersonnelData();
                        break;
                    case 2:
                        Collections.sort(staffList, Comparator.comparingDouble(Personnel::getSalary));
                        storeDataToFile(staffList, outputFile, userInput);
                        System.out.println("Employee data has been successfully stored in 'EmployeeData.csv'.");
                        break;
                    case 3:
                        confirmFileContents(outputFile);
                        break;
                    case 4:
                        System.out.println("Thank you for using the Employee Management App. Goodbye!");
                        break;
                    default:
                        System.out.println("The option you selected is not valid. Please try again.");
                }
            } while (selectedOption != 4);
        } catch (IOException e) {
            System.err.println("An error occurred while handling file operations: " + e.getMessage());
        } catch (Exception e) {
            System.err.println("Oops! Something unexpected occurred: " + e.getMessage());
        }
    }

    private static List<Personnel> createPersonnelData() {
        return null;
    }


    public static void storeDataToFile(List<Personnel> staffList, String filePath, Scanner userInput) throws IOException {
        File outputFile = new File(filePath);
        if (outputFile.exists()) {
            System.out.print("'EmployeeData.csv' already exists. Do you want to overwrite it? (yes/no): ");
            String response = userInput.next().toLowerCase();
            if (!response.equals("yes")) {
                System.out.println("Operation cancelled. The existing file was not overwritten.");
                return;
            }
        }

        try (BufferedWriter writer = new BufferedWriter(new FileWriter(filePath))) {
            writer.write("Employee ID,Employee Name,Department,Salary");
            writer.newLine();

            for (Personnel employee : staffList) {
                writer.write(employee.getId() + ","
                        + employee.getName() + ","
                        + employee.getDept() + ","
                        + employee.getSalary());
                writer.newLine();
            }
        }
    }

    public static void confirmFileContents(String filePath) throws IOException {
        try (BufferedReader reader = new BufferedReader(new FileReader(filePath))) {
            String line;
            System.out.println("\nReading the contents of 'EmployeeData.csv':");
            while ((line = reader.readLine()) != null) {
                System.out.println(line);
            }
        }
    }

    public static void showOptions() {
        System.out.println("\nOptions:");
        System.out.println("1. Create new personnel data");
        System.out.println("2. Store data in file (and sort)");
        System.out.println("3. Read data from file");
        System.out.println("4. Exit the application");
    }

}
}
