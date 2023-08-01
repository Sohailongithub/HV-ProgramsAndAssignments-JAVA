public class ArrayStatistics {
    public static void main(String[] args) {
        int[] arrNum = {31, 42, 25, 21, 56, 61, 13, 45, 76, 55};

        int min = arrNum[0];
        int max = arrNum[0];
        int sum = 0;

        for (int num : arrNum) {
            min = Math.min(min, num);
            max = Math.max(max, num);
            sum += num;
        }

        double average = (double) sum / arrNum.length;

        System.out.println("The element with the Minimum value: " + min);
        System.out.println("The element with the Maximum value: " + max);
        System.out.println("Average of all array elements: " + average);
        System.out.println("Total number of array elements: " + arrNum.length);
    }
}