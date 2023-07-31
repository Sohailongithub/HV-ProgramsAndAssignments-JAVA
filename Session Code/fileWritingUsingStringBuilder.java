import java.io.FileWriter;

public class fileWritingUsingStringBuilder {
    public static void main(String[] args) {
        
        StringBuilder sb = new StringBuilder();
        sb.append("Hello World").append(System.lineSeparator());
        sb.append("I am sohail ").append(System.lineSeparator());
        sb.append("We are learning Java").append(System.lineSeparator());
        
        try {
            FileWriter file = new FileWriter("file2.txt");
            file.write(sb.toString());
            file.close();

        } catch (Exception e) {
            // TODO: handle exception
        }

    }
    
}
