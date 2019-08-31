'''
Done by following this https://youtu.be/RFyLsF9y83c tutorial


'''
from random import randint
array = [3, 4, 776, 88, 2, 33, 44, 6, 121, 19, 91, 21, 5, 7, 4, 32, 5, 88, 32, 65, 12, 76, 2, 765, 23, 65]


print("Unsorted array => ", array)

def quicksort(a):
    
    if len(a) <= 1:
        return a

    smaller, equal, larger = [], [], []
    pivot = a[randint(0, len(a) - 1)]
    
    for n in a:
        if n < pivot:
            smaller += [n]
        elif n > pivot:
            larger += [n]
        else:
            equal += [pivot]
    
    return (quicksort(smaller) + equal + quicksort(larger))



print("\n\nSorted array => ", quicksort(array))