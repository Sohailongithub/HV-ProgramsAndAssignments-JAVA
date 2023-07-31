import java.io.BufferedReader;
import java.io.FileReader;

public class fileBuffer {
    public static void main(String[] args) {
        try{
        BufferedReader br = new BufferedReader(new FileReader("sample.txt"));
        String line;
        br.close();
        while((line = br.readLine())!=null){
            System.out.println(line);
        }
    }catch(Exception e ){
        e.printStackTrace();
    }

    }
    
}
