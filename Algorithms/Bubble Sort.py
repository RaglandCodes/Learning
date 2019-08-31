array = [3, 4, 776, 88, 2, 33, 44, 6, 2, 5, 7, 4, 2, 5, 88, 32, 65, 12, 76, 2, 765, 23, 65]

print("Unsorted array => ", array)

for i in range(len(array)):
    for j in range(i, len(array)):
        if array[i] > array[j]:
            array[i], array[j] = array[j], array[i]
        
print("Sorted array => ", array)
