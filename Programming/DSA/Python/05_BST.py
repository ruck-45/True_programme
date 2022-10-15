from email import header


class Node:
    def __init__(self,value):
        self.val = value
        self.left = None
        self.right = None


class BinarySearchTree:
    def __init__(self,value) -> None:
        self.head = Node(value)
    
    def insert_element(self,value):
        temp = Node(value)
        cur = self.head

        while True:
            if cur.val>=value:
                if cur.left == None:
                    cur.left = temp
                    break
                else:
                    cur = cur.left
            else:
                if cur.right == None:
                    cur.right = temp
                    break
                else:
                    cur = cur.right
        
    def display_min_element(self):
        cur = self.head
        while cur.left != None:
            cur = cur.left
        
        return cur.val

    def display_max_element(self):
        cur = self.head
        while cur.right!= None:
            cur = cur.right
        
        return cur.val
    
    def search_element(self,element):
        cur = self.head
        search_res = 0

        while cur != None:
            if cur.val == element:
                search_res = 1
                break
            elif cur.val>element:
                cur = cur.left
            else:
                cur = cur.right
            
        return search_res

    def preorder(self,arr,root):
        if root != None:
            arr.append(root.val)
            arr = self.preorder(arr,root.left)
            arr = self.preorder(arr,root.right)
        
        return arr

    def inorder(self,arr,root):
        if root != None:
            arr = self.inorder(arr,root.left)
            arr.append(root.val)
            arr = self.inorder(arr,root.right)
        
        return arr

    def postorder(self,arr,root):
        if root != None:
            arr = self.postorder(arr,root.left)
            arr = self.postorder(arr,root.right)
            arr.append(root.val)
        
        return arr

    def delete_element(self,element):
        search_res = self.search_element(element)
        if search_res == 0:
            print("Element not found")
        else:
            cur = self.head
            prev = None

            while cur.val != element:
                prev = cur
                if cur.val<element:
                    cur = cur.right
                else:
                    cur = cur.left
                
            if prev == None:
                if cur.left == None and cur.right == None:
                    self.head = None
                elif cur.left == None:
                    self.head = cur.right
                elif cur.right == None:
                    self.head = cur.left
                else:
                    inorder_pred = cur.left
                    while inorder_pred.right != None:
                        inorder_pred = inorder_pred.right
                    
                    temp = inorder_pred.val
                    self.delete_element(temp)
                    cur.val = temp

            else:
                if cur.left == None and cur.right == None:
                    if prev.left == cur:
                        prev.left = None
                    else:
                        prev.right = None
                
                elif cur.left == None:
                    if prev.left == cur:
                        prev.left = cur.right
                    else:
                        prev.right = cur.right

                elif cur.right == None:
                    if prev.left == cur:
                        prev.left = cur.left
                    else:
                        prev.right = cur.left

                else:
                    inorder_pred = cur.left
                    while inorder_pred.right != None:
                        inorder_pred = inorder_pred.right
                    
                    temp = inorder_pred.val
                    self.delete_element(temp)
                    cur.val = temp

if __name__ == '__main__':
    T = BinarySearchTree(12)
    
    T.insert_element(4)
    T.insert_element(3)
    T.insert_element(15)
    T.insert_element(8)
    T.insert_element(6)
    T.insert_element(13)
    T.insert_element(20)
    T.insert_element(14)
    T.insert_element(1)
    T.insert_element(5)
    T.insert_element(7)

    print(f'max_element = {T.display_max_element()}')
    print(f'min_element = {T.display_min_element()}')

    print(f'preorder_traverasl = {T.preorder([],T.head)}')
    print(f'inorder_traverasl = {T.inorder([],T.head)}')
    print(f'postorder_traverasl = {T.postorder([],T.head)}')

    print(f'Search_0 = {T.search_element(0)}')
    print(f'Search_12 = {T.search_element(12)}')
    print(f'Search_15 = {T.search_element(15)}')
    print(f'Search_98 = {T.search_element(98)}')
    print(f'Search_-98 = {T.search_element(-98)}')
    print(f'Search_14 = {T.search_element(14)}')
    print(f'Search_6 = {T.search_element(6)}')

    T.delete_element(12)
    print(f'preorder_traverasl = {T.preorder([],T.head)}')

    T.delete_element(8)
    print(f'preorder_traverasl = {T.preorder([],T.head)}')

