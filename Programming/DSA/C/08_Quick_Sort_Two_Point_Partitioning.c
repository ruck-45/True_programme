# include <stdio.h>
# include <stdlib.h>
# include <conio.h>

void swap_elements(int A[],int p, int q)
{
	int temp;
	
	temp = A[p];
	A[p] = A[q];
	A[q] = temp;
}

void Q_sort(int A[], int start, int end)
{
	if(start<end)
	{
		int pivot = start;
		int p = start+1;
		int q = end;
		
		while(p<=q)
		if(A[p]<=A[pivot])
			p++;
		else if (A[q]>A[pivot])
			q--;
		else
			swap_elements(A,p++,q--);
	
		swap_elements(A,pivot,q);
		Q_sort(A,start,q-1);
		Q_sort(A,q+1,end);
	}
}

void main()
{
	int i;
	
	int A[11] = {5,-8,45,-89,8,-9,0,45,12,-32,0};
		
	printf("Original array : ");
	for(i=0;i<11;i++)
		printf("%d  ",A[i]);
		
	Q_sort(A,0,10);
			
	printf("\nSorted array : ");
	for(i=0;i<11;i++)
		printf("%d  ",A[i]);
}
