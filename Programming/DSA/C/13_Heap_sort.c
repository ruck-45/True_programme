# include<stdio.h>
# include<stdlib.h>
# include<conio.h>

void main()
{
	int i,size;
	int *arr;
	int cur,l_chld,r_chld,swap_ele;
	int temp;
	
	printf("Enter number of elements : ");
	scanf("%d",&size);
	
	arr = (int *)malloc(size*sizeof(int));
	
	printf("Enter elements : ");
	for(i = 0;i<size;i++)
		scanf("%d",&arr[i]);
		
	// Heapify
	
	i = size-1;
	while(i>=0)
	{
		cur = i;
		l_chld = cur*2+1;
		r_chld = cur*2+2;
		
		while(l_chld < size)
		{
			if(r_chld<size && arr[r_chld]>arr[l_chld])
				swap_ele = r_chld;
			else
				swap_ele = l_chld;
				
			if(arr[cur]<arr[swap_ele])
			{
				temp = arr[swap_ele];
				arr[swap_ele] = arr[cur];
				arr[cur] = temp;
				
				cur = swap_ele;
				l_chld = cur*2+1;
				r_chld = cur*2+2;
			}
			else
				break;
		}
		i--;
	}
	
	printf("\n");
	
	for(i=0;i<size;i++)
		printf("%d ,",arr[i]);
	
	// Sorting through deletion
	
	i = size-1;
	while(i>0)
	{
		temp = arr[0];
		arr[0] = arr[i];
		arr[i] = temp;
		i--;
		
		cur = 0;
		l_chld = cur*2+1;
		r_chld = cur*2+2;
		
		while(l_chld<i+1)
		{
			if(r_chld<i+1 && arr[r_chld]>arr[l_chld])
				swap_ele = r_chld;
			else
				swap_ele = l_chld;
				
			if(arr[swap_ele]>arr[cur])
			{
				temp = arr[cur];
				arr[cur] = arr[swap_ele];
				arr[swap_ele] = temp;
				
				cur = swap_ele;
				l_chld = cur*2+1;
				r_chld = cur*2+2;
			}
			else
				break;
		}
	}
	
	printf("\n");
	
	for(i=0;i<size;i++)
		printf("%d ,",arr[i]);
	
}
