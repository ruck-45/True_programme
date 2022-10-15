# include <stdio.h>
# include <stdlib.h>
# include <conio.h>

void S_sort(int arr[], int size, int start)
{
	int i;
	int minimum = start;
	int temp;
		
	if (start<size-1)
	{	
		for(i = start+1; i<size; i++)
			if(arr[i]<arr[minimum])
				minimum =i;
		
		temp = arr[start];
		arr[start] = arr[minimum];
		arr[minimum]= temp;
		S_sort(arr,size,start+1);
	}

}

void main()
{
	int i;
	int array[11] = {1,5,9,65,3,2,45,78,123,52,0};
	
	printf("Original array : ");
	for(i=0;i<11;i++)
		printf("%d  ",array[i]);
		
		S_sort(array,11,0);
			
	printf("\nSorted array : ");
	for(i=0;i<11;i++)
		printf("%d  ",array[i]);
		
	
}
