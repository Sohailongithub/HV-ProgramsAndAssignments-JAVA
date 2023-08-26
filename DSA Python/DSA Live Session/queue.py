# Adding an element to a queue
# retrieving an element from the queue
# search and retrieve and element
listQueue = []


def addElementQueue(queueName, element):
    queueName.append(element)


def retrieveElementQueue(queueName):
    item = queueName[0]
    queueName.pop(0)
    return item

# search and rerieve


addElementQueue(listQueue, 23)
addElementQueue(listQueue, 33)
addElementQueue(listQueue, 43)
addElementQueue(listQueue, 53)
addElementQueue(listQueue, 63)
addElementQueue(listQueue, 73)
print(listQueue)


def searchandRetrieve(QueueName, element):
    newqueue = []
    flag = 0
    returnIndex = 0
    for index in range(0, len(QueueName)):
        if (QueueName[0] == element):
            flag = 1
            retrieveElementQueue(QueueName)
            returnIndex = index

        else:
            if (flag == 0):
                addElementQueue(newqueue, QueueName[0])
                print("newuqeue", newqueue)

                retrieveElementQueue(QueueName)
    QueueName = newqueue+QueueName
    print(QueueName)
    return returnIndex


result = searchandRetrieve(listQueue, 43)
