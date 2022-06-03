#include<stdio.h>
#include<stdlib.h>
void Lsearch(int num,int *p,int n)
{
	int i;
	for(i=0;i<n;i++)
	if(*(p+i)==num)
	break;
	if(i<n)
	printf("Search successful");
	else
	printf("Search unsuccessful");
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
	Lsearch(num,ptr,n);
}
