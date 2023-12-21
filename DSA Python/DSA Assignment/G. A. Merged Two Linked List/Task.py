class ListNode:
    def __init__(self, value=0, next=None):
        self.value = value
        self.next = next

def merge_lists(list1, list2):
    dummy = ListNode()
    current = dummy

    ptr1 = list1
    ptr2 = list2

    while ptr1 is not None and ptr2 is not None:
        if ptr1.value < ptr2.value:
            current.next = ptr1
            ptr1 = ptr1.next
        else:
            current.next = ptr2
            ptr2 = ptr2.next

        current = current.next

    # Attach remaining elements if one of the lists is exhausted
    if ptr1 is not None:
        current.next = ptr1
    elif ptr2 is not None:
        current.next = ptr2

    return dummy.next

# Example usage:
list1 = ListNode(1, ListNode(3, ListNode(5)))
list2 = ListNode(2, ListNode(4, ListNode(6, ListNode(8, ListNode(10)))))

merged_list = merge_lists(list1, list2)

# Print the merged list
while merged_list is not None:
    print(merged_list.value, end=" ")
    merged_list = merged_list.next
