import java.io.BufferedReader;
import java.io.FileReader;

public class csvFileReader {
    public static void main(String[] args) {
        try{
        BufferedReader br = new BufferedReader(new FileReader("Book1.csv"));
        String line;
        br.readLine();
        br.close();
        while((line = br.readLine())!=null){
            // System.out.println(line);
            String[] data = line.split(",");
            String n = data[0];
            System.out.println(n);

            String a = data[1];
            System.out.println(a);

            String age= data[1];
                int age1=Integer.parseInt(age);
                System.out.println(age1);

            String c = data[2];
            System.out.println(c);

        }
    }catch(Exception e ){
        e.printStackTrace();
    }

    }
    
}


