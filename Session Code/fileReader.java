import java.io.FileReader;

public class fileReader {
    public static void main(String[] args) {
        try {
            FileReader fr = new FileReader("sample.txt");
            int i;
            while ((i = fr.read()) != -1) {
                System.out.print((char) i);
            }
            fr.close();
        } catch (Exception e) {
           
        }
        

    }
}
