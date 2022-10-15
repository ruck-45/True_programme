# include <stdio.h>
# include <stdlib.h>
# include <conio.h>

void I_sort(int arr[], int size, int start)
{
	int i=start;
	int temp;

	if(start<size)
	{		
		while(i>0 && arr[i]<arr[i-1])
		{
			temp = arr[i];
			arr[i] = arr[i-1];
			arr[i-1] = temp;
			i--;
		}
		
		I_sort(arr,size,start+1);
	}
}

void main()
{
	int i;
	int array[11] = {1,5,9,65,3,2,45,78,123,52,0};
	
	printf("Original array : ");
	for(i=0;i<11;i++)
		printf("%d  ",array[i]);
		
	I_sort(array,11,1);
			
	printf("\nSorted array : ");
	for(i=0;i<11;i++)
		printf("%d  ",array[i]);	
}
