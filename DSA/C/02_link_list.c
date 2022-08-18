# include <stdio.h>
# include <conio.h>
# include <stdlib.h>

struct node
{
	int val;
	struct node *next;
};

struct node *create_node(struct node *h,int val)
{
	
	struct node *temp, *cur;
	
	temp = (struct node*)malloc(sizeof(struct node));
	temp->val = val;
	temp->next = NULL;
	
	if (h == NULL)
		h = temp;
	else
	{
		cur = h;
		while (cur->next != NULL)
			cur = cur->next;
		cur->next = temp;
	}
	
	return h;
}

void display_list(struct node *h)
{
	while(h != NULL)
	{
		printf("%d -> ",h->val);
		h = h->next;
	}
	printf("NULL");
}

int remove_end_node(struct node *h)
{
	int dropped_val;
	
	while(h->next->next != NULL)
		h = h->next;
	
	dropped_val = h->next->val;
	h->next = NULL;
	
	return dropped_val;
}

struct node* insert_node_in_pos(struct node *head,int pos,int val)
{
	struct node *temp,*h = head;
	
	temp = (struct node *)malloc(sizeof(struct node));
	temp->val = val;
	temp->next = NULL;
	
	if (pos == 1)
	{
		temp->next = head;
		head = temp;
	}
	
	else
	{
		while(pos>2)
		{
			pos --;
			h = h->next;
		}
		
		temp->next = h->next;
		h->next = temp;
	}
	
	return head;
}

void delete_node_in_pos(struct node *h, int pos)
{
	int dropped_val;
	
	while(pos>2 && h != NULL)
	{
		pos --;
		h = h->next;
	}
	
	if(pos == 2)
	{
		if(h->next == NULL)
			printf("Invalid Position");
		else
		{
			dropped_val = h->next->val;
			h->next = h->next->next;
			printf("Dropped Value : %d", dropped_val);
		}
	}
	else
		printf("Invalid Position");
}

void swap_elements(struct node *h,int pos1,int pos2)
{
	int temp,i = 1;
	struct node *a,*b;
		
	while(h!=NULL)
	{
		if(i==pos1)
			a = h;
		if(i==pos2)
			b = h;
		
		i++;
		h = h->next;
	}
	
	temp = a->val;
	a->val = b->val;
	b->val = temp;
}

int l_search(struct node *h,int k)
{
	while(h!=NULL)
	{
		if(h->val == k)
			return (1);
		h = h->next;
	}
	
	return 0;
}

void main()
{
	int input = -1;
	int i;
	int pos;
	int val;
	int pos1;
	int length;
	
	struct node *head = NULL;
	struct node *cur;
	
	while(input!=0)
	{
		printf("\n\nEnter 0 to exit");
		printf("\nEnter 1 to create a new node at end");
		printf("\nEnter 2 to pop an element");
		printf("\nEnter 3 to insert an element at desired position");
		printf("\nEnter 4 to delete an element at desired position");
		printf("\nEnter 5 to swap elements");
		printf("\nEnter 6 to search for an element");
		printf("\nEnter 7 to display the link list");
		
		printf("\n\nEnter Your Choice : ");
		scanf("%d", &input);
		
		switch(input)
		{
			case 0: // Exit
				printf("Exit Successful");
				break;
			case 1: // Create a new node at end
				printf("Enter value of the node : ");
				scanf("%d",&val);
				head = create_node(head,val);
				break;
			case 2: // Remove the end node
				if(head == NULL)
					printf("No Node Present");
				else
				{
					val = remove_end_node(head);
					printf("Dropped Value : %d",val);
				}
				break;
			case 3 : // Insert node in pos
				printf("Enter the value of the node and position to be inserted : ");
				scanf("%d%d",&val,&pos);
				
				cur = head;
				length = 0;
				while (cur != NULL)
				{
					length ++;
					cur = cur->next;
				}
				
				if (pos<0 || pos >length+1)
					printf("Invalid Positions");
				else if(pos == length)
					head = create_node(head,val);
				else
					head = insert_node_in_pos(head,pos,val);
				break;
			case 4: // Delete node in pos
				printf("Enter the position to be deleted : ");
				scanf("%d",&pos);
				
				if(head==NULL)
					printf("No Node Found");
				else
					delete_node_in_pos(head,pos);
				break;
			case 5: //swap elements
				printf("Enter positions of nodes to be swapped : ");
				scanf("%d%d",&pos,&pos1);
				
				cur = head;
				length = 0;
				while (cur != NULL)
				{
					length ++;
					cur = cur->next;
				}
				
				if (pos<0 || pos1 <0 || pos >length || pos1>length)
					printf("Invalid Positions");
				else if (pos != pos1)
					swap_elements(head,pos,pos1);
				break;
			case 6: // search element
				printf("Enter the element to be searched : ");
				scanf("%d",&val);
				
				if(l_search(head,val))
					printf("Search Successful");
				else
					printf("Search Unuccessful");
				break;				
			case 7: // print
				display_list(head);
				break;
			default :
				printf("\nWrong Input");
		}
	}
}
