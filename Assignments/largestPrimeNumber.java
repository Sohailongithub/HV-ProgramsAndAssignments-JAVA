public class largestPrimeNumber {
    public static void main(String[] args) {
        int[] arrNum = {2, 29, 51, 8, 4};

        int largestPrime = -1;

        for (int num : arrNum) {
            if (isPrime(num) && num > largestPrime) {
                largestPrime = num;
            }
        }

        System.out.println("The Largest Prime number in the given array: " + largestPrime);
    }

    private static boolean isPrime(int number) {
        if (number <= 1) return false;
        for (int i = 2; i * i <= number; i++) {
            if (number % i == 0) {
                return false;
            }
        }
        return true;
    }
}
