#include<stdio.h>
#include<stdlib.h>

struct huff
{
	char c[2];
	int freq;
	struct huff *l,*r;
};

int MIN(struct huff *arr, int a, int b)
{
	if(arr[a].freq<=arr[b].freq)
	return a;
	else
	return b;
}

void Heapify(struct huff *arr, int n)
{
	int i=(n-2)/2,cur=0,lchld=0,rchld=0,min=0;
	struct huff *temp = (struct huff *)malloc(sizeof(struct huff));
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
			
			if(arr[cur].freq>arr[min].freq)
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

struct huff *Delete(struct huff *arr, int *n)
{
	int lchld,rchld,cur=0,min=0;
	struct huff *temp = (struct huff *)malloc(sizeof(struct huff));
	
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
		
		if(arr[cur].freq>arr[min].freq)
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

void Insert(struct huff *arr,int n)
{
	int cur=n,par=(n-1)/2;
	struct huff *temp = (struct huff *)malloc(sizeof(struct huff));
	
	while(par>=0)
	{
		if(arr[cur].freq<arr[par].freq)
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

void Preorder(struct huff *R,int code,int size)
{
	int cd=code,sz=size+1,i=1;
	char *str;
	
	if(R!=NULL)
	{
		if(R->c[0]!='\0')
		{
			str = (char *)malloc((sz)*sizeof(char));
			sprintf(str,"%d",cd);
			
			printf("\n%s - ",R->c);
			while(str[i]!='\0')
			{
				printf("%c",str[i]);
				i++;
			}
		}
		cd=code*10+0;
		Preorder(R->l,cd,sz);
		cd=code*10+1;
		Preorder(R->r,cd,sz);
	}
}

void HuffmanCodes(struct huff *t,int n)
{
	int num=n;
	struct huff *left,*right,*root,*out;
	
	left = (struct huff *)malloc(sizeof(struct huff));
	right = (struct huff *)malloc(sizeof(struct huff));
	root = (struct huff *)malloc(sizeof(struct huff));
	
	Heapify(t,num);
	
	while(num>1)
	{
		left=Delete(t,&num);
		right=Delete(t,&num);
		
		root->freq=left->freq+right->freq;
		root->c[0]='\0';
		root->c[1]='\0';
		root->l=left;
		root->r=right;
		
		t[num]=*root;
		Insert(t,num);
		num++;
	}
	
	printf("\n Huffman Codes :\n");
	out=&t[0];
	Preorder(out,1,1);
}

void main()
{
	int i,num;
	struct huff *T;
	
	printf("Enter number of distinct charecters in the message :");
	scanf("%d",&num);
	
	T=(struct huff *)malloc(num*sizeof(struct huff));
	
	printf("Enter charecters and their frequencies :");
	for(i=0;i<num;i++)
	{
		printf("\nCharecter :");
		scanf("%s",T[i].c);
		printf("Frequency :");
		scanf("%d",&T[i].freq);
		T[i].l=NULL;
		T[i].r=NULL;
	}
	
	HuffmanCodes(T,num);
}
