// 1. Create a Java program that analyzes a directory and its subdirectories. The program should do the following:

//    - Recursively traverse the directory and its subdirectories.

//    - Identify and list all files with a ".txt" extension.

//    - Calculate the total size (in bytes) of all ".txt" files in the directory and its subdirectories.

//    - Identify and list all unique words found in these ".txt" files (case insensitive).

//    - Count the frequency of each unique word and display the top 10 most frequent words.

import java.io.*;
import java.util.*;

public class TextAnalyzer {
    private static Map<String, Integer> wordFrequency = new HashMap<>();

    public static void main(String[] args) {
        File directory = new File("D:\\Hero Vired FSD 11\\Java\\Java Assignments\\directoryAnalysis"); // Replace with the path to your directory

        if (directory.exists() && directory.isDirectory()) {
            analyzeDirectory(directory);
            displayResults();
        } else {
            System.out.println("Invalid directory path.");
        }
    }

    private static void analyzeDirectory(File directory) {
        File[] files = directory.listFiles();
        if (files != null) {
            for (File file : files) {
                if (file.isDirectory()) {
                    analyzeDirectory(file);
                } else if (file.isFile() && file.getName().toLowerCase().endsWith(".txt")) {
                    processTextFile(file);
                }
            }
        }
    }

    private static void processTextFile(File file) {
        try (Scanner scanner = new Scanner(file)) {
            while (scanner.hasNext()) {
                String word = scanner.next().toLowerCase().replaceAll("[^a-zA-Z]", ""); // Remove non-alphabetic characters
                if (!word.isEmpty()) {
                    wordFrequency.put(word, wordFrequency.getOrDefault(word, 0) + 1);
                }
            }
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
    }

    private static void displayResults() {
        long totalSize = wordFrequency.keySet().stream()
                .mapToLong(word -> word.getBytes().length * wordFrequency.get(word))
                .sum();

        System.out.println("Total size of all .txt files: " + totalSize + " bytes");

        List<Map.Entry<String, Integer>> sortedEntries = new ArrayList<>(wordFrequency.entrySet());
        sortedEntries.sort((e1, e2) -> e2.getValue().compareTo(e1.getValue()));

        System.out.println("\nTop 10 most frequent words:");
        int count = 0;
        for (Map.Entry<String, Integer> entry : sortedEntries) {
            if (count >= 10) break;
            System.out.println(entry.getKey() + ": " + entry.getValue() + " occurrences");
            count++;
        }
    }
}
