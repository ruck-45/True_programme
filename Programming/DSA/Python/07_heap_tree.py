arr = [int(i) for i in (input('Enter elements comma separated : ')).split(',')]

# building max heap tree

for i in range(len(arr)):
    cur = i
    parent = (cur-1)//2

    while parent>=0:
        if arr[parent] < arr[cur]:
            temp = arr[parent]
            arr[parent] = arr[cur]
            arr[cur] = temp

            cur = parent
            parent = parent = (cur-1)//2
        else:
            break

print(f'\nHeap Tree : {arr}')

# deletion (max_heap)

def graph_del(arr,is_root):
    if arr:
        temp = arr.pop()

    if arr and is_root:
        arr[0] = temp

        cur = 0
        child1 = 2*cur+1
        child2 = 2*cur+2

        length = len(arr)

        while child1<length:
            swap_ind = child1

            if child2<length and arr[child1] < arr[child2]:
                swap_ind = child2

            if arr[swap_ind]>arr[cur]:
                    temp = arr[cur]
                    arr[cur] = arr[swap_ind]
                    arr[swap_ind] = temp

                    cur = swap_ind
                    child1 = 2*cur+1
                    child2 = 2*cur+2
            else:
                break

    return arr


choice = 1

while choice:
    choice = int(input('\nEnter 1 ---> delete or 0 ---> exit : '))

    if choice == 1:
        is_root =  int(input('Enter 0 ---> delete right most leaf or 1 ---> delete root : '))
        arr = graph_del(arr,is_root)
        print(f'Heap Tree : {arr}')

    elif choice == 0:
        break
    else:
        print('\nWrong_choice')
