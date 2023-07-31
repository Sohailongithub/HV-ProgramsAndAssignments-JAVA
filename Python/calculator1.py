# from multiply import multiply
# # from division import division
# # from subtract import subtract
# operator = input("please input the operator")
# num1 = input("please enter number 1")
# num2 = input("please enter number 2")
# if (operator == "*"):
#     result = multiply(num1, num2)
# # elif (operator == "/"):
# #     result = division(num1, num2)
# # elif (operator == "-"):
# #     result = subtract(num1, num2)
# print(result)

from div_function import division
from multi_function import multiply
from add_function import add
from sub_function import subtract

num1=int(input("please enter number "))
num2=int(input("please enter number "))
operator=input("please input the operator ")

if(operator=="*"):
   result = multiply(num1, num2)
elif(operator =="/"):
    result = division(num1, num2)
elif(operator == "-"):
    result = subtract(num1, num2)
elif(operator == "+"):
    result = add(num1,num2)
print(result)
