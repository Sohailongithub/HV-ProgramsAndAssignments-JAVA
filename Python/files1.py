def createfile1():
    fileobject = open("student1.csv", "x")
    data = "name, age, physicsMarks, mathMarks, englishMarks"
    fileobject.write(data)

#### 

def userInput():
    name = input("Enter student name ")
    age = (input("Enter student age"))
    physicsMarks = (input("Enter Physics Marks"))
    mathMarks = (input("Enter Maths marks"))
    englishMarks = (input("Enter your English marks"))
    data = name+","+age+","+physicsMarks+","+mathMarks+","+englishMarks
    return data

####

def writefile1(data):
    fileobject = open("student1.csv", "a")
    data = "\n" + data
    fileobject.write(data)

###

def readfile1():
    fileobject = open("student1.csv", "r")
    data = fileobject.read
    print(data)

###

def userData(username):
    fileobject = open("student.csv", 'r')
    for line in fileobject:
        stringArray = line.split(",")
        if (stringArray[0] == username):
            print(line)

# if file is not created then 
# createfile1()

data = userInput()
writefile1(data)
# pip :
ReadFlag = input("Do you want to read the file")
if (ReadFlag == "y"):
    readfile1()
    username = input("tell me the name of the user you want to know about")
    userData(username)

    