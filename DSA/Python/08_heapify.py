arr = [int(i) for i in input('Enter elements comma separated : ').split(',')]


# heapify (max_heap)

length = len(arr)
i = length-1

while i>=0:
    cur = i
    child1 = cur*2+1
    child2 = cur*2+2

    while child1<length:
        swap_ind = child1
        if child2<length and arr[child2]>arr[child1]:
            swap_ind = child2
        
        if arr[swap_ind]>arr[cur]:
            temp = arr[swap_ind]
            arr[swap_ind] = arr[cur]
            arr[cur] = temp

            cur = swap_ind
            child1 = cur*2+1
            child2 = cur*2+2
        else:
            break

    i -= 1


print(arr)
