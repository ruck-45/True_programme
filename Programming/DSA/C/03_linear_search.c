# include <stdlib.h>
# include <conio.h>
# include <stdio.h>

int l_search(int* arr, int size,int k)
{
	int i;
	for(i = 0;i<size;i++)
		if(arr[i]==k)
			return i;
	return -1;
}

void main()
{
	int size;
	int i;
	int element;
	int search;
	
	printf("Enter size of the array : ");
	scanf("%d",&size);
	
	int *arr =  (int *)malloc(sizeof(int)*size);
	
	printf("Enter all the array elements : ");
	for(i=0; i<size;i++)
		scanf("%d",&arr[i]);
	
	printf("Enter the search element : ");
	scanf("%d",&element);
	
	search = l_search(arr,size,element);
	
	if(search>=0)
		printf("Element Found at %d index : ",search);
	else
		printf("Element not found");
}
