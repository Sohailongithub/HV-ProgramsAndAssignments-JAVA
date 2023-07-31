import java.io.IOException;
import java.util.Arrays;
import java.util.Random;
import java.util.Scanner;

public class game {

    public static void clearScreen() {
        try {
            if (System.getProperty("os.name").contains("Windows")) {
                // For Windows, use "cls" command to clear the screen
                new ProcessBuilder("cmd", "/c", "cls").inheritIO().start().waitFor();
            } else {
                // For Unix-like systems (Linux, macOS), use ANSI escape sequence to clear the screen
                System.out.print("\033[H\033[2J");
                System.out.flush();
            }
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
        }
    }
    public static void main(String[] args) throws InterruptedException {
        Scanner sc = new Scanner(System.in);
        Random r = new Random();    
        
        System.out.println("Number Memory Game ");
        int numberLength = 4;
        int score = 0;


        // Task 1

        int[] number = new int[numberLength];

        for(int i = 0; i < numberLength; i++){
            number [i] = r.nextInt(10);
        }


        System.out.println("The Sequence is " + Arrays.toString(number));
        Thread.sleep(2000); 
        clearScreen();

        System.out.println("Enter The Sequence ");
        for(int i = 0 ; i < numberLength; i++){
        int userInput = sc.nextInt();

        if(userInput == number[i]){
            System.out.println("Well Done");
            score++;
            System.out.println(score);
        }
        else{
            System.out.println("Sorry Wrong Answer ");
        }
        
        }

        sc.close();



    




    }
    
    
}


// Game Description: "Number Memory Game"

// Objective: The player needs to memorize a sequence of randomly generated numbers and then enter the numbers in the correct order. The game will gradually increase the sequence length to challenge the player's memory.

// Steps to Implement the Game:

// Generate a random sequence of numbers and store them in an array.
// Display the sequence of numbers to the player for a few seconds to allow them to memorize it.
// Clear the screen to hide the sequence.
// Prompt the player to enter the numbers in the sequence.
// Compare the player's input with the original sequence to check if it's correct.
// Gradually increase the length of the sequence for each round.
// Keep track of the player's score based on the number of correct guesses.