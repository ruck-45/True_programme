arr = []

while True:
    print("Enter 0 to exit")
    print("Enter 1 to push an element")
    print("Enter 2 to pop an element")
    print("Enter 3 to insert an element at desired position")
    print("Enter 4 to delete an element at desired position")
    print("Enter 5 to swap element positions")
    print("Enter 6 to show the array")

    choice = int(input())

    if not choice:
        break
    elif choice == 1: # append
        arr.append(int(input('Enter the element to be pushed : ')))
    elif choice == 2: # pop
        print(f'popped item : {arr.pop()}')
    elif choice == 3: # insert
        element = int(input('Enter element to be inserted : '))
        pos = int(input('Enter position to insert element : '))
        if pos > len(arr)+1:
            print('invalid position')
        else:
            arr.insert(pos-1,element)
    elif choice == 4: # remove from a position
        pos = int(input('Enter position of element to be removed : '))
        if pos > len(arr):
            print('invalid position')
        else:
            arr.pop(pos-1)
    elif choice == 5: # swap
        positions = [int(i)-1 for i in input("Enter positions of elements to be swapped comma separated : ").split(',')]
        temp = arr[positions[0]]
        arr[positions[0]] = arr[positions[1]]
        arr[positions[1]] = temp
    elif choice == 6: # display
        print(arr)
    else:
        print('Wrong Input')
