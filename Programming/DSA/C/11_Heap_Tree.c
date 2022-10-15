# include<stdio.h>
# include<stdlib.h>
# include<conio.h>

void display_arr(int *arr,int size)
{
	int i;
	
	printf("\n");
	for(i=0;i<size;i++)
		printf("%d ",arr[i]);
}

void build_heap(int *arr,int i) // max heap
{
	int par = (i-1)/2;
	int temp;
	
	while(par>=0)
	{
		if(arr[par]<arr[i])
		{
			temp = arr[par];
			arr[par] = arr[i];
			arr[i] = temp;
			
			i = par;
			par = (i-1)/2;
		}
		else
			break;
	}
}

int heap_deletion(int *arr,int size,int is_root)
{
	int temp,cur,l_chld,r_chld,swap_ele;
	
	temp = arr[size-1];
	size = size-1;
	
	if(is_root == 1)
	{
		arr[0] = temp;
		
		cur = 0;
		l_chld = cur*2+1;
		r_chld = cur*2+2;
		
		while(l_chld<size)
		{
			swap_ele = l_chld;
			if(r_chld<size && arr[r_chld]>arr[l_chld])
				swap_ele = r_chld;
				
			if(arr[cur]<arr[swap_ele])
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
	
	return size;	
}


void main()
{
	int size,i,*arr,choice = 1,is_root;
	
	printf("Enter number of elements in the heap : ");
	scanf("%d",&size);
	
	arr = (int *)malloc(size*sizeof(int));
	
	printf("\nEnter Elements :");
	for(i=0;i<size;i++)
	{
		scanf("%d",&arr[i]);
		build_heap(arr,i);	
	}
	
	display_arr(arr,size);
		
	while(choice!=0)
	{
		printf("\nEnter 1 ----> delete , 0 ----> exit : ");
		scanf("%d",&choice);
		
		if(choice == 1)
		{
			printf("Enter 1 ----> delete root , 0 ----> delete leftmost leaf : ");
			scanf("%d",&is_root);
			size = heap_deletion(arr,size,is_root);
			display_arr(arr,size);
		}
		else if(choice != 0)
			printf("\n\nWrong_Input\n");
		else
			break;
	}
}
