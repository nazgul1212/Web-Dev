a = int(input())
islleap = False

if a % 400==0:
    islleap = True

elif a % 4==0:
    islleap = True
elif a% 100==0:
    islleap = True
else :
    islleap = False

print(islleap)