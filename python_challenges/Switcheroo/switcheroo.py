#! /usr/bin/python

# https://www.codewars.com/kata/switcheroo/train/python


def switcheroo(string):
    " Swaps the position of 'a' and 'b' in a string"
    switched = "" 
    for x in string:
        if x == "a":
            switched += "b"
        elif x == "b":
            switched += "a"
        else:
            switched += "c"
    return switched

print("abacabb")
print(switcheroo("abacabb"))

# A better way to do it

def switcherooBetter(string):
    return string.translate(str.maketrans('ab','ba'))

print("abbacaacbbacca")
print(switcherooBetter("abbacaacbbacca"))