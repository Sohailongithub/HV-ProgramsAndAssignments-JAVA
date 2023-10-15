// 2. Implement a file validation and transformation process for text files:
//    - Create a file named "input.txt" with sample text data, including both valid and invalid records.

//    - Read the "input.txt" file and validate each record.

//      - Valid records should have a specific format (e.g., a CSV-like format with specific columns).

//      - Invalid records should be logged with details about what makes them invalid.

//    - Transform the valid records into a new format and write them to an "output.txt" file.

//    - Create a summary report that includes the number of valid and invalid records.

// 3. Implement robust error handling and logging:
//    - Use appropriate exception handling mechanisms to handle file I/O exceptions, validation errors, and other potential issues.

//    - Log all exceptions and errors to a dedicated log file named "error.log" using a logging framework of your choice (e.g., Log4j or java.util.logging).

// 4. Implement the following  features:

//    - Allow the user to specify the directory path to be analyzed as a command-line argument.

//    - Provide an option to search for specific keywords within the ".txt" files and display the matching lines.

//    - Implement a configuration file (e.g., "config.properties") to store program settings such as the log file path, valid file format, and transformation rules.

import java.io.*;
import java.util.List;
import java.util.ArrayList;
import java.util.logging.FileHandler;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.util.logging.SimpleFormatter;

public class FileValidator {
    private static final String INPUT_FILE = "input.txt";
    private static final String OUTPUT_FILE = "output.txt";
    private static final String LOG_FILE = "error.log";

    private static final Logger logger = Logger.getLogger(FileValidator.class.getName());

    static {
        try {
            FileHandler fileHandler = new FileHandler(LOG_FILE, true);
            SimpleFormatter formatter = new SimpleFormatter();
            fileHandler.setFormatter(formatter);
            logger.addHandler(fileHandler);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static void main(String[] args) {
        List<String> validRecords = new ArrayList<>();
        List<String> invalidRecords = new ArrayList<>();

        try {
            try (BufferedReader reader = new BufferedReader(new FileReader(INPUT_FILE))) {
                String line;
                while ((line = reader.readLine()) != null) {
                    try {
                        if (isValidRecord(line)) {
                            validRecords.add(transformRecord(line));
                        } else {
                            invalidRecords.add(line);
                        }
                    } catch (Exception e) {
                        logger.log(Level.SEVERE, "Error processing record: " + line, e);
                    }
                }
            }
            writeOutput(validRecords);

            System.out.println("Summary Report:");
            System.out.println("Valid Records: " + validRecords.size());
            System.out.println("Invalid Records: " + invalidRecords.size());

        } catch (FileNotFoundException e) {
            logger.log(Level.SEVERE, "Input file not found.", e);
        } catch (IOException e) {
            logger.log(Level.SEVERE, "Error reading input file.", e);
        }
    }

    private static boolean isValidRecord(String record) throws Exception {
        // Example validation: Check if the record has 3 comma-separated fields
        String[] fields = record.split(",");
        if (fields.length != 3) {
            throw new Exception("Invalid record format: " + record);
        }
        return true;
    }

    private static String transformRecord(String record) throws Exception {
        // Example transformation: Reverse the order of fields
        String[] fields = record.split(",");
        if (fields.length != 3) {
            throw new Exception("Invalid record format: " + record);
        }
        return fields[2] + "," + fields[1] + "," + fields[0];
    }

    private static void writeOutput(List<String> validRecords) {
        try {
            BufferedWriter writer = new BufferedWriter(new FileWriter(OUTPUT_FILE));
            for (String record : validRecords) {
                writer.write(record + "\n");
            }
            writer.close();
        } catch (IOException e) {
            logger.log(Level.SEVERE, "Error writing output file.", e);
        }
    }

}
