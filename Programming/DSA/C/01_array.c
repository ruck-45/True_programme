# include <stdio.h>
# include <conio.h>
# include <stdlib.h>

void main()
{
	int size;
	int input = -1;
	int i;
	int pos;
	int element;
	int pos2;
	
	printf("\nEnter size of array : ");
	scanf("%d",&size);
	
	int *arr = (int*)malloc(sizeof(int)*size);
	int rear = 0;
	
	while(input!=0)
	{
		printf("\n\nEnter 0 to exit");
		printf("\nEnter 1 to push an element");
		printf("\nEnter 2 to pop an element");
		printf("\nEnter 3 to insert an element at desired position");
		printf("\nEnter 4 to delete an element at desired position");
		printf("\nEnter 5 to swap elements");
		printf("\nEnter 6 to show the array");
		
		printf("\n\nEnter Your Choice : ");
		scanf("%d", &input);
		
		switch(input)
		{
			case 0: // Exit
				printf("Exit Successful");
				break;
			case 1: // Push
				if(rear>size-1)
					printf("\nArray Overflow");
				else
				{
					printf("\nEnter number to be inserted : ");
					scanf("%d",&arr[rear]);
					rear++;
				}
				break;
			case 2: // Pop
				if(rear==0)
					printf("\nArray Underflow");
				else
				{
					printf("\nValue popped is : %d",arr[rear-1]);
					rear--;
				}
				break;
			case 3 : // Insert in pos
				printf("\nEnter the number and its position to be inserted : ");
				scanf("%d%d",&element,&pos);
				
				if (rear>size-1)
					printf("\nArray Overflow");
				else if(rear<pos-1)
					printf("\nArray Underflow");
				else if(rear == pos-1)
					arr[rear++] = element;
				else
				{
					printf("%d rear",rear);
					printf("%d pos",pos-1);
					for(i = rear; i>pos-1;i--)
						arr[i] = arr[i-1];
					arr[pos-1]=element;
					rear++;
				}
				break;
			case 4: // Delete in pos
				printf("\nEnter the position to be deleted : ");
				scanf("%d",&pos);
				
				if(rear<=pos-1)
					printf("\nArray Underflow");
				else
				{
					printf("\nElement deleted : %d", arr[pos-1]);
					for(i = pos-1;i<rear;i++)
						arr[i] = arr[i+1];
					rear--;
				}
				break;
			case 5: // swap elements
				printf("Enter positions of elements to be swapped : ");
				scanf("%d%d",&pos,&pos2);
				
				if(pos2>=rear || pos2 < 0 || pos < 0|| pos >=rear)
					printf("Invalid Positions");
				else
				{
					element = arr[pos-1];
					arr[pos-1] = arr[pos2-1];
					arr[pos2-1] = element;	
				}
				break;
			case 6: // print
				if(rear == 0)
					printf("Array Empty");
				else
					for(i=0;i<rear;i++)
						printf("%d\t",arr[i]);
				break;
			default :
				printf("\nWrong Input");
		}
	}
}
