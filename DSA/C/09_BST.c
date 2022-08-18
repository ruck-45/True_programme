# include<stdio.h>
# include<stdlib.h>
# include<conio.h>

struct node
{
	int val;
	struct node *left;
	struct node *right;
};

struct node* insert_into_BST(struct node* head,int val)
{
	struct node *temp,*cur = head;
	
	temp = (struct node*)malloc(sizeof(struct node));
	temp->val = val;
	temp->left = NULL;
	temp->right = NULL;
	
	if(head == NULL)
		head = temp;
	else
	{
		while(1)
		{
			if(val<=cur->val)
			{
				if (cur->left == NULL)
				{
					cur->left = temp;
					break;
				}
				cur = cur->left;
			}
			else
			{
				if (cur->right == NULL)
				{
					cur->right = temp;
					break;
				}
				cur = cur->right;
			}
		}
	}
	return head;
}

int display_min(struct node* head)
{
	while(head->left!=NULL)
		head = head->left;
	return head->val;
}

int display_max(struct node* head)
{
	while(head->right!=NULL)
		head = head->right;
	return head->val;
}

struct node* search_element(struct node* head,int val)
{
	while(head!=NULL)
	{
		if(val == head->val)
			return head;
		else if(val < head->val)
			head = head->left;
		else
			head = head->right;
	}
	
	return NULL;
}

void preorder(struct node *head)
{
	if(head!=NULL)
	{
		printf("%d -- ", head->val);
		preorder(head->left);
		preorder(head->right);
	}
}

void inorder(struct node *head)
{	
	if(head!= NULL)
	{
		inorder(head->left);
		printf("%d -- ", head->val);
		inorder(head->right);	
	}
}

void postorder(struct node *head)
{
	if(head!= NULL)
	{
		postorder(head->left);
		postorder(head->right);
		printf("%d -- ", head->val);
	}
}

struct node* delete_element(struct node *head,int value)
{	
	struct node* cur = head,*prev = NULL;
	int temp;
	
	while(cur->val != value)
	{
		prev = cur;
		if(value < cur->val)
			cur = cur->left;
		else
			cur = cur->right;
	}
	
	printf("cur : %d",cur->val);
//	printf("prev : %d",prev->val);
	
	if(cur->left == NULL && cur->right == NULL)
	{
		if(prev == NULL)
			return NULL;
		else
		{
			if(value < prev->val)
				prev->left = NULL;
			else
				prev->right = NULL;
		}
	}
	else if(cur->left != NULL && cur->right == NULL)
	{
		if(prev == NULL)
			return head->left;
		else
		{
			if(value < prev->val)
				prev->left = cur->left;
			else
				prev->right = cur->left;
		}
	}
	else if(cur->left == NULL && cur->right != NULL)
	{
		if(prev == NULL)
			return head->right;
		else
		{
			if(value < prev->val)
				prev->left = cur->right;
			else
				prev->right = cur->right;
		}
	}
	else
	{
		prev = cur->left;
		while(prev->right!=NULL)
			prev = prev->right;
		
		temp = prev->val;
		head = delete_element(head,temp);
		cur->val = temp;
	}
	
	return head;
}

void main()
{
	int choice,value;
	struct node *head = NULL,*temp;
	
	while(1)
	{
		printf("\n\nEnter 0 to exit");
		printf("\nEnter 1 to insert an element into BST");
		printf("\nEnter 2 to display the minimum element in the BST");
		printf("\nEnter 3 to display the largest element in the BST");
		printf("\nEnter 4 to search an element in the BST");
		printf("\nEnter 5 to perform preorder traversal");
		printf("\nEnter 6 to perform inorder traversal");
		printf("\nEnter 7 to perform postorder traversal");
		printf("\nEnter 8 to delete an element");
		
		printf("\n\n Enter Your Choice : ");
		scanf("%d", &choice);
		
		while(choice<0 || choice>8)
		{
			printf("\n\nWrong Input");
			printf("\nEnter Your Choice : ");
			scanf("%d", &choice);
		}
		
		switch(choice)
		{
			case 0:
				exit(0);
			case 1:
				printf("Enter value to be inserted : ");
				scanf("%d",&value);
				head = insert_into_BST(head,value);
				break;
			case 2:
				if(head == NULL)
					printf("BST Empty");
				else
					printf("Minimum element in the BST : %d",display_min(head));
				break;
			case 3:
				if(head == NULL)
					printf("BST Empty");
				else
					printf("Maximum element in the BST : %d",display_max(head));
				break;
			case 4:
				if(head == NULL)
					printf("BST Empty");
				else
				{
					printf("Enter element to be searched : ");
					scanf("%d",&value);
					temp = search_element(head,value);
					
					if(temp == NULL)
						printf("Element not found");
					else
						printf("Element Found");
				}
				break;
			case 5:
				if(head == NULL)
					printf("BST Empty");
				else
					preorder(head);
				break;
			case 6:
				if(head == NULL)
					printf("BST Empty");
				else
					inorder(head);
				break;
			case 7:
				if(head == NULL)
					printf("BST Empty");
				else
					postorder(head);
				break;
			case 8:
				if(head == NULL)
					printf("BST Empty");
				else
				{
					printf("Enter the element to be deleted : ");
					scanf("%d",&value);
					temp = search_element(head,value);
					
					if(temp == NULL)
						printf("Element Not Found");
					else
					{
						head = delete_element(head,value);
						printf("Element deleted");
					}
				}
		}
	}
}
