class ListNode:
    def __init__(self, value=0, next=None):
        self.value = value
        self.next = next

def partition_list(head, x):
    # Initialize dummy nodes
    dummy1 = ListNode()
    dummy2 = ListNode()

    # Initialize pointers for the two partitions
    current1 = dummy1
    current2 = dummy2

    # Traverse the original list and partition elements
    current = head
    while current:
        if current.value < x:
            current1.next = current
            current1 = current1.next
        else:
            current2.next = current
            current2 = current2.next

        current = current.next

    # Connect the two partitions
    current1.next = dummy2.next
    current2.next = None  # Ensure the end of the second partition is None

    # The result is the combined list from dummy1.next
    return dummy1.next

# Helper function to print the linked list
def print_list(head):
    current = head
    while current:
        print(current.value, end=" -> ")
        current = current.next
    print("None")

# Example usage
# Creating a sample linked list: 1 -> 4 -> 3 -> 2 -> 5 -> 2
head = ListNode(1, ListNode(4, ListNode(3, ListNode(2, ListNode(5, ListNode(2))))))

# Partition the list around x=3
result = partition_list(head, 3)

# Print the result
print_list(result)
