# include <stdlib.h>
# include <conio.h>
# include <stdio.h>

int b_search(int* arr, int min,int max, int k)
{
	int mid = (min+max)/2;
	int res = 0;
	
	if(min<=max)
	{
		if(arr[mid] == k)
			res = k;
		else if(arr[mid]<k)
			res = b_search(arr,mid+1,max,k);
		else
			res = b_search(arr,min,mid-1,k);
	}
	
	else
		res = -1;
	
	return(res);
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
	
	printf("Enter all the array elements in increasing order : ");
	for(i=0; i<size;i++)
		scanf("%d",&arr[i]);
	
	printf("Enter the search element : ");
	scanf("%d",&element);
	
	search = b_search(arr,0,size-1,element);
	
	if(search>=0)
		printf("Element Found at index : %d",search);
	else
		printf("Element not found");
}
