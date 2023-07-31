# userInput=int(input("Provide your input"))
# program for adding two numbers
# create a Marksheet application for a school
# 3 subjects , maths, science, english
# student name , marks of these three subjects
# total of the marks , if the student have passed or not/
# The grade of the student , 0 t0 30: F,30-60: D, 61, 80,: B, 81,100: 

# studentNames = []
# mathMarksList = []
# scienceMarksList = []
# englishMarksList = []
# totalMarksList = []
# percentageMarksList = []

# flag = "y"
# while (flag == "y"):
#     studentName = input("Please enter the student Name:")
#     studentNames.append(studentName)
# # validation logic
#     mathMarks = int(input("Please enter the marks for Math"))
#     mathMarksList.append(mathMarks)
#     scienceMarks = int(input(" Enter the marks for Science"))
#     scienceMarksList.append(scienceMarks)
#     englishMarks = int(input(" Enter the marks for English"))
#     englishMarksList.append(englishMarks)

# # Processing the marks
#     totalMarks = mathMarks+scienceMarks+englishMarks
#     totalMarksList.append(totalMarks)
#     print(" The total marks of the student would be ", totalMarks)

# # percentage of the total marks
#     percentageMarks = (totalMarks/300)*100
#     percentageMarksList.append(percentageMarks)
# #####
# # if statement
#     if (percentageMarks < 30):
#         print(" The student have failed")
#         print(" grade : F")
#     elif (percentageMarks < 60):

#         print("Grade D")

#     elif (percentageMarks < 80):

#         print("grade A")
#     else:
#         print("grade E")
#     flag = input("do you have any other student data y/n")

# print(studentNames)
# print(totalMarksList)

listStudentNames = []
listMathMarks = []
listScienceMarks = []
listEnglishMarks = []
listTotalMarks = []
listPercentageMarks = []



flag = "y"
while (flag == "y"):
    studentName = input("Please enter the student Name: ")
    listStudentNames.append(studentName)
# validation logic
    mathMarks = int(input("Please enter the marks for Math "))
    listMathMarks.append(mathMarks)

    scienceMarks = int(input(" Enter the marks for Science "))
    listScienceMarks.append(scienceMarks)

    englishMarks = int(input(" Enter the marks for English "))
    listEnglishMarks.append(englishMarks)

# Processing the marks
    totalMarks = mathMarks+scienceMarks+englishMarks
    listTotalMarks.append(totalMarks)
    print(" The total marks of the student would be ", totalMarks)

# percentage of the total marks
    percentageMarks = (totalMarks/300)*100
    listPercentageMarks.append(percentageMarks)
#####
# if statement
    if (percentageMarks < 30):
        print(" The student have failed")
        print(" grade : F")
    elif (percentageMarks < 60):

        print("Grade D")

    elif (percentageMarks < 80):

        print("grade A")
    else:
        print("grade E")
    flag = input("do you have anyother student data") 
print(listStudentNames)
print(listTotalMarks)
   
topper = 0
topperIndex = 0


for x in range(len(listStudentNames)):
    if (listTotalMarks[x] > topper):
        topper = listTotalMarks[x]
        topperIndex = x
print(listStudentNames[topperIndex])        
        
        
        

        


# I want to print a specific line 100 times