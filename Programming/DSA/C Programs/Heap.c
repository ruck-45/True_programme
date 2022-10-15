#include<stdio.h>
#include<stdlib.h>

int type=0;

void InsertMin(int *arr,int n)
{
	int cur=n,par=(n-1)/2,temp=0;
	while(par>=0)
	{
		if(arr[cur]<arr[par])
		{
			temp=arr[cur];
			arr[cur]=arr[par];
			arr[par]=temp;
			
			cur=par;
			par=(cur-1)/2;
		}
		else
		break;
	}
}

void InsertMax(int *arr,int n)
{
	int cur=n,par=(n-1)/2,temp=0;
	while(par>=0)
	{
		if(arr[cur]>arr[par])
		{
			temp=arr[cur];
			arr[cur]=arr[par];
			arr[par]=temp;
			
			cur=par;
			par=(cur-1)/2;
		}
		else
		break;
	}
}

int MIN(int *temp,int a,int b)
{
	if(temp[a]<=temp[b])
	return a;
	else
	return b;
}

int MAX(int *temp,int a,int b)
{
	if(temp[a]>=temp[b])
	return a;
	else
	return b;
}

int DeleteMin(int *arr, int n)
{
	int lchld,rchld,cur=0,min=0,temp=0;
	arr[0]=arr[n-1];
	while(cur<n-1)
	{
		lchld=2*cur+1;
		rchld=2*cur+2;
		
		if(lchld>n-2)
		break;
		else if(rchld>n-2)
		min=lchld;
		else
		min=MIN(arr,lchld,rchld);
		
		if(arr[cur]>arr[min])
		{
			temp=arr[cur];
			arr[cur]=arr[min];
			arr[min]=temp;
			
			cur=min;
		}
		else
		break;
	}
	
	return n-1;
}

int DeleteMax(int *arr, int n)
{
	int lchld,rchld,cur=0,max=0,temp=0;
	arr[0]=arr[n-1];
	while(cur<n-1)
	{
		lchld=2*cur+1;
		rchld=2*cur+2;
		if(lchld>n-2)
		break;
		else if(rchld>n-2)
		max=lchld;
		else
		max=MAX(arr,lchld,rchld);
		
		if(arr[cur]<arr[max])
		{
			temp=arr[cur];
			arr[cur]=arr[max];
			arr[max]=temp;
			
			cur=max;
		}
		else
		break;
	}
	
	return n-1;
}

void main()
{
	int ch,num,i;
	while(1)
	{
		printf("\n\nEnter 0 to Quit\n");
		printf("Enter 1 to insert elements\n");
		printf("Enter 2 to display heap\n");
		printf("Enter 3 to delete elements\n");
		printf("\nEnter your choice :");
		scanf("%d",&ch);
		switch(ch)
		{
			case 0:
				exit(0);
			case 1:
				printf("Enter number of elements to be inserted: ");
				scanf("%d",&num);
				int *temp = (int *)malloc(num*sizeof(int));
				printf("Enter 1 to construct MinHeap & 2 to construct MaxHeap :");
				scanf("%d",&type);
				printf("Enter the elements :");
				for(i=0;i<num;i++)
				{
					scanf("%d",&temp[i]);
					if(type==1)
					InsertMin(temp,i);
					else if(type==2)
					InsertMax(temp,i);
					else
					{
						printf("Wrong Choice\n");
						break;
					}
				}
				break;
			case 2:
				printf("Heap:\n");
				for(i=0;i<num;i++)
				printf("%d\t",temp[i]);
				break;
			case 3:
				printf("Enter number of times to perform deletion operation:");
				scanf("%d",&i);
				while(i>0)
				{
					if(type==1)
					num=DeleteMin(temp,num);
					else if(type==2)
					num=DeleteMax(temp,num);
					i--;
				}
			default:
				printf("Wrong input, try again");	
		}
	}	
}
