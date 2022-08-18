# include<stdio.h>
# include<stdlib.h>
# include<conio.h>

void heapify(int *arr,int size)
{
	int i = size-1;
	int cur,l_chld,r_chld,swap_ele,temp;
	
	while(i>=0)
	{
		cur = i;
		l_chld = cur*2+1;
		r_chld = cur*2+2;
		
		while(l_chld<size)
		{
			if(r_chld<size && arr[r_chld]>arr[l_chld])
				swap_ele = r_chld;
			else
				swap_ele = l_chld;
				
			if(arr[swap_ele]>arr[cur])
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
}

void main()
{
	int size,i;
	int *arr;
	
	printf("Enter number of elements in the heap : ");
	scanf("%d",&size);
	
	arr = (int *)malloc(size*sizeof(int));
	
	printf("Enter Elements : ");
	for(i=0;i<size;i++)
		scanf("%d",&arr[i]);
		
	heapify(arr,size);
	
	for(i = 0;i<size;i++)
		printf("%d ,",arr[i]);
}
