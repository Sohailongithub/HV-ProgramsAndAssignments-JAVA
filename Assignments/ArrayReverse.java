public class ArrayReverse {
    public static void main(String[] args) {
        int[] arrNum = {15, 16, 29, 35, 45, 85, 96, 74, 87, 90};

        System.out.print("The elements in reverse order: ");
        for (int i = arrNum.length - 1; i >= 0; i--) {
            System.out.print(arrNum[i] + " ");
        }
    }
}