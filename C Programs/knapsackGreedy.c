#include<stdio.h>
#include<stdlib.h>

struct obj
{
	int sl;
	float weight,profit,pwratio;
};

void Q_sort(struct obj *A,int p,int r)
{
	int l=p+1,s=p;
	float temp=0;
	if(r-p>0)
	{
		for(;l<=r;l++)
		{
			if(A[l].pwratio>A[p].pwratio)
			{
				if(l-s>1)
				{
					temp=A[l].pwratio;
					A[l].pwratio=A[s+1].pwratio;
					A[s+1].pwratio=temp;
					
					temp=A[l].profit;
					A[l].profit=A[s+1].profit;
					A[s+1].profit=temp;
					
					temp=A[l].weight;
					A[l].weight=A[s+1].weight;
					A[s+1].weight=temp;
					
					temp=A[l].sl;
					A[l].sl=A[s+1].sl;
					A[s+1].sl=temp;
				}
				s++;
			}
		}
		temp=A[p].pwratio;
		A[p].pwratio=A[s].pwratio;
		A[s].pwratio=temp;
		
		temp=A[p].profit;
		A[p].profit=A[s].profit;
		A[s].profit=temp;
		
		temp=A[p].weight;
		A[p].weight=A[s].weight;
		A[s].weight=temp;
		
		temp=A[p].sl;
		A[p].sl=A[s].sl;
		A[s].sl=temp;
		
		Q_sort(A,p,s-1);
		Q_sort(A,s+1,l-1);
	}
}

void Knapsack(struct obj *O,int o,float m)
{
	int i,c=0;
	float M=m,P=0;
	Q_sort(O,0,o-1);
	
	printf("\nThe Knapsack includes object(s):\n");
	for(i=0;i<o;i++)
	{
		if(M<=0)
		break;
		if(O[i].weight<=M)
		{
			M-=O[i].weight;
			P+=O[i].profit;
			printf("Object : %d\n Weight : %f\tProfit : %f\n\n",O[i].sl,O[i].weight,O[i].profit);
			c=1;
		}
		else
		{
			P+=M*O[i].pwratio;
			printf("Object : %d\n Weight : %f\tProfit : %f\n\n",O[i].sl,M,M*O[i].pwratio);
			c=1;
			M=0;
		}
	}
	if(c==0)
	printf("NONE");
	printf("Total Profit : %f\n",P);
	printf("Space remining in Knapsack : %f",M);
	
}

void main()
{
	int o,i;
	float M;
	struct obj *Object;
	printf("Enter the capacity of knapsack :");
	scanf("%f",&M);
	printf("Enter number of object(s) :");
	scanf("%d",&o);
	Object = (struct obj *)malloc(o*sizeof(struct obj));
	printf("\nEnter the details of object(s) :");
	for(i=0;i<o;i++)
	{
		printf("\n\nObject %d -",i+1);
		printf("\nWeight :");
		scanf("%f",&Object[i].weight);
		printf("Profit :");
		scanf("%f",&Object[i].profit);
		Object[i].pwratio=Object[i].profit/Object[i].weight;
		Object[i].sl=i+1;
	}
	
	Knapsack(Object,o,M);
}
