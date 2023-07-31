import java.util.ArrayList;
import java.util.List;

public class moveOneToEnd {
    public static void main(String[] args) {
        int[] arrNum = {3, 1, 4, 1, 2, 1, 8, 3, 2, 1};

        List<Integer> nonOnes = new ArrayList<>();
        int onesCount = 0;

        for (int num : arrNum) {
            if (num == 1) {
                onesCount++;
            } else {
                nonOnes.add(num);
            }
        }

        for (int i = 0; i < onesCount; i++) {
            nonOnes.add(1);
        }

        System.out.print("Array elements after moving Ones to end: ");
        for (int num : nonOnes) {
            System.out.print(num + " ");
        }
    }
}

