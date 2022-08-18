#include<stdio.h>
#include<stdlib.h>

struct AVL
{
	int data,height;
	struct AVL *left,*right;
};

int MAX(int a,int b)
{
	if(a>=b)
	return a;
	else
	return b;
}

int Height(struct AVL *Root)
{
	if(Root==NULL)
	return 0;
	else
	return Root->height;
}

void UpdateHeight(struct AVL *Root)
{
	if(Root->left==NULL && Root->right==NULL)
	Root->height=1;
	else if(Root->left==NULL)
	Root->height=Root->right->height+1;
	else if(Root->right==NULL)
	Root->height=Root->left->height+1;
	else
	Root->height=MAX(Root->left->height,Root->right->height)+1;
}

int CalcBF(struct AVL *Root)
{
	int BF=0;
	BF=Height(Root->left)-Height(Root->right);
	return BF;
}

struct AVL *CreateNewNode(int n)
{
	struct AVL *temp;
	temp=(struct AVL *)malloc(sizeof(struct AVL));
	temp->data=n;
	temp->height=1;
	temp->left=NULL;
	temp->right=NULL;
	return temp;
}

struct AVL *LeftRotate(struct AVL *Root)
{
	struct AVL *temp=Root->right;
	Root->right=temp->left;
	temp->left=Root;
	UpdateHeight(Root);
	UpdateHeight(temp);
	return temp;
}

struct AVL *RightRotate(struct AVL *Root)
{
	struct AVL *temp=Root->left;
	Root->left=temp->right;
	temp->right=Root;
	UpdateHeight(Root);
	UpdateHeight(temp);
	return temp;
}

struct AVL *InsertAndBalance(struct AVL *Root,struct AVL *node)
{
	int BF=0;
	if(Root==NULL)
	return node;
	else
	{
		if(node->data<Root->data)
		Root->left=InsertAndBalance(Root->left,node);
		else if(node->data>Root->data)
		Root->right=InsertAndBalance(Root->right,node);
		
		UpdateHeight(Root);
		BF=CalcBF(Root);
		
		if(BF>1)
		{
			if(node->data<Root->left->data)
			Root=RightRotate(Root);
			else
			{
				Root->left=LeftRotate(Root->left);
				Root=RightRotate(Root);
			}	
		}
		else if(BF<-1)
		{
			if(node->data>Root->right->data)
			Root=LeftRotate(Root);
			else
			{
				Root->right=RightRotate(Root);
				Root=LeftRotate(Root);
			}
		}
		return Root;
	}
}

void preorder(struct AVL *Root)
{
	if(Root!=NULL)
	{
		printf("%d\t",Root->data);
		preorder(Root->left);
		preorder(Root->right);
	}
}

void inorder(struct AVL *Root)
{
	if(Root!=NULL)
	{
		inorder(Root->left);
		printf("%d\t",Root->data);
		inorder(Root->right);
	}
}

void postorder(struct AVL *Root)
{
	if(Root!=NULL)
	{
		postorder(Root->left);
		postorder(Root->right);
		printf("%d\t",Root->data);
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
		printf("\nEnter your choice :");
		scanf("%d",&ch);
		switch(ch)
		{
			case 0:
				exit(0);
			case 1:
				printf("Enter the element to be inserted: ");
				scanf("%d",&num);
				struct AVL *ROOT=NULL,*NODE;
				NODE=CreateNewNode(num);
				ROOT=InsertAndBalance(ROOT,NODE);
				break;
			case 2:
				printf("Preorder traversal :\n");
				preorder(ROOT);
				break;
			case 3:
				printf("Inorder traversal :\n");
				inorder(ROOT);
				break;
			case 4:
				printf("Postorder traversal :\n");
				postorder(ROOT);
				break;
			default:
				printf("Wrong input, try again");	
		}
	}	
}
