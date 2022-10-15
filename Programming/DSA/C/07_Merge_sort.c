# include <stdio.h>
# include <stdlib.h>
# include <conio.h>

void Merge(int A[],int B[], int start,int mid,int end)
{
	int rear = start;
	int front = mid+1;
	int k = start;
	int i;
	
	for(i=start;i<=end;i++)
		B[i] = A[i];
	
	while(rear<=mid && front<= end)
	{
		if (B[rear] <= B[front])
			A[k++] = B[rear++];
		else
			A[k++] = B[front++];
	}
	
	while(rear<=mid)
		A[k++] = B[rear++];
	while(front<= end)
		A[k++] = B[front++];
}

void M_sort(int A[], int B[], int start, int end)
{
	int mid = (start+end)/2;
	
	if (end!= mid)
	{
		M_sort(A,B,start,mid);
		M_sort(A,B,mid+1,end);
		
		Merge(A,B,start,mid,end);
	}
}

void main()
{
	int i;
	
	int A[11] = {1,5,9,65,3,2,45,78,123,52,0};
	int C[11] = {5,-8,45,-89,8,-9,0,45,12,-32,0};
	int B[11];
	
	printf("Original array : ");
	for(i=0;i<11;i++)
		printf("%d  ",C[i]);
		
	M_sort(C,B,0,10);
			
	printf("\nSorted array : ");
	for(i=0;i<11;i++)
		printf("%d  ",C[i]);
}
