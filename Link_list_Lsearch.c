#include<stdio.h>
#include<stdlib.h>
struct node
{
	int data;
	struct node *next;
};

void main()
{
	
	struct node *head=NULL;
	int n,i,t,num;
	printf("No. of inputs :");
	scanf("%d",&n);
	void insert()
	{
		struct node *temp,*cur=head;
		temp=(struct node*)malloc(sizeof(struct node));
		temp->data=t;
		temp->next=NULL;
		if(cur==NULL)
		head=temp;
		else
		{
			while(cur->next!=NULL)
			cur=cur->next;
			cur->next=temp;
		}
	}
	printf("\nEnter the elements : ");
	for(i=0;i<n;i++)
	{
		scanf("%d",&t);
		insert();
	}
	printf("elements entered : ");
	struct node *ptr=head;
	for(ptr=head;ptr!=NULL;ptr=ptr->next)
	printf("\n%d",ptr->data);
	printf("\nEnter No. to be found :");
	scanf("%d",&num);
	for(ptr=head;ptr!=NULL;ptr=ptr->next)
	{
		if(ptr->data==num)
		{
			i=-1;
			break;
		}
	}
	if(i==-1)
	printf("Successful");
	else
	printf("Unsuccesful");
}
