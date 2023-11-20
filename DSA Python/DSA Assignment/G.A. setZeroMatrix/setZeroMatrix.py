# Task 1 
# Initialize zero rows and zero colums 
#  create two empty sets to keep track of rows and columns containing atleast one zero
rows_with_zero = set()
cols_with_zero = set()
def initialize(matrix):
    global rows_with_zero, cols_with_zero
    for i in range(len(matrix)):
        if matrix[i][0] == 0:
            rows_with_zero.add(i)
            if matrix[0][i] == 0:
                cols_with_zero.add(i)
                initialize([[1,2],[3,4]])
                initialize([[1,2],[3,4]])
print("Rows with zeros", rows_with_zero)
print("Columns with zeros", cols_with_zero)
                

# Task 2 : Iterate through the matrix 
# start a loop to go through each element in the matrix 
# Check whether the current element is zero or not if yes add indices to  zero rows and zero columns
# if no comtinue the loop to the next element 
def iterate(matrix):
    global rows_with_zero, cols_with_zero
    for row in range(len(matrix)):
        for col in range(len(matrix[row])):
            if matrix[row][col] == 0:
                rows_with_zero.add(row)
                cols_with_zero.add(col)
                initialize([[1,2],[3,4]])
                iterate([[1,2],[3,4]])
                initialize([[1,2],[3,4]])
print("Rows with zeros", rows_with_zero)
print("Columns with zeros", cols_with_zero)
                
# Task 3 : Iterate through the matrix again 
# start another loop to go through each element in the matrix 
# check if the current row index or column index is in zero rows and zero columns 
# if yes set the current element to zero.
# if no continue the loop to the next element 
def iterate_again(matrix):
    global rows_with_zero, cols_with_zero
    for row in range(len(matrix)):
        for col in range(len(matrix[row])):
            if row in rows_with_zero or col in cols_with_zero:
                matrix[row][col] = 0
                iterate_again([[1,2],[3,4]])
                iterate_again([[1,2],[3,4]])
                print("Matrix after iteration", matrix)
                initialize([[1,2],[3,4]])
                iterate([[1,2],[3,4]])                
print("Rows with zeros", rows_with_zero)
print("Columns with zeros", cols_with_zero)    

# Task 4 : return the modified array 
# if the current row index or column index is in zero rows or zero columns, the task ends here and the 
# modified matrix is returned
def modify_array(matrix):
    global rows_with_zero, cols_with_zero
    for row in range(len(matrix)):
        for col in range(len(matrix[row])):
            if row in rows_with_zero or col in cols_with_zero:
                matrix[row][col] = 0
                break
            return matrix
        



# Example usage
# matrix = [
#     [1, 1, 1],
#     [1, 0, 1],
#     [1, 1, 1]
# ]
# initialize(matrix)
# print("Modified matrix:")
# for row in matrix:
#     print(row)