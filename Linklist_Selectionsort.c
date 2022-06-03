#include<stdio.h>
#include<stdlib.h>
struct list
{
	int a;
	struct list *next;
};

void main()
{
	struct list *head=NULL;
	int n,i,t;
	printf("No. of inputs :");
	scanf("%d",&n);
	void input()
	{
		struct list *temp,*cur=head;
		temp=(struct list*)malloc(sizeof(struct list));
		temp->a=t;
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
	for(i=0;i<n;i++)
	{
		scanf("%d",&t);
		input();
	}
	void S_sort()
{
	struct list *cur,*min,*h;
	int tem;
	h=head;
	while(h)
	{
		cur=h;
		min=h;
		while(cur)
		{
			if(min->a > cur->a)
			min=cur;
			cur=cur->next;
		}
		tem=h->a;
		h->a=min->a;
		min->a=tem;
		h=h->next;
	}
}
	S_sort();
	struct list *q=head;
	printf("Sorted List : ");
	while(q)
	{
		printf("%d  ",q->a);
		q=q->next;
	}
}
