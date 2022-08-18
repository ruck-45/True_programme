#include<stdio.h>
#include<stdlib.h>

struct BST
{
	int data;
	struct BST *left,*right;
};

struct BST *root=NULL;

void insert(int n)
{
	struct BST *temp,*c,*p;
	temp=(struct BST *)malloc(sizeof(struct BST));
	if(temp==NULL)
	{
		printf("Overflow");
		exit(0);
	}
	temp->data=n;
	temp->left=NULL;
	temp->right=NULL;
	if(root==NULL)
	{
		root=temp;
	}
	else
	{
		c=root;
		while(c!=NULL)
		{
			p=c;
			if(n<=c->data)
			c=c->left;
			else
			c=c->right;
		}
		if(n<=p->data)
		p->left=temp;
		else
		p->right=temp;
	}
}

void preorder(struct BST *R)
{
	if(R!=NULL)
	{
		printf("%d\t",R->data);
		preorder(R->left);
		preorder(R->right);
	}
}

void inorder(struct BST *R)
{
	if(R!=NULL)
	{
		inorder(R->left);
		printf("%d\t",R->data);
		inorder(R->right);
	}
}

void postorder(struct BST *R)
{
	if(R!=NULL)
	{
		postorder(R->left);
		postorder(R->right);
		printf("%d\t",R->data);
	}
}

int search(int N)
{
	struct BST *c=root;
	int i=0;
	while(c!=NULL)
	{
		if(c->data<N)
		{
			c=c->right;
		}
		else if(c->data>N)
		{
			c=c->left;
		}
		else
		{
			i++;
			break;
		}
	}
	return i;
}

struct BST *FindInorderPred(struct BST *node)
{
	struct BST *cur=node->left,*par=node;
	while(cur!=NULL)
	{
		par=cur;
		cur=cur->right;
	}
	return par;
}

struct BST *Delete(int N,struct BST *Root)
{
	struct BST *temp;
	if(Root==NULL)
	return Root;
	else
	{
		if(N<Root->data)
		Root->left=Delete(N,Root->left);
		else if(N>Root->data)
		Root->right=Delete(N,Root->right);
		else
		{
			if(Root->left==NULL && Root->right==NULL)
			{
				free(Root);
				return NULL;
			}
			else if(Root->left==NULL)
			{
				temp=Root->right;
				free(Root);
				return temp;
			}
			else if(Root->right==NULL)
			{
				temp=Root->left;
				free(Root);
				return temp;
			}
			else
			{
				temp=FindInorderPred(Root);
				Root->data=temp->data;
				Root->left=Delete(temp->data,Root->left);
			}
		}
	}
}

void main()
{
	int ch,num;
	while(1)
	{
		printf("\n\nEnter 0 to Quit\n");
		printf("Enter 1 to insert element\n");
		printf("Enter 2 for preorder traversal\n");
		printf("Enter 3 for inorder traversal\n");
		printf("Enter 4 for postorder traversal\n");
		printf("Enter 5 for searching an element\n");
		printf("Enter 6 to delete an element\n");
		printf("\nEnter your choice :");
		scanf("%d",&ch);
		switch(ch)
		{
			case 0:
				exit(0);
			case 1:
				printf("Enter the element to be inserted: ");
				scanf("%d",&num);
				insert(num);
				break;
			case 2:
				printf("Preorder traversal :\n");
				preorder(root);
				break;
			case 3:
				printf("Inorder traversal :\n");
				inorder(root);
				break;
			case 4:
				printf("Postorder traversal :\n");
				postorder(root);
				break;
			case 5:
				printf("Enter the element need to be searched :");
				scanf("%d",&num);
				if(search(num)==1)
				printf("Search Successful, Element Found");
				else
				printf("Search Unsuccessful, Element Not Found");
				break;
			case 6:
				printf("Enter the number tobe deleted : ");
				scanf("%d",&num);
				if(search(num)==0)
				printf("Element is not present in the tree");
				else
				Delete(num,root);
				break;
			default:
				printf("Wrong input, try again");	
		}
	}
	
}
