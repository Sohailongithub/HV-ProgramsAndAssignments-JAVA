import java.io.BufferedReader;
import java.io.FileReader;
import java.io.FileWriter;

public class updateFileUsingFileWriter {
    public static void main(String[] args) {
        String fileName = "studentData.csv";

        // Update the Science MArks for the Student with Roll No - 3
        try {
            BufferedReader objBufferedReader = new BufferedReader(new FileReader(fileName));
            String studentDataPerLine ="";
            String updatedStudentData = "";
            while ((studentDataPerLine = objBufferedReader.readLine()) != null) {

                String rollNo = studentDataPerLine.substring(0, studentDataPerLine.indexOf(","));
                studentDataPerLine = studentDataPerLine.substring(studentDataPerLine.indexOf(",")+1);

                String name = studentDataPerLine.substring(0, studentDataPerLine.indexOf(","));
                studentDataPerLine = studentDataPerLine.substring(studentDataPerLine.indexOf(",")+1);

                String subject1 = studentDataPerLine.substring(0, studentDataPerLine.indexOf(","));
                studentDataPerLine = studentDataPerLine.substring(studentDataPerLine.indexOf(",")+1);

                String subject1Marks = studentDataPerLine;
                // for the last variable - we will not use the formula to find the next comma - 
                // 3,Neeraj,Math,55
                // as after 55 there is no comma included in the line

                if(rollNo.equals("3")){
                    subject1Marks = "55";
                }
                //   System.out.println(rollNo + "," + name + "," + subject1 + "," + subject1Marks);
                  updatedStudentData += (rollNo + "," + name + "," + subject1 + "," + subject1Marks+ "\n");
            }
            // String newData = "";
            objBufferedReader.close();
            FileWriter objFileWriter = new FileWriter(fileName);
            objFileWriter.write(updatedStudentData);
            objFileWriter.close();
    
        } catch (Exception e) {
            System.out.println("Error while writing into a File: " + e.getMessage());
        }

    }
}