#include<stdio.h>
#include<stdlib.h>

struct merge
{
	int pos,files;
	struct merge *l,*r;
};

int MIN(struct merge *arr, int a, int b)
{
	if(arr[a].files<=arr[b].files)
	return a;
	else
	return b;
}

void Heapify(struct merge *arr, int n)
{
	int i=(n-2)/2,cur=0,lchld=0,rchld=0,min=0;
	struct merge *temp = (struct merge *)malloc(sizeof(struct merge));
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
			min=lchld;
			else
			min=MIN(arr,lchld,rchld);
			
			if(arr[cur].files>arr[min].files)
			{
				*temp=arr[cur];
				arr[cur]=arr[min];
				arr[min]=*temp;
			}
			else
			break;
			
			cur=min;
		}
		
		i--;
	}
	free(temp);
}

struct merge *Delete(struct merge *arr, int *n)
{
	int lchld,rchld,cur=0,min=0;
	struct merge *temp = (struct merge *)malloc(sizeof(struct merge));
	
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
		min=lchld;
		else
		min=MIN(arr,lchld,rchld);
		
		if(arr[cur].files>arr[min].files)
		{
			*temp=arr[cur];
			arr[cur]=arr[min];
			arr[min]=*temp;
			
			cur=min;
		}
		else
		break;
	}
	
	*temp=arr[*n-1];
	*n=*n-1;
	
	return temp;
}

void Insert(struct merge *arr,int n)
{
	int cur=n,par=(n-1)/2;
	struct merge *temp = (struct merge *)malloc(sizeof(struct merge));
	
	while(par>=0)
	{
		if(arr[cur].files<arr[par].files)
		{
			*temp=arr[cur];
			arr[cur]=arr[par];
			arr[par]=*temp;
			
			cur=par;
			par=(cur-1)/2;
		}
		else
		break;
	}
	free(temp);
}

void Preorder(struct merge *R)
{
	if(R!=NULL)
	{
		printf("Folder_%d(%d)\n",R->pos,R->files);
		Preorder(R->l);
		Preorder(R->r);
	}
}

void Merge(struct merge *t,int n)
{
	int num=n;
	struct merge *left,*right,*root,*out;
	
	left = (struct merge *)malloc(sizeof(struct merge));
	right = (struct merge *)malloc(sizeof(struct merge));
	root = (struct merge *)malloc(sizeof(struct merge));
	
	Heapify(t,num);
	
	while(num>1)
	{
		left=Delete(t,&num);
		right=Delete(t,&num);
		
		root->files=left->files+right->files;
		root->pos=-1;
		root->l=left;
		root->r=right;
		
		t[num]=*root;
		Insert(t,num);
		num++;
	}
	
	printf("\nMerge Pattern :\n");
	out=&t[0];
	Preorder(out);
}

void main()
{
	int i,num;
	struct merge *T;
	
	printf("Enter number of folders :");
	scanf("%d",&num);
	
	T=(struct merge *)malloc(num*sizeof(struct merge));
	
	printf("Enter number of files for each folders :");
	for(i=0;i<num;i++)
	{
		printf("\nFolder %d :",i+1);
		scanf("%d",&T[i].files);
		T[i].pos=i+1;
		T[i].l=NULL;
		T[i].r=NULL;
	}
	
	Merge(T,num);
}
