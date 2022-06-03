#include<stdio.h>

void I_sort(int A[],int N)
{
	int i,j,k,temp=0;
	for(i=1;i<N;i++)
	{
		k=i;
		for(j=i-1;j>=0;j--)
		{
			if(A[k]<A[j])
			{
				temp=A[k];
				A[k]=A[j];
				A[j]=temp;
				k=j;
			}
			else
			{
				break;
			}
		}
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
	I_sort(a,n);
	printf("\nSorted Array :\n");
	for(i=0;i<n;i++)
	{
		printf("%d\t",a[i]);
	}
}
