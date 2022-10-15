# print('this is \\\ double backslash')
# print('this is /\/\/\/\/\\ mountain')
# print('he is\tawesome ')
# print('\\" \\n \\t \\\'')

# print(r'\n \t \\ \\')

# name_1 = 'computer\\'
# name_2 = 'science'

# print(name_1 + name_2)
# print(name_1 + "0" + name_2)
# print(name_1 * 3)
# print(name_1 + str(3))

# print(round(2**0.5,3))

#--------------------------------------------------------------------

## Program : Average of 3 numbers

# num_1 , num_2 , num_3 = input("Enter 3 numbers Comma (,) separated : ").split(",")

# avg = (int(num_1) + int(num_2) + int(num_3))/3

# print(f"Average of {num_1},{num_2},{num_3} is : {round(avg,3)}")

# --------------------------------------------------------------------------

# num,age = input("Enter num & age : ").split()
# print(f"Number : {num} \nAge : {age}")

# ------------------------------------------------------------------

## Program to reverse user name

# name = input("Enter your name : ")
# print(f"Your name in reverse order is : {name[::-1]}")

# --------------------------------------------------------

# str = "Reccognizable"

# print(str[::3])
# print(str[2:6:2])
# print(str[-2:2:-2])
# print(str[::-1])
# print(str[::5])

# ----------------------------------------------

# name = input("Enter your name :")
# ch = input("Enter charecter to be searched :")

# print(f'\nName in lower case : {name.lower()}')
# print(f'\nName in upper case : {name.upper()}')
# print(f'\nName in title form : {name.title()}')
# print(f'\nNumber of times the charecter {ch} appears in your name = {name.count(ch.lower())+name.count(ch.upper())}')
# print(f'\nLength of your name : {len(name)}')

# ---------------------------------------------------

# str = "she is a good player but she is injoured now so she is recommended to rest a bit"

# print(str.replace(' ',''))
# print(str.replace(' ','_'))
# print(str.replace('is','was'))
# print(str.replace('is','was',1))
# print(str.replace('is','was',2))
# print(str.replace('she','he',0))

# print(str.find('is',7))

# str = 'hockey'

# print(str.center(len(str)+4,"*"))
# print(str.center(len(str)+4,"i"))
# print(str.center(len(str)+5,"*"))


# ------------------------------------------------------

# num = 6
# n = int(input("Guess the number between 1 to 10 : "))

# if n==num :
#     print("Congratulations you guessed it.")
# elif n<num :
#     print("Guess too low")
# else :
#     print("Guess too high")


# ----------------------------------------------------------

# name = input("Enter your name :")
# age = int(input("Enter your age :"))

# name = name.lower()

# if name[0] == 'a' and age > 10 :
#     print("You can watch COCO movie")
# else :
#     print("Sorry, you cannot watch COCO")

# ----------------------------------------------------------

# i = 1
# sum = 0

# while i<=10 :
#     sum += i
#     i +=1

# for i in range(11):
#     sum += i

# print(sum)


# ----------------------------------------------------------

# n = int(input("Enter number : "))
# sum = 0

# while n>=0 :
#     sum += n
#     n -=1    

# print(sum)

# ----------------------------------------------------------

# n = input("Enter number : ")
# n = int(n)
# temp = 0
# sum = 0

# while n>0 :
#     temp = n%10
#     sum += temp
#     n //=10    


# for i in range(len(n)) :
#     sum += int(n[i])

# print(sum)

# ----------------------------------------------------------

# name = input("Enter your name :")
# copy = name

# while copy :
#     print(f"\n{copy[0]} : {copy.count(copy[0])}")
#     copy = copy.replace(copy[0],"")

# ----------------------------------------------------------

 
##RANDOM GUESSING GAME

# import random

# winning_num  = random.randint(0,100)
# i=0

# while True :
#     i +=1
#     num = int(input("Guess the winning number between 0-100 :"))
#     if num == winning_num :
#         print("\nYou Win!!")
#         print(f"\nYou guessed it in {i} tries")
#         break
#     elif num<winning_num :
#         print("Too low")
#     else :
#         print("Too high")

# ----------------------------------------------------------

# name = input("Enter name :")

# def last_char(n) :
#     return n[-1]

# print(f"\nlast charecter : {last_char(name)}")



# num = int(input("Enter number :"))

# def odd_even(num) :
#     if num%2 == 0 :
#         return "even"
#     else :
#         return "odd"

# print(f"Number is {odd_even(num)}")


# num1 = int(input("Enter first number :"))
# num2 = int(input("Enter second number :"))

# def greater(a,b) :
#     if a>b :
#         return a
#     elif a<b :
#         return b
#     else :
#         return "Both are same"

# print(f"{greater(num1,num2)}")

# -----------------------------------------------------------

##Pallendrome strings

# str = input("Enter the string :")

# def pal(a) :
#     i=0
#     l = len(a)
#     while i <= (l-1)//2 :
#         if a[i] != a[l-1-i] :
#             return "Not Pallendrome string"
#         i += 1
#     return "Pallendrome string"

# print(pal(str))

# -----------------------------------------------------------

##Fibbonacci series

# n = int(input("Enter number of terms in the series :"))

# def fibonacci (n) :
#     num1 = 0
#     num2 = 1
#     num3 =num1 + num2

#     if n>0 :
#         print(0)

#     while n>1 :
#         print(f"{num3}")
#         num3 = num1 + num2
#         num1 = num2
#         num2 = num3
#         n -= 1

# fibonacci(n)

# ------------------------------------------------------

# i = 0

# for i in range(1,31,3) :
#     print(i,end = ',')

# ------------------------------------------------------
##SCOPE OF VARIABLE

# x = 5

# def f() :
#     global x
#     x = 4
#     return x

# print(f())
# print(x)

# ------------------------------------------------------

# mix = [23,45.12,'ajay',"husk",True,None]
# fruits = ["apple","orange","guava"]

# fruits.insert(2,"banana")
# mix.insert(1,fruits)

# mix.append(65)
# mix.append(fruits)

# mix.extend(fruits)
# mix = mix + fruits

# mix = fruits

# mix.pop()
# mix.remove('ajay') 



# print(mix)
# print(fruits)

# ------------------------------------------------------

#SQUARE FUNCTION

# def sqr (l) :
#     sqr_list = []

#     for i in l :
#         sqr_list.append(int(i)**2)

#     return sqr_list

# num = input("Enter list elements comma(,) separated :").split(",")

# print(sqr(num))

# ------------------------------------------------------

## Reverse 

# l = input("Enter list elements comma(,) separated :").split(",")
# # print(l[::-1])
# l.reverse()
# print(l)

# ------------------------------------------------------

# def alter(lis) :
#     new_list = []

#     for i in lis :
#         new_list.append(i[::-1])

#     return new_list

# l = input("Enter list elements comma(,) separated :").split(",")

# print(alter(l))

# ------------------------------------------------------

# def even_odd(n) :
#     result = [[],[]]

#     for i in n :
#         if(int(i)%2 == 0) :
#             result[1].append(int(i))
#         else :
#             result[0].append(int(i))
    
#     return result

# num  = input("Enter numbers comma(,) separated :").split(",")

# print(even_odd(num))

# ------------------------------------------------------

# def common(l_1,l_2) :
#     C = []
#     for i in l_1 :
#         if i in l_2 :
#             C.append(int(i))
#     return C


# list_1 = input("Enter numbers in first list comma(,) separated :").split(",")
# list_2 = input("Enter numbers in second list comma(,) separated :").split(",")

# print(common(list_1,list_2))

# ------------------------------------------------------

# def count_list (l) :
#     count = 0
#     for i in l :
#         if type(i) == list :
#             count += 1
#     return count

# mix_list = [1,2,3.2,45,"harsh","hi",[1,2],"old",["apple","orange","banana"]]

# print(count_list(mix_list))

# ----------------------------------------------------

# def cube_generator(n):
#     dict={}
#     for i in range(1,n+1):
#         dict[i]=i**3
#     return dict

# n=int(input("Enter Number :"))

# print(cube_generator(n))

# ----------------------------------------------------

# user_data={}

# print('User Data\n')

# user_data['name']=input("Enter User Name :")
# user_data['age']=int(input("Enter User age :"))
# user_data['fav_music']=input("Enter Your Favourte Music Comma(,) Separated :").split(',')
# user_data['fav_shows']=input("Enter Your Favourte Shows Comma(,) Separated :").split(',')

# for i,j in user_data.items():
    # print(f"{i} : {j}")

# ----------------------------------------------------

# def rev_str(L):
#     return [i[::-1] for i in L]

# l=input("Enter strings comma(,) separated :").split(',')

# print(rev_str(l))

# ----------------------------------------------------

# def store_nums_as_strings(l):
#     return [str(i) for i in l if type(i)==int or type(i)==float]

# L=[1,2,3.45,6.7,["apple","orange"],True,None,False,-89,{"name":"Sourav","age":24},10.004]

# print(store_nums_as_strings(L))

# ----------------------------------------------------

# def power(n,*args):
#     if args:
#         print([int(i)**n for i in args])
#     else:
#         print("Hey you didnt pass anything")
#         return
        

# l=input("Enter digits comma(,) separated :").split(",")
# num=int(input("Enter the power :"))

# power(num,*l)

# ----------------------------------------------------

# def fun(l,**kwargs):
#     return [i[::-1].title() if kwargs.get('enable_reverse') else i.title() for i in l]

# l=input("Enter string comma(,) separated :").split(',')
# print(fun(l))
# print(fun(l,enable_reverse=True))

# ----------------------------------------------------

# def average(*args):
#     return [sum(i)/len(i) for i in zip(*args)]

# average = lambda *args:[sum(i)/len(i) for i in zip(*args)]

# l = average([2,4,6,8],[1,3,5,7],[3,6,9,12])
# print(l)

# ---------------------------------------------------

# def to_power(x):
#     def power(n):
#         return n**x
#     return power

# def to_power(x):
#     return lambda n:n**x

# to_power = lambda x:lambda n:n**x

# square = to_power(2)
# cube = to_power(3)
# to_power_four = to_power(4)
# to_power_five = to_power(5)

# print(square(10))
# print(cube(8))
# print(to_power_four(4))
# print(to_power_five(5))

# ---------------------------------------------------

# from functools import wraps

# def print_function_data(func):
#     @wraps(func)
#     def wrapper_function(*args,**kwargs):
#         print(f"You are calling the {func.__name__} function")
#         print(func.__doc__)
#         return func(*args,**kwargs)
#     return wrapper_function

# @print_function_data
# def add(a,b):
#     '''This function takes two numbers as arguments and returns their sum'''
#     return a+b

# print(add(5,4))

# ---------------------------------------------------
# import time

# def calculate_time(fun):
#     def wrapper_function():
#         t1 = time.time()
#         fun()
#         t2 = time.time()
#         print(f"This functio took {t2-t1} sec to run")
#     return wrapper_function

# @calculate_time
# def func():
#     for i in range(20):
#         print("This is function")
# func()
# ---------------------------------------------------

# def gen(a):
#     if a<2:
#         yield 'Wrong Input'
#     for i in range(2,a+1,2):
#         yield i

# eve_gen = gen(10)
# for i in eve_gen:
#     print(i)

# ---------------------------------------------------

# class Laptop:

#     # class variables
#     c_val = 45

#     def __init__(self,brand_name = 'N/A', model_name = 'N/A', price = 0):

#         # instance variables
#         self.brand_name = brand_name
#         self.model_name = model_name
#         self.price = price
#         self.id = brand_name+'_'+model_name

#     # instance methods
#     def apply_discount(self,discount):
        
#         self.price *= (100-discount)/100
#         return self.price


# l1 = Laptop('Dell','Inspiron',60000)
# l2 = Laptop()

# print(l1.c_val)
# print(l1.id)
# print(l1.apply_discount(5))
# print(l1.price)


# print(l2.brand_name)
# print(l2.model_name)
# print(l2.price)

# ---------------------------------------------------

# class Person:
#     # class variables
#     instances = 0

#     def __init__(self,F_Name,L_Name,Age,Job):
#         # instance variables
#         self.fname = F_Name
#         self.lname = L_Name
#         self.age = Age
#         self.job = Job
#         Person.instances += 1

#     def count_instances():
#         return Person.instances

# p1 = Person('Harry','Potter',18,'Wizard')
# p2 = Person('Doom','Slayer',50,'Soldier')
# p3 = Person('Jake','Sully',35,'Scientist')

# print(Person.count_instances())

# ---------------------------------------------------



# ---------------------------------------------------
