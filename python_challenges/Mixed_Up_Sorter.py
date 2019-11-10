#! /usr/bin/python

#https://www.codewars.com/kata/srot-the-inner-ctonnet-in-dsnnieedcg-oredr


def sort_the_inner_content(words):
    jumbled = ""               
    for x in words.split():   

        if len(words) > 3:        
            jumbled += "{}{}{} ".format(x[0], \
            ''.join(sorted(x[1:-1],reverse=True)), x[-1])
        else:
            jumbled +=  x 
    return jumbled.rstrip()



print(sort_the_inner_content("sort the inner content in descending order"))

print(sort_the_inner_content("wait j for me k"))
