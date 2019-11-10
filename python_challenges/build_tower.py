#!usr/bin/python 3.6

def buildTower(levels):

    tower = []
    block = '*'

    for x in range(1,(levels + 1)):
        tower.append(block.center((levels*2) - 1," ")) 
        block += "**"

    return tower

# print(buildTower(3),sep='\n')
print(buildTower(1))
print(buildTower(2))
print(buildTower(3))

        

