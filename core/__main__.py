#!/env/bin/python
# -*- coding: utf-8 -*-
 
import os
import datetime

os.system('clear')
print(" #####                                                            ")
print("#     # # #    #  ####  #    # #        ##   #####  # ##### #   # ")
print("#       # ##   # #    # #    # #       #  #  #    # #   #    # #  ")
print(" #####  # # #  # #      #    # #      #    # #    # #   #     #   ")
print("      # # #  # # #  ### #    # #      ###### #####  #   #     #   ")
print("#     # # #   ## #    # #    # #      #    # #   #  #   #     #   ")
print(" #####  # #    #  ####   ####  ###### #    # #    # #   #     #   ")
print("\n")
print("Welcome to your processor emotion favorite.\n")

now = datetime.datetime.today()

def insertThougt(thought):
    file = open("./data/{}.txt".format(now.strftime("%Y%m%d")), "a+")
    file.write("[{}] {}\n".format(now.strftime("%H:%M:%S"),thought))
    file.close()

    
while True:
    option = input("# ")

    if option == ":i":
        insertThougt(input(" > "))

    if option == ":q" :
        break
