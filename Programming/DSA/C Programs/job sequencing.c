#include<stdio.h>
#include<stdlib.h>

struct job
{
	int pos,profit,deadline;
};

int MAX(struct job *arr, int a, int b)
{
	if(arr[a].profit>=arr[b].profit)
	return a;
	else
	return b;
}

void Heapify(struct job *arr, int n)
{
	int i=(n-2)/2,cur=0,lchld=0,rchld=0,max=0;
	struct job *temp = (struct job *)malloc(sizeof(struct job));
	while(i>=0)
	{
		cur=i;
		while(1)
		{
			lchld=2*cur+1;
			rchld=2*cur+2;
			
			if(lchld>=n)
			break;
			else if(rchld>=n)
			max=lchld;
			else
			max=MAX(arr,lchld,rchld);
			
			if(arr[cur].profit<arr[max].profit)
			{
				*temp=arr[cur];
				arr[cur]=arr[max];
				arr[max]=*temp;
			}
			else
			break;
			
			cur=max;
		}
		
		i--;
	}
	free(temp);
}

struct job *Delete(struct job *arr, int *n)
{
	int lchld,rchld,cur=0,max=0;
	struct job *temp = (struct job *)malloc(sizeof(struct job));
	
	*temp=arr[0];
	arr[0]=arr[*n-1];
	arr[*n-1]=*temp;
	
	while(cur<*n-1)
	{
		lchld=2*cur+1;
		rchld=2*cur+2;
		
		if(lchld>*n-2)
		break;
		else if(rchld>*n-2)
		max=lchld;
		else
		max=MAX(arr,lchld,rchld);
		
		if(arr[cur].profit<arr[max].profit)
		{
			*temp=arr[cur];
			arr[cur]=arr[max];
			arr[max]=*temp;
			
			cur=max;
		}
		else
		break;
	}
	
	*temp=arr[*n-1];
	*n=*n-1;
	
	return temp;
}

void jobsequencing(struct job *j,int n,int maxdeadline)
{
	int i,k=0,num=n,Totalprofit=0;
	struct job *s,*d;
	
	Heapify(j,num);
	
	s = (struct job *)malloc(maxdeadline*sizeof(struct job));
	d = (struct job *)malloc(sizeof(struct job));
	
	for(i=0;i<maxdeadline;i++)
	s[i].pos=-1;
	
	i=maxdeadline;
	while(i>0)
	{
		d=Delete(j,&num);
		k=d->deadline-1;
		while(k>=0)
		{
			if(s[k].pos==-1)
			{
				s[k]=*d;
				i--;
				break;
			}
			k--;
		}
	}
	
	printf("\nSheduled job order :\n");
	for(i=0;i<maxdeadline;i++)
	{
		printf("Job-%d , Profit-%d\n",s[i].pos,s[i].profit);
		Totalprofit+=s[i].profit;
	}
	
	printf("\nTotal profit = %d",Totalprofit);
}

void main()
{
	int n,i,maxdeadline=0;
	struct job *j;
	
	printf("Enter number of jobs :");
	scanf("%d",&n);
	
	j = (struct job *)malloc(n*sizeof(struct job));
	
	printf("\nEnter job details :");
	
	for(i=0;i<n;i++)
	{
		printf("\n\nJob %d -",i+1);
		printf("\nProfit :");
		scanf("%d",&j[i].profit);
		printf("Deadline :");
		scanf("%d",&j[i].deadline);
		j[i].pos=i+1;
		
		if(j[i].deadline>maxdeadline)
		maxdeadline=j[i].deadline;
	}
	
	jobsequencing(j,n,maxdeadline);
}
