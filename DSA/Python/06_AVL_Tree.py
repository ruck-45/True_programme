class Node:
    def __init__(self,value):
        self.val = value
        self.left = None
        self.right = None
        self.height = 1
        self.left_height = 0
        self.right_height = 0

class AVL:
    def __init__(self,value):
        self.head = Node(value) 
    
    def LL_balance(self,root):
        head = root.left
        root.left = head.right
        head.right = root

        root.left_height = root.left.height if root.left else 0
        root.height = max(root.left_height,root.right_height) + 1

        head.right_height = head.right.height if head.right else 0
        head.height = max(head.left_height,head.right_height) + 1

        return head

    def RR_balance(self,root):
        head = root.right
        root.right = head.left
        head.left = root

        root.right_height = root.right.height if root.right else 0
        root.height = max(root.left_height,root.right_height) + 1

        head.left_height = head.left.height if head.left else 0
        head.height = max(head.left_height,head.right_height) + 1

        return head

    def LR_balance(self,root):
        temp = root.left.right
        root.left.right = temp.left
        temp.left = root.left
        root.left = temp

        temp.left.right_height = temp.left.right.height if temp.left.right else 0
        temp.left.height = max(temp.left.right_height,temp.left.left_height) + 1

        temp.left_height = temp.left.height if temp.left else 0
        temp.height = max(temp.right_height,temp.left_height) + 1

        root = self.LL_balance(root)
        return root

    def RL_balance(self,root):
        temp = root.right.left
        root.right.left = temp.right
        temp.right = root.right
        root.right = temp

        temp.right.left_height = temp.right.left.height if temp.right.left else 0
        temp.right.height = max(temp.right.right_height,temp.right.left_height) + 1

        temp.right_height = temp.right.height if temp.right else 0
        temp.height = max(temp.right_height,temp.left_height) + 1

        root = self.RR_balance(root)
        return root

    def balance(self,root):
        BF1 = root.left_height - root.right_height
        
        if BF1>0:
            BF2 = root.left.left_height - root.left.right_height
            if BF2>0:
                root = self.LL_balance(root)
            else:
                root = self.LR_balance(root)
        else:
            BF2 = root.right.left_height - root.right.right_height
            if BF2>0:
                root = self.RL_balance(root)
            else:
                root = self.RR_balance(root)
        
        return root


    def insert_element(self,root,value):      
        if root == None:
            temp = Node(value)
            root = temp
        else:
            if value<=root.val:
                root.left = self.insert_element(root.left,value)
                root.left_height = root.left.height
            else:
                root.right = self.insert_element(root.right,value)
                root.right_height = root.right.height
            
            root.height = max(root.left_height,root.right_height)+1
        
        
        BF = root.left_height - root.right_height
        if BF>1 or BF<-1:
            root = self.balance(root)
        return root
    
    def preorder(self,arr,root):
        if root != None:
            arr.append((root.val,root.height))
            arr = self.preorder(arr,root.left)
            arr = self.preorder(arr,root.right)
        
        return arr
    

if __name__ == '__main__':
    T = AVL(12)
    
    T.head = T.insert_element(T.head,4)
    T.head = T.insert_element(T.head,3)
    T.head = T.insert_element(T.head,15)
    T.head = T.insert_element(T.head,8)
    T.head = T.insert_element(T.head,6)
    T.head = T.insert_element(T.head,13)
    T.head = T.insert_element(T.head,20)
    T.head = T.insert_element(T.head,14)
    T.head = T.insert_element(T.head,1)
    T.head = T.insert_element(T.head,5)
    T.head = T.insert_element(T.head,7)

    print(f'preorder_traverasl = {T.preorder([],T.head)}')
