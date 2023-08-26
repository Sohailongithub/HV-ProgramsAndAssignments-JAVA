def queueAddElement(queueName, element):
    queueName.append(element)


def queueRetrievElement(queueName):
    item = queueList[0]
    queueName.pop(0)
    return item


queueList = []

queueAddElement(queueList, 15)
queueAddElement(queueList, 25)
queueAddElement(queueList, 35)
queueAddElement(queueList, 25)
queueAddElement(queueList, 45)
queueAddElement(queueList, 55)
queueAddElement(queueList, 65)
print(queueList)
item = queueRetrievElement(queueList)
print(item)
print(queueList)    

def searchAndRetrieve(queueName, element):
    newQueue = []
    flag = 0
    for index in range(len(queueName) -1):
        if (queueName[0] == element):
            flag = 0
            queueRetrievElement(queueList)
            return index
        else:
            if (flag == 0):
                queueAddElement(newQueue, queueName[index])
                print("newstack", newQueue)

                queueRetrievElement(queueList) 
        
index = searchAndRetrieve(queueList, 25)
print(queueList)
print(index)
