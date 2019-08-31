array = [3, 4, 776, 88, 2, 33, 44, 6, 21, 5, 7, 4, 32, 5, 88, 32, 65, 12, 76, 2, 765, 23, 65]

print("Unsorted array => ", array)

len_array = len(array)

for i in range(len_array):
    smallest = array[i]
    smallest_index = i
    
    for j in range(i, len_array):
        if array[j] > smallest:
            smallest = array[j]
            smallest_index = j
    array[i], array[smallest_index] = array[smallest_index], array[i]

        

print("Sorted array => ", array)