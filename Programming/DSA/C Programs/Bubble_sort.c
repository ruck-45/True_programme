#include<stdio.h>

void B_sort(int A[],int p,int r)
{
	int i,temp=0;
	if(r-p>0)
	{
		for(i=p+1;i<=r;i++)
		{
			if(A[i]<A[i-1])
			{
				temp=A[i];
				A[i]=A[i-1];
				A[i-1]=temp;
			}
		}
		B_sort(A,p,r-1);
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
	B_sort(a,0,n-1);
	printf("\nSorted Array :\n");
	for(i=0;i<n;i++)
	{
		printf("%d\t",a[i]);
	}
}
