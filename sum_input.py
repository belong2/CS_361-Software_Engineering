x = int(input("How many? "))

while x < 2:
    print("Please enter an integer of two or greater.")
    x = int(input("How many? "))

total = 0

for i in range(x):
    val = int(input("Enter a number: "))

    while val <= 0:
        print("That is an invalid input")
        val = int(input("Enter a number: "))

    total += val
    
print("The total is ", total, sep='')
