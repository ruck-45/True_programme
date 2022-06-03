#include<stdio.h>
#include<stdlib.h>
void Bsearch(int num,int *p,int n)
{
	int min,max,mid,c=0;
	min=0;
	max=n-1;
	while(min<=max)
	{
		mid=(min+max)/2;
		if(num==p[mid])
		{
			c=-1;
			break;
		}
		else if(num>p[mid])
		min=mid+1;
		else
		max=mid-1;
	}
	if(c==-1)
	printf("Succeful");
	else
	printf("Unsuccesful");
}
void main()
{
	int n,i,*ptr,num;
	printf("No. of inputes :");
	scanf("%d",&n);
	ptr=(int*)malloc(n*sizeof(int));
	printf("\nEnter the elements : ");
	for(i=0;i<n;i++)
	scanf("%d",&ptr[i]);
	printf("\nEnter No. to be found :");
	scanf("%d",&num);
	Bsearch(num,ptr,n);
}
