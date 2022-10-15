arr = [int(i) for i in input('Enter elements comma separeted : ').split(',')]

# Heap sort (ascending)

# heapify
length = len(arr)
i = length-1
while i>=0:
    cur = i
    lchild = cur*2+1
    rchild = cur*2+2

    while lchild<length:
        swap_ind = lchild
        if rchild<length and arr[rchild]>arr[lchild]:
            swap_ind = rchild

        if arr[cur]<arr[swap_ind]:
            temp = arr[cur]
            arr[cur] = arr[swap_ind]
            arr[swap_ind] = temp

            cur = swap_ind
            lchild = cur*2+1
            rchild = cur*2+2
        else:
            break
    i-=1

print(arr)


# Deleting root node and appending at last

i = length-1

while i>0:
    temp = arr[i]
    arr[i] = arr[0]
    arr[0] = temp
    i-=1

    cur = 0
    lchild = cur*2+1
    rchild = cur*2+2

    while lchild<i+1:
        swap_ind = lchild
        if rchild<i+1 and arr[rchild]>arr[lchild]:
            swap_ind = rchild

        if arr[cur] < arr[swap_ind]:
            temp = arr[cur]
            arr[cur] = arr[swap_ind]
            arr[swap_ind] = temp

            cur = swap_ind
            lchild = cur*2+1
            rchild = cur*2+2
        else:
            break

print(arr)