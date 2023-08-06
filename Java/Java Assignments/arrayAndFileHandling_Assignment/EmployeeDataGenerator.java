package arrayAndFileHandling_Assignment;

import java.util.ArrayList;
import java.util.List;

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
}


