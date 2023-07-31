#Simple Interest Calculation

# A = P (1 + rt)
# A	=	final amount  # Output
# P	=	initial principal balance #Input from user
# r	=	annual interest rate   #fixed - r/i - 5%    rate_interest
# t	=	time (in years) #Input from user   # 10   15 


# Stage 1 - You are taking the inputs and it will display the final amount


# Stage 2 - Validation  - User - Principal Amount - 0
# 			       Time - 0

principalAmount = int(input("enter your principal amount"))

time = int(input("enter your tenur")) 

rateInterest = 5 

amount = principalAmount*(1+(rateInterest*time))

if principalAmount <= 0:
    print("The final amount or time cannot be 0 or negative")
    
elif time <= 0:
    print("The final amount or time cannot be 0 or negative")

else: 
    print(amount)

## Part 2
P = int(input("Enter the Principal amount: "))
t = int(input("Enter the time duration: "))

r = 0.05 #(5%)
A = P*(1 + (r*t))


if P <= 0:
    print("The Final Amount or time cannot be 0 or negative")
elif t <=0:
    print("The Final Amount or time cannot be 0 or negative")
else:
    print("The Final Amount Will be: ", A)    

