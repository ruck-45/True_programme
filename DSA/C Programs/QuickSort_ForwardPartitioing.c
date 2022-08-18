#include<stdio.h>
#include<stdlib.h>

void Q_sort(int A[],int p,int r)
{
	int l=p+1,s=p,temp=0;
	if(r-p>0)
	{
		for(;l<=r;l++)
		{
			if(A[l]<A[p])
			{
				if(l-s>1)
				{
					temp=A[l];
					A[l]=A[s+1];
					A[s+1]=temp;
				}
				s++;
			}
		}
		temp=A[p];
		A[p]=A[s];
		A[s]=temp;
		Q_sort(A,p,s-1);
		Q_sort(A,s+1,l-1);
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
	Q_sort(a,0,n-1);
	printf("\nSorted Array :\n");
	for(i=0;i<n;i++)
	{
		printf("%d\t",a[i]);
	}
}
