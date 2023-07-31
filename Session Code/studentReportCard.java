import java.io.BufferedReader;
import java.io.FileReader;

public class studentReportCard {
    public static void main(String[] args) {
        try{
        BufferedReader br = new BufferedReader(new FileReader("D://JavaProgram//JavaProgram//students.csv "));
        String line;
        System.out.println("REPORT CARD ");
        System.out.println("************************************");
        br.readLine();
        br.close();
        while((line = br.readLine())!=null){
            // System.out.println(line);
            String[] data = line.split(",");
            String name = data[0];
            String subject1Name = data[1];
            int subject1Marks = Integer.parseInt(data[2].trim());
            String subject2Name = data[3];
            int subject2Marks = Integer.parseInt(data[4].trim());
            String subject3Name = data[5];
            int subject3Marks = Integer.parseInt(data[6].trim());
            String teacherFeedback = data[7];
            int totalMarks = subject1Marks + subject2Marks + subject3Marks;
            double avgMarks = totalMarks / 3;
            double percentage = (totalMarks / 300)*100;
            // double GPA = 
            String grade;


            if (percentage >= 90) {
                grade = "A+";
            } else if (percentage>= 80) {
                grade = "A";
            } else if (percentage >= 70) {
                grade = "B";
            } else if (percentage >= 60) {
                grade = "C";
            } else {
                grade = "F";
            }
            switch (percentage ) {
                case 90.0:
                    grade = "A+";
                    break;
                
                    case 80.0:
                    grade = "A";
                    break;

                    case 70.0:
                    grade = "B";
                    break;

                    case 60.0:
                    grade = "C";
                    break;

                    case 35.5:
                    grade = "F";
                    break;





            
                default:
                    break;
            }




            System.out.println("Name " + name);
            System.out.println("Subject 1  " + subject1Name + " : " + subject1Marks);
            System.out.println("Subject 2  " + subject2Name + " : " + subject2Marks);
            System.out.println("Subject 3  " + subject3Name + " : " + subject3Marks);
            System.out.println("Total Marks " + totalMarks);
            System.out.println("Average Marks " + avgMarks);
            System.out.println("Grade " + grade);
            System.out.println("*******************************");
            System.out.println("Teacher's Feedback : " + teacherFeedback);

        }

        
    }catch(Exception e ){
        e.printStackTrace();
    }

    }
    
}


// topper and class level analysis