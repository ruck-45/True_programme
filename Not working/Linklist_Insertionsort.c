#include<stdio.h>
#include<stdlib.h>
struct node
{
	int a;
	struct node *next;
	struct node *prev;
};

void main()
{
	struct node *head=NULL,*temp;
	int n,i,t;
	printf("Enter number of eleents : ");
	scanf("%d",&n);
	void input()
	{
		temp=(struct node*)malloc(sizeof(struct node));
		temp->a=t;
		if(head==NULL)
		{
			head=temp;
			temp->next=NULL;
			temp->prev=NULL;
		}
		else
		{
			temp->next=head;
			head->prev=temp;
			head=temp;
		}
	}
	for(i=0;i<n;i++)
	{
		scanf("%d",&t);
		input();
	}
	void I_sort()
{
	int t;
	struct node *tail,*pos,*h;
	h=head;
	while(h)
	{
		pos=h;
		tail=h->prev;
		while(tail)
		{
			if(tail->a > pos->a)
			{
				t=tail->a;
				tail->a=pos->a;
				pos->a=t;
				pos=tail;
			}
			tail=tail->prev;
		}
		h=h->next;
	}
}
	I_sort();
	temp=head;
	printf("Sorted list :\n");
	while(temp)
	{
		printf("%d  ",&temp->a);
		temp=temp->next;
	}
}
