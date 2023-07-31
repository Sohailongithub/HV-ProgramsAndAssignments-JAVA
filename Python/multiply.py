# n = int(input("Enter digit"))
# for i in range(1, 11, 1):
#     product = n * i
#     print(n, "*", i, "=", product)

num = int(input("Enter a number "))
count=0
while num!=0:
    num = num // 10
    print("New value of num", num)
    count +=1 #count = count + 1
    print("Count Value", count)

print("The total count is :- ",count)