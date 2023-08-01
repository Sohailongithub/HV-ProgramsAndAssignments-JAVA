# Description - Create a small command-line program in Python to Calculate the total invoice amount for the below purchases - 
# Book1 - Introduction to Python Programming: Rs 499.00
# Book2 - Python Libraries Cookbook: Rs. 855.00
# Book3 - Data Science in Python: Rs. 645.00
# - Taxes and additional charges are described as details - 
# GST: 12%
# Delivery Charges: Rs. 250.00

##### In the below line of code it's only calculating the last entry 
# flag = "y"
# total_books = 0
# total_amount = 0

# while flag == "y":
#  b = input("Enter book name") 
#  p = float(input("Enter book price"))
#  flag = input("do you have anyother Book y/n")
#  total = (p * 12/100) + p + 250
#  total_amount += total
#  print(b,": Rs", p, "Your Total Amount with 12%""GST and deliverycharge is",total)

introductionToPythonProgramming = 499.00
pythonLibrariesCookbook = 855.00
dataScienceInPython = 645.00

total = introductionToPythonProgramming + pythonLibrariesCookbook + dataScienceInPython

gst = 12/100

deliveryCharges = 250

total_amount = total + gst + deliveryCharges
print(introductionToPythonProgramming, pythonLibrariesCookbook,
       dataScienceInPython, "Total",total, 
       "Your Grand Total for Books including 12% GST and Delivery Charge :",total_amount)
