public class addingdataintoarray {
    public static void main(String[] args) {

        String[] arr1 = { "101", "book name", "authorname" };
        String[] arr2 = { "102", "book name", "authorname" };
        String[] arr3 = { "103", "book name", "authorname" };
        String[] arr4 = { "104", "book name", "authorname" };
        String[] arr5 = { "105", "book name", "authorname" };

        String[][] multiArray = new String[5][];

        multiArray[0] = arr1;
        multiArray[1] = arr2;
        multiArray[2] = arr3;
        multiArray[3] = arr4;
        multiArray[4] = arr5;

        // Printing the elements of the multidimensional array
        for (int i = 0; i < multiArray.length; i++) {
            for (int j = 0; j < multiArray[i].length; j++) {
                System.out.print(multiArray[i][j] + " ");
            }
            System.out.println();
        }
    }
}
