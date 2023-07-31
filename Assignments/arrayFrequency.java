import java.util.HashMap;
import java.util.Map;

public class arrayFrequency {
    public static void main(String[] args) {
        int[] arrSuperSet = {3, 1, 3, 4, 1, 2, 1, 8, 3, 2, 1, 1, 3, 2, 3, 3, 4};
        int[] arrSubSet = {1, 2, 3, 5, 9};

        Map<Integer, Integer> frequencyMap = new HashMap<>();

        for (int num : arrSuperSet) {
            frequencyMap.put(num, frequencyMap.getOrDefault(num, 0) + 1);
        }

        System.out.println("Frequency of elements from Array B in Array A:");
        for (int num : arrSubSet) {
            int frequency = frequencyMap.getOrDefault(num, 0);
            System.out.println("Frequency of " + num + ": " + frequency);
        }
    }
}
