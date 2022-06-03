#include<stdio.h>
#include<stdlib.h>

void Q_sort(int A[],int p,int r)
{
	int l=r,s=p+1,temp=0;
	if(r-p>0)
	{
		while(1)
		{
			while(A[s]<A[p])
			s++;
			while(A[l]>A[p])
			l--;
			if(l>s)
			{
				temp=A[l];
				A[l]=A[s];
				A[s]=temp;
			}
			else
			{
				break;
			}
		}
		temp=A[p];
		A[p]=A[l];
		A[l]=temp;
		Q_sort(A,p,l-1);
		Q_sort(A,l+1,r);
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
