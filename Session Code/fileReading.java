import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class fileReading {
 public static void main(String[] args) throws FileNotFoundException {
  try (Scanner sc = new Scanner(new File("Sample.txt"))){
    while(sc.hasNextLine()){
        String Line = sc.nextLine();
        System.out.println(Line);
    }

    }catch (FileNotFoundException e){
          // TODO Auto-generated catch block
        e.printStackTrace();
    }
}
}
