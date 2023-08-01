# employee.txt - 

# Name Department Salary
# Rahul  IT Domain  20000



# Task 1 - Read the data from the file and display it in the terminal
# Task 2 - You have to check whether the file exists or not then only display the data from the file to the terminal 
# # Task 3 - Take the inputs from the user, save those inputs in the file and then display those inputs in the terminal

def createFile():
    fileobject = open ("employee.txt", "x")
    data = "name","department","Salary"
    fileobject.write(data)

def userInput():
    name = input("please enter the employee name ")
    department = input("please enter the department name ")
    Salary = input("Please enter the Salary")
    data = name +","+ department +","+ Salary
    return data

def writefile(data):
    fileobject = open("employee.txt", "a")
    data = "\n" + data
    fileobject.write(data)


def readFile():
    fileObject = open("employee.txt", "r")
    data = fileObject.read()
    print(data)


# createFile()
readFile()
data = userInput()
writefile(data)



