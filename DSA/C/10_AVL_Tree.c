# include<stdio.h>
# include<stdlib.h>
# include<conio.h>

struct node
{
	int val;
	int height;
	int left_height;
	int right_height;
	
	struct node *left;
	struct node *right;
};

struct node* update_height(struct node* root)
{
	if(root->left_height <= root->right_height)
		root->height = root->right_height+1;
	else
		root->height = root->left_height+1;
	
	return root;
}

struct node* LL_balance(struct node *root)
{
	struct node* temp;
	
	temp = root->left;
	root->left = temp->right;
	temp->right = root;
	root = temp;
	
	if (root->right->left != NULL)
		root->right->left_height = root->right->left->height;
	else
		root->right->left_height = 0;
	
	root->right = update_height(root->right);
	
	root->right_height = root->right->height;
	root = update_height(root);
	
	return root;
}

struct node* LR_balance(struct node *root)
{
	struct node* temp;
	
	temp = root->left;
	root->left = root->left->right;
	temp->right = root->left->left;
	root->left->left = temp;
	
	if(root->left->left->right != NULL)
		root->left->left->right_height = root->left->left->right->height;
	else
		root->left->left->right_height = 0;
	
	root->left->left = update_height(root->left->left);
	
	root->left->left_height = root->left->left->height;
	root->left = update_height(root->left);
	
	return LL_balance(root);
}

struct node* RR_balance(struct node *root)
{
	struct node* temp;
	
	temp = root->right;
	root->right = temp->left;
	temp->left = root;
	root = temp;
	
	if (root->left->right != NULL)
		root->left->right_height = root->left->right->height;
	else
		root->left->right_height = 0;
	
	root->left = update_height(root->left);
	
	root->left_height = root->left->height;
	root = update_height(root);
	
	return root;
}

struct node* RL_balance(struct node *root)
{
	struct node* temp;
	
	temp = root->right;
	root->right = root->right->left;
	temp->left = root->right->right;
	root->right->right = temp;
	
	if(root->right->right->left != NULL)
		root->right->right->left_height = root->right->right->left->height;
	else
		root->right->right->left_height = 0;
	
	root->right->right = update_height(root->right->right);
	
	root->right->right_height = root->right->right->height;
	root->right = update_height(root->right);
	
	return RR_balance(root);
}

struct node *balance_root(struct node* root)
{
	int BF;
	int temp;
	
	BF  = root->left_height - root->right_height;
	
	if(BF>1)
	{
		temp = root->left->left_height - root->left->right_height;
		if(temp>0)
			root = LL_balance(root);
		else
			root = LR_balance(root);
	}
	
	else if(BF<-1)
	{
		temp = root->right->left_height - root->right->right_height;
		if(temp>0)
			root = RL_balance(root);
		else
			root = RR_balance(root);
	}
	
	return root;
}

struct node* insert_into_BST(struct node* root,int value)
{
	struct node *temp;
	int BF ;
	
	if(root == NULL)
	{
		temp = (struct node *)malloc(sizeof(struct node));
		temp->val = value;
		temp->height = 1;
		temp->left_height = 0;
		temp->right_height = 0;
		temp->left = NULL;
		temp->right = NULL;
		
		root = temp;
	}
	else
	{
		if(value<=root->val)
		{
			root->left = insert_into_BST(root->left,value);
			root->left_height = root->left->height;
		}
		else
		{
			root->right = insert_into_BST(root->right,value);
			root->right_height = root->right->height;
		}
		
		if(root->left_height <= root->right_height)
			root->height = root->right_height+1;
		else
			root->height = root->left_height+1;
	}
	
	return balance_root(root);
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

void main()
{
	int choice,value;
	struct node *head = NULL;
	
	while(1)
	{
		printf("\n\nEnter 0 to exit");
		printf("\nEnter 1 to insert an element into BST");
		printf("\nEnter 2 to perform preorder traversal");
		
		printf("\n\n Enter Your Choice : ");
		scanf("%d", &choice);
		
		while(choice<0 || choice>2)
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
					preorder(head);
				break;
		}
	}
}
