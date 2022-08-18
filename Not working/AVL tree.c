#include<stdio.h>
#include<stdlib.h>

struct AVL
{
	int data,height;
	struct AVL *left,*right;
};

struct AVL *root=NULL;

struct AVL *CreateNewNode(int n)
{
	struct AVL *temp;
	temp=(struct AVL *)malloc(sizeof(struct AVL));
	temp->data=n;
	temp->height=1;
	temp->left=NULL;
	temp->right=NULL;
	if(root==NULL)
	root=temp;
	return temp;
}

int CalcBF(struct AVL *Root)
{
	int BF=0;
	if(Root->left==NULL && Root->right==NULL)
	{
		Root->height=0;
		BF=0;
	}
	else if(Root->right==NULL)
	{
		Root->height=Root->left->height+1;
		
		BF=Root->left->height;
	}
	else if(Root->left==NULL)
	{
		Root->height=Root->right->height+1;
		
		BF=-Root->right->height;
	}
	else
	{
		if(Root->left->height<=Root->right->height)
		Root->height=Root->right->height+1;
		else
		Root->height=Root->left->height+1;
		
		BF=Root->left->height-Root->right->height;
	}
	return BF;
}

struct AVL *RotateRight(struct AVL *Root)
{
	struct AVL *temp;
	temp=Root->left;
	Root->left=temp->right;
	temp->right=Root;
	CalcBF(temp);
	CalcBF(Root);
	return temp;
}

struct AVL *RotateLeft(struct AVL *Root)
{
	struct AVL *temp;
	temp=Root->right;
	Root->right=temp->left;
	temp->left=Root;
	CalcBF(temp);
	CalcBF(Root);
	return temp;
}



struct AVL *PositionNewNode(struct AVL *Root,struct AVL *NewNode, int key)
{
	int BF=0;
	if(Root!=NewNode)
	{
		if(Root==NULL)
		return NewNode;
		else if(NewNode->data<Root->data)
		Root->left=PositionNewNode(Root->left,NewNode,key);
		else if(NewNode->data>Root->data)
		Root->right=PositionNewNode(Root->right,NewNode,key);
		
		BF=CalcBF(Root);
		
		if(BF>1 && key<Root->left->data)
		{
			return RotateRight(Root);
		}
		
		else if(BF<-1 && key>Root->right->data)
		{
			return RotateLeft(Root);
		}
		
		else if(BF>1 && key>Root->left->data)
		{
			Root->left=RotateLeft(Root->left);
			CalcBF(Root->left);
			return RotateRight(Root);
		}
		
		else if(BF<-1 && key<Root->right->data)
		{
			Root->right=RotateRight(Root->right);
			CalcBF(Root->right);
			return RotateLeft(Root);
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
		printf("\nEnter your choice :");
		scanf("%d",&ch);
		switch(ch)
		{
			case 0:
				exit(0);
			case 1:
				printf("Enter the element to be inserted: ");
				scanf("%d",&num);
				PositionNewNode(root,CreateNewNode(num),num);
				break;
			default:
				printf("Wrong input, try again");	
		}
	}
	
}
