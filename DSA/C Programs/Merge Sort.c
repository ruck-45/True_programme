#include<stdio.h>
#include<stdlib.h>

void Merge(int *A,int p,int mid,int q)
{
	int i=p,j=mid+1,k=0;
	int *temp=(int *)malloc((q-p+1)*sizeof(int));
	
	while(i<=mid && j<=q)
	{
		if(A[i]<=A[j])
		{
			temp[k]=A[i];
			i++;
			k++;
		}
		else
		{
			temp[k]=A[j];
			j++;
			k++;
		}
	}
	
	while(i<=mid)
	{
		temp[k]=A[i];
		i++;
		k++;
	}
	
	while(j<=q)
	{
		temp[k]=A[j];
		j++;
		k++;
	}
	
	k=0;
	for(i=p;i<=q;i++)
	{
		A[i]=temp[k];
		k++;
	}
	
}

void M_sort(int *A, int p,int q)
{
	int mid=(p+q)/2;
	if((q-p)>0)
	{
		M_sort(A,p,mid);
		M_sort(A,mid+1,q);
		Merge(A,p,mid,q);
	}
}

void main()
{
	int i,n,*arr;
	
	printf("Enter number of elemrnts :");
	scanf("%d",&n);
	
	arr=(int *)malloc(n*sizeof(int));
	
	printf("Enter Elements :");
	for(i=0;i<n;i++)
	scanf("%d",&arr[i]);
	
	printf("Unsorted array :\n");
	for(i=0;i<n;i++)
	printf("%d\t",arr[i]);
	
	M_sort(arr,0,n-1);
	
	printf("\nSorted array :\n");
	for(i=0;i<n;i++)
	printf("%d\t",arr[i]);
}
