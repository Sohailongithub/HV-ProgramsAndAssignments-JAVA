stackList = []

def stackAddElement(element):
    stackList.append(element)
    stackAddElement(stackList, 12)
    stackAddElement(stackList, 29)
    stackAddElement(stackList, 36)
    stackAddElement(stackList, 48)
    stackAddElement(stackList, 54)


def stackRetrievElement():
    item = stackList[len(stackList)-1]
    stackList.pop()
    return item

