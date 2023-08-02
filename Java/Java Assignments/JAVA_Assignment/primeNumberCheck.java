import java.util.Scanner;

public class primeNumberCheck {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter a number: ");
        int num = scanner.nextInt();

        boolean isPrime = true;

        // Check if the number is divisible by any number from 2 to sqrt(num)
        for (int i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0) {
                isPrime = false;
                break;
            }
        }

        if (num <= 1) {
            isPrime = false;
        }

        if (isPrime) {
            System.out.println("The given number " + num + " is a Prime number");
        } else {
            System.out.println("The given number " + num + " is NOT a Prime number");
        }

        scanner.close();
    }
    }
    

