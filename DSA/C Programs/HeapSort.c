#include<stdio.h>
#include<stdlib.h>

int type=0;

int MIN(int *arr, int a, int b)
{
	if(arr[a]<=arr[b])
	return a;
	else
	return b;
}

int MAX(int *arr, int a, int b)
{
	if(arr[a]>=arr[b])
	return a;
	else
	return b;
}

void MinHeapify(int *arr, int n)
{
	int i=(n-2)/2,cur=0,lchld=0,rchld=0,min=0,temp=0;
	while(i>=0)
	{
		cur=i;
		while(1)
		{
			lchld=2*cur+1;
			rchld=2*cur+2;
			
			if(lchld>=n)
			break;
			else if(rchld>=n)
			min=lchld;
			else
			min=MIN(arr,lchld,rchld);
			
			if(arr[cur]>arr[min])
			{
				temp=arr[cur];
				arr[cur]=arr[min];
				arr[min]=temp;
			}
			else
			break;
			
			cur=min;
		}
		
		i--;
	}
}

void MaxHeapify(int *arr, int n)
{
	int i=(n-2)/2,cur=0,lchld=0,rchld=0,max=0,temp=0;
	while(i>=0)
	{
		cur=i;
		while(1)
		{
			lchld=2*cur+1;
			rchld=2*cur+2;
			
			if(lchld>=n)
			break;
			else if(rchld>=n)
			max=lchld;
			else
			max=MAX(arr,lchld,rchld);
			
			if(arr[cur]<arr[max])
			{
				temp=arr[cur];
				arr[cur]=arr[max];
				arr[max]=temp;
			}
			else
			break;
			
			cur=max;
		}
		
		i--;
	}
}

void HeapSortAsc(int *arr, int n)
{
	int temp=0,cur=0,lchld=0,rchld=0,max=0;
	if(n>1)
	{
		temp=arr[n-1];
		arr[n-1]=arr[0];
		arr[0]=temp;
		
		while(1)
		{
			lchld=cur*2+1;
			rchld=cur*2+2;
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
		HeapSortAsc(arr,n-1);
	}
}

void HeapSortDec(int *arr, int n)
{
	int temp=0,cur=0,lchld=0,rchld=0,min=0;
	if(n>1)
	{
		temp=arr[n-1];
		arr[n-1]=arr[0];
		arr[0]=temp;
		
		while(1)
		{
			lchld=cur*2+1;
			rchld=cur*2+2;
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
		HeapSortDec(arr,n-1);
	}
}

void main()
{
	int n,*temp,i;
	printf("Enter the number of elements in the array :");
	scanf("%d",&n);
	temp=(int *)malloc(n*sizeof(int));
	printf("Enter the elements :");
	for(i=0;i<n;i++)
	scanf("%d",&temp[i]);
	while(type<1 || type>2)
	{
		printf("Enter 1 to sort in ascending order & 2 to sort in decending order :");
		scanf("%d",&type);
		if(type==1)
		{
			printf("Entered Array :\n");
			for(i=0;i<n;i++)
			printf("%d\t",temp[i]);
			MaxHeapify(temp,n);
			HeapSortAsc(temp,n);
		}
		else if(type==2)
		{
			printf("Entered Array :\n");
			for(i=0;i<n;i++)
			printf("%d\t",temp[i]);
			MinHeapify(temp,n);
			HeapSortDec(temp,n);
		}
		else
		printf("Wrong input try again\n");
	}
	printf("\nSorted Array :\n");
	for(i=0;i<n;i++)
	printf("%d\t",temp[i]);
}
