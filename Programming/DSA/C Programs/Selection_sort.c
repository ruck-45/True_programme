#include<stdio.h>

void S_sort(int A[],int p,int r)
{
	int i,min;
	if(r-p>0)
	{
		min=p;
		for(i=p+1;i<=r;i++)
		{
			if(A[i]<A[min])
			{
				min=i;
			}
		}
		i=A[p];
		A[p]=A[min];
		A[min]=i;
		S_sort(A,p+1,r);
	}
}

void main()
{
	int a[30],i=0,n;
	printf("Enter Number Of Elements : ");
	scanf("%d",&n);
	printf("Enter The Elements : ");
	for(i=0;i<n;i++)
	{
		scanf("%d",&a[i]);
	}
	printf("Unsorted Array Entered :\n");
	for(i=0;i<n;i++)
	{
		printf("%d\t",a[i]);
	}
	S_sort(a,0,n-1);
	printf("\nSorted Array :\n");
	for(i=0;i<n;i++)
	{
		printf("%d\t",a[i]);
	}
}
