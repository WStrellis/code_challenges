# Takes an input string and check that it in the the correct
# format for a phone number
import re

def phoneValidator(testString):
    return bool(re.fullmatch('\([0-9]{3}\)[ ]?[0-9]{3}-[0-9]{4}',testString)) 


print(phoneValidator("(770)349-3970"))
print(phoneValidator("(770) 549-3970"))
print(phoneValidator("(770 549-3970"))
print(phoneValidator("(k70) 549-3970"))
print(phoneValidator("(770) 59-3970"))