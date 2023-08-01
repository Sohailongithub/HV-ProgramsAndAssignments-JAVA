studentName = ["S1", "S2", "S3"]
physicsMarks = [10, 20, 30]
scienceMarks = [20, 30, 40]
englishMarks = [30, 40, 50]

studentName.append("S4")
physicsMarks.append(40)
scienceMarks.append(50)
englishMarks.append(60)

for index in range(0, len(studentName),1):
    print(studentName[index], "has got", physicsMarks[index], "in physics")
    if (physicsMarks[index] < 30):
        print("The student has failed in physics")
