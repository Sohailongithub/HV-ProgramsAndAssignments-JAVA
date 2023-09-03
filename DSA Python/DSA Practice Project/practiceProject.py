# Question 1
# Create an empty list in Python and add elements to it to create an array of integers. 
# Demonstrate how to append, insert, and remove elements from the array.
# Array Operations:

arrayIntegers = [15,20,15,3,13,2,8]

# Append Element in the array
arrayIntegers.append(19)
print(arrayIntegers)

# Insert Element in the array
arrayIntegers.insert(2,25)
print(arrayIntegers)

# Remove Element in the array
arrayIntegers.pop(1)
print(arrayIntegers)


# /////////////From Here I have taken the help from Internet to solve remaining Questions\\\\\\\\\\\\\\\\\\\\\\

# Question 2
# Write a Python function that takes an array of integers as input and returns the sum of 
# all the elements in the array. 
# Optimize the function for large arrays.
# Linked List Creation:

# Function to calculate the sum 
def sumElement(arr):
    return sum(arr)

# Function to Optimize Large Array 
def optimizeSumElement(arr):
    totalSum = 0
    for num in arr:
        totalSum += num
    return totalSum

print(sumElement, optimizeSumElement)

# Question 3
# Implement a basic singly linked list class in Python. 
# Include methods for appending nodes, inserting nodes at specific positions, and printing the linked list.
# Linked List Operations:

# define a basic singly Linked List node
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

# define a linked List class
class LinkedList:
    def __init__(self):
        self.head = None

# append a node to the end of the linked list 
def append(self,data):
    newNode = Node(data)
    if not self.head:
        self.head = newNode
    else:
        current = self.head
        while current.next:
            current = current.next
        current.next = newNode

    # Insert a node at a specific position
    def insert(self, data, position):
        new_node = Node(data)
        if position == 0:
            new_node.next = self.head
            self.head = new_node
        else:
            current = self.head
            for _ in range(position - 1):
                if current:
                    current = current.next
            if current:
                new_node.next = current.next
                current.next = new_node

    # Print the linked list
    def print_list(self):
        current = self.head
        while current:
            print(current.data, end=" -> ")
            current = current.next
        print("None")


# Question 4
# Write a Python function to reverse a singly linked list in-place. 
# Provide both iterative and recursive solutions.
# Array Searching:

# Function to reverse a singly linked list iteratively
def reverse_linked_list_iterative(head):
    prev = None
    current = head
    while current:
        next_node = current.next
        current.next = prev
        prev = current
        current = next_node
    return prev

# Function to reverse a singly linked list recursively
def reverse_linked_list_recursive(head):
    if not head or not head.next:
        return head
    new_head = reverse_linked_list_recursive(head.next)
    head.next.next = head
    head.next = None
    return new_head

# Question 5
# Given an array of integers and a target value, 
# write a Python function to find the index of the target value in the array using binary search. 
# Ensure that the array is sorted before applying binary search.
# Linked List Cycle Detection:

# Function to perform binary search in a sorted array
def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1  # Target not found

# Question 6 
# Create a Python function to detect if a given linked list contains a cycle. 
# Implement Floyd's Tortoise and Hare algorithm to solve this problem efficiently.

# Define a node class for linked list cycle detection
class ListNode:
    def __init__(self, val=0):
        self.val = val
        self.next = None

# Function to detect a cycle in a linked list using Floyd's Tortoise and Hare algorithm
def has_cycle(head):
    if not head or not head.next:
        return False
    
    slow = head
    fast = head.next
    
    while slow != fast:
        if not fast or not fast.next:
            return False
        slow = slow.next
        fast = fast.next.next
    
    return True

