one = str(1)
two = str(2)
three = str(3)
four = str(4)
five = str(5)
six = str(6)
seven = str(7)
eight = str(8)
nine = str(9)

print("_______")
print("|" + "1" + "|" + "2" + "|" + "3" + "|")
print("_______")
print("|" + "4" + "|" + "5" + "|" + "6" + "|")
print("_______")
print("|" + "7" + "|" + "8" + "|" + "9" + "|")
print()

turn = "0"
while("0" == "0"):
    if turn == "0":
        print("Its the turn of 0")
        turn = "0"
    elif turn == "*":
        print("Its the turn of *")
    number = input()
    if number == str("1"):
        one = turn
    if number == str("2"):
        two = turn
    if number == str("3"):
        three = turn
    if number == str("4"):
        four = turn
    if number == str("5"):
        five = turn
    if number == str("6"):
        six = turn
    if number == str("7"):
        seven = turn
    if number == str("8"):
        eight = turn
    if number == str("9"):
        nine = turn
    print()
    print("_______")
    print("|" + one + "|" + two + "|" + three + "|")
    print("_______")
    print("|" + four + "|" + five + "|" + six + "|")
    print("_______")
    print("|" + seven + "|" + eight + "|" + nine + "|")
    print()
    if one == two == three:
        print(turn + " won the match")
    if one == four == seven:
        print(turn + " won the match")
    if two == five == eight:
        print(turn + " won the match")
    if three == six == nine:
        print(turn + " won the match")
    if four == five == six:
        print(turn + " won the match")
    if seven == eight == nine:
        print(turn + " won the match")
    if turn == "0":
        turn = "*"    
    elif turn == "*":
        turn = "0"