# Create a dictionary variable for student 
# name, mark
# create a list for students
# we need to store the data in student 
# list from the user and then print the summary of the student

# list - students 
students = []

#taking student numbers
num_students = int(input("Enter the number of students "))

#for loop - to collect the data of the students
for i in range(num_students):
    print("Enter the details of the student ", (i+1), ":")

    student = {}  #dictionary

    student['name'] = input("Enter the student name ")
    student['marks'] = int(input("Enter the marks "))  #float()

    students.append(student)


print(students)


print("Summary of all the students ")


#for- loop - printing the student details
for i in range(num_students):
    student_display = students[i]
    print("Student ", (i+1))
    print("Name is :- ", (student_display['name']))
    print("Mark is :- ", (student_display['marks']))


## list of students
students = []

## taking number of students  
num_students = int(input("Enter number of students"))

## for loop to collect data from students 
for i in range(num_students):
    print("Enter the details ", i + 1, ":")

## Dictionary of students 
student = {}

# collect the student name and marks 

name = input("Enter the student ")

marks = int(input("Enter the marks"))

