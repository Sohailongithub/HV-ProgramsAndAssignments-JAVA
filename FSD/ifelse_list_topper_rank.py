studentNames = []
mathMarksList = []
scienceMarksList = []
englishMarksList = []
totalMarksList = []
percentageMarksList = []

flag = "y"
while (flag == "y"):
    studentName = input("Please enter the student Name:")
    studentNames.append(studentName)
    
# validation logic
    mathMarks = int(input("Please enter the marks for Math"))
    mathMarksList.append(mathMarks)
    scienceMarks = int(input(" Enter the marks for Science"))
    scienceMarksList.append(scienceMarks)
    englishMarks = int(input(" Enter the marks for English"))
    englishMarksList.append(englishMarks)

# Processing the marks
    totalMarks = mathMarks+scienceMarks+englishMarks
    totalMarksList.append(totalMarks)
    print(" The total marks of the student would be ", totalMarks)

# percentage of the total marks
    percentageMarks = (totalMarks/300)*100
    percentageMarksList.append(percentageMarks)
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
    flag = input("do you have any other student data y/n")

print(studentNames)
print(totalMarksList)

topper=0
topperIndex=0
for x in range(len(studentNames)):
    if(totalMarksList[x] > topper):
      topper=totalMarksList[x]
      topperIndex=x
print(studentNames[topperIndex],"is the topper of the class ")


# # Find the ranks
# ranks = [1] * len(totalMarksList)
# for i in range(len(totalMarksList)):
#     for j in range(len(totalMarksList)):
#         if totalMarksList[i] < totalMarksList[j]:
#             ranks[i] += 1

# print("Rankings:")
# for i in range(len(studentNames)):
#     print("Rank", ranks[i], ":", studentNames[i])


# ['Rahul', 'Sachin', 'Raj']
# [232, 180, 300]

# [Raj, Rahul, Sachin]

ranks = [1] * len(totalMarksList)

#logic for finding the rank
for i in range(len(totalMarksList)):
    for j in range(len(totalMarksList)):
        if totalMarksList[i] < totalMarksList[j]:
            ranks[i]+=1


#display the rank
print("Ranking of all the student ")
for a in range(len(studentNames)):
    print("Rank ", ranks[a], ":", studentNames[a])

