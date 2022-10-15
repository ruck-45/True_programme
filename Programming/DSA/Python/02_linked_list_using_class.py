class Node:
    def __init__(self,value):
        self.val = value
        self.next = None

class Linked_list:
    def __init__(self):
        self.head = None

    def create_node_at_begining(self,value):
        temp = Node(value)

        if self.head:
            temp.next = self.head
        self.head = temp
    
    def create_node_at_end(self,value):
        temp = Node(value)

        if self.head:
            cur = self.head
            while cur.next:
                cur = cur.next
            cur.next = temp
                
        else:
            self.head = temp

    def delete_node_at_begining(self):
        length = self.node_length()

        if length > 0:
            print(f'Popped value : {self.head.val}')
            self.head = self.head.next
        else:
            print('link list empty')
    
    def delete_node_at_end(self):

        length = self.node_length()

        if length > 0:
            cur = self.head
            while cur.next.next:
                cur = cur.next
            print(f'Popped value : {cur.next.val}')
            cur.next = None
        else:
            print('link list empty')
    
    def node_length(self):
        cur = self.head
        count = 0
        while cur:
            count += 1
            cur = cur.next
        return count
    
    def insert_node(self,value,pos):
        length = self.node_length()
        
        if pos == 1:
            self.create_node_at_begining(value)
        elif pos == length+1:
            self.create_node_at_end(value)
        else:
            temp = Node(value)
            cur = self.head

            while(pos>2):
                cur = cur.next
                pos -= 1
            temp.next = cur.next
            cur.next = temp

    def delete_node(self,pos):
        length = self.node_length()
        
        if length>0:
            if pos > length:
                print('invalid position')
            elif pos == length:
                self.delete_node_at_end()
            elif pos == 1:
                self.delete_node_at_begining()
            else:
                cur = self.head

                while(pos>2):
                    cur = cur.next
                    pos -= 1
                print(f'Popped value : {cur.next.val}')
                cur.next = cur.next.next
        else:
            print('link list empty')

    def swap_elements(self, pos1,pos2):
        length = self.node_length()
        cur = self.head
        a = None
        b = None
        
        if pos1 <= 0 or pos2 <= 0 or pos1>length or pos2>length:
            print('Invalid Positions')
        else:
            for i in range(1,length+1):
                if i == pos1:
                    a = cur
                if i == pos2:
                    b = cur
                cur = cur.next

            temp = a.val
            a.val = b.val
            b.val = temp
    
    def l_search(self,num):
        cur = self.head
        search = 0
        while cur:
            if cur.val == num:
                search = 1
                break
            cur = cur.next
        if search == 0:
            print('search unsuccessful')
        else:
            print('search successful')
    
    def show_list(self):
        cur = self.head
        while cur:
            print(cur.val, end='-->')
            cur = cur.next
        print('NULL')

if __name__ == '__main__':
    l = Linked_list()
    
    l.create_node_at_end(15)
    l.create_node_at_end(10)
    l.create_node_at_end(50)
    l.create_node_at_end(20)
    l.create_node_at_end(45)
    
    l.show_list()

    print('\n')
    l.insert_node(145,1)
    l.insert_node(87,7)
    l.insert_node(0,4)

    l.show_list()

    print('\n')
    l.delete_node(1)
    l.delete_node(7)
    l.delete_node(4)

    l.show_list()

    print('\n')

    l.swap_elements(2,5)
    l.show_list()

    print('\n')
    l.l_search(20)