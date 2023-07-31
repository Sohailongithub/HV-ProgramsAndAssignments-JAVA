# def addition(num1, num2):
#     return num1 + num2

# num1 = int(input("Enter number 1"))
# num2 = int(input("Enter number 2"))

# operator = input("Enter operator")

# if (operator == '+'):
#     result = addition(num1, num2)

# else:
#     result = "error"
# print(result)

def power(num1, num2):
    return num1 ** num2

num1 = int(input("Enter number "))
num2 = int(input("Enter number "))

if (num1 > 0 and num2 > 0):
    result = power(num1, num2)

else:
     result = "Error" 

print(num1, '**' ,num2, '=', result)
