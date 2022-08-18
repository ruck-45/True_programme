arr = [int(i) for i in input('Enter all array element comma separated : ').split(',')]
element = int(input('Enter search element : '))

if element in arr:
    print(f'element found at index : {arr.index(element)}')
else:
    print('Element not found')