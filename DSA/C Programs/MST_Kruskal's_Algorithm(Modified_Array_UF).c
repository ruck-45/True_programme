#include<stdio.h>
#include<stdlib.h>

int ch=-1,edge_number=0;

struct UnionFind
{
	int vertex;
	struct UnionFind *next;
};

struct edge
{
	int v1,v2,edge;
};

struct list
{
	int vertex,weight;
	struct list *next;
};

int **form_AM(int v)
{
	int i,j,temp,weight;
	
	int **AM = (int **)malloc(v*sizeof(int*));
	for(i=0;i<v;i++)
		AM[i] = (int *)malloc(v*sizeof(int));
		
	for(i=0;i<v;i++)
		for(j=0;j<v;j++)
			AM[i][j]=0;
	
	
	printf("\nEnter neighbour details :");
	
	for(i=0;i<v;i++)
	{
		printf("\n\nVertex %d", i+1);
		IN:
		printf("\nEnter Number of neighbours :");
		scanf("%d",&j);
		
		while(j<0)
		{
			printf("Wrong input, try again.");
			goto IN;
		}
		
		if(j==0)
		continue;
		
		printf("Enter the neighbours and their edge weights comma(,) separated :\n");
		for(;j>0;j--)
		{
			scanf("%d,%d",&temp,&weight);
			AM[i][temp-1]=weight;
			edge_number++;
		}
	}
	
	edge_number/=2;
	
	return AM;
}

struct list **form_AL(int v)
{
	int i,j,c,w;
	struct list **AL = (struct list **)malloc(v*sizeof(struct list *));
	struct list *cur,*temp,*head = NULL;
	
	printf("\nEnter neighbour details :");
	
	for(i=0;i<v;i++)
	{
		printf("\n\nVertex %d", i+1);
		
		IN:
		printf("\nEnter Number of neighbours :");
		scanf("%d",&j);
		
		while(j<0)
		{
			printf("Wrong input, try again.");
			goto IN;
		}
		
		if(j==0)
			goto DWN;
		
		printf("Enter the neighbours and their edge weights comma(,) separated :\n");
		for(;j>0;j--)
		{
			scanf("%d,%d",&c,&w);
			
			edge_number++;
			
			temp = (struct list *)malloc(sizeof(struct list));
			temp->vertex = c-1;
			temp->weight=w;
			temp->next = NULL;
			
			if(head==NULL)
				head = temp;
			else
			{
				cur = head;
				while(cur->next!=NULL)
					cur = cur->next;
				cur->next=temp;
			}
		}
		
		DWN:
		AL[i] = head;
		head = NULL;
	}
	
	edge_number/=2;
	
	return AL;
}

void OP_AM(int **M,int v)
{
	int i,j;
	
	printf("\n\nGraph Details :");
	
	for(i=0;i<v;i++)
	{
		printf("\n\nVertex %d neighbours:",i+1);
		for(j=0;j<v;j++)
			if(M[i][j]>0)
				printf("\n%d - edge weight = %d",j+1,M[i][j]);
	}
}

void OP_AL(struct list **L,int v)
{
	int i;
	struct list *temp;
	
	printf("\n\nGraph Details :");
	
	for(i=0;i<v;i++)
	{
		printf("\n\nVertex %d neighbours:",i+1);
		
		temp = L[i];
		while(temp != NULL)
		{
			printf("\n%d - edge weight = %d",temp->vertex+1,temp->weight);
			temp=temp->next;
		}
	}
}

int MIN(struct edge *arr, int a, int b)
{
	if(arr[a].edge<=arr[b].edge)
	return a;
	else
	return b;
}

void Min_Heapify(struct edge *arr, int n)
{
	int i=(n-2)/2,cur=0,lchld=0,rchld=0,min=0;
	struct edge *temp = (struct edge *)malloc(sizeof(struct edge));
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
			
			if(arr[cur].edge>arr[min].edge)
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

struct edge *Delete(struct edge *arr, int *n)
{
	int lchld,rchld,cur=0,min=0;
	struct edge *temp = (struct edge *)malloc(sizeof(struct edge));
	
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
		
		if(arr[cur].edge>arr[min].edge)
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

void Union(int a,int b,int *arr,int *size,struct UnionFind **UF)
{
	int x,y;
	struct UnionFind *temp;
	
	if(size[arr[a]]>size[arr[b]])
	{
		x=arr[a];
		y=arr[b];
	}
	else
	{
		x=arr[b];
		y=arr[a];
	}
	
	temp=UF[y];
	
	while(temp!=NULL)
	{
		arr[temp->vertex]=x;
		temp=temp->next;
	}
	
	temp=UF[x];
	
	while(temp->next!=NULL)
		temp=temp->next;
		
	temp->next=UF[y];
	UF[y]=NULL;
	
	size[x]+=size[y];
	size[y]=0;
}

void MST_Kruskal(int **M,struct list **L,int v)
{
	int i,j,k,Edge_No=edge_number,Total_Cost=0,*component,*size;
	struct edge *E,*c,*MST;
	struct list *temp;
	struct UnionFind **UF,*temp_UF;
	
	E = (struct edge *)malloc(Edge_No*sizeof(struct edge));
	MST = (struct edge *)malloc((v-1)*sizeof(struct edge));
	c = (struct edge *)malloc(sizeof(struct edge));
	UF = (struct UnionFind **)malloc(v*sizeof(struct UnionFind *));
	component = (int *)malloc(v*sizeof(int));
	size = (int *)malloc(v*sizeof(int));
	
	for(i=0;i<v;i++)
	{
		temp_UF = (struct UnionFind *)malloc(sizeof(struct UnionFind));
		
		temp_UF->vertex=i;
		temp_UF->next=NULL;
		UF[i]=temp_UF;
		
		component[i]=i;
		size[i]=1;
	}
	
	if(ch==0)
	{
		k=0;
		
		for(i=0;i<v;i++)
			for(j=i;j<v;j++)
				if(M[i][j]>0)
				{
					E[k].v1=i;
					E[k].v2=j;
					E[k].edge=M[i][j];
					
					k++;
				}
	}
	
	else
	{
		k=0;
		
		for(i=0;i<v;i++)
		{
			temp=L[i];
			
			while(temp!=NULL)
			{
				if(temp->vertex>i)
				{
					E[k].v1=i;
					E[k].v2=temp->vertex;
					E[k].edge=temp->weight;
					
					k++;
				}
				
				temp=temp->next;
			}
		}
	}
	
	Min_Heapify(E,v);	
	
	k=0;
	while(k<v-1)
	{
		c=Delete(E,&Edge_No);
		
		if(component[c->v1]!=component[c->v2])
		{
			MST[k]=*c;
			k++;
			
			Total_Cost+=c->edge;
			
			Union(c->v1,c->v2,component,size,UF);
		}
	}
	printf("\n\nThe Minimum Cost Spanning Tree (By Kruskal's Algorithm') is as follows :");
	printf("\nVertices : \t\tEdge Weights :");
	
	for(i=0;i<v-1;i++)
		printf("\n%d----%d\t\t\t%d",MST[i].v1+1,MST[i].v2+1,MST[i].edge);	
		
	printf("\n\nTOTAL COST = %d",Total_Cost);
}


void main()
{
	int v,choice;
	int **Matrix;
	struct list **List = NULL;
	
	printf("Enter number of vertices :");
	scanf("%d",&v);
	
	INPUT :
	printf("\nEnter 0 to store data in Adjency Matrix form.");
	printf("\nEnter 1 to store data in Adjency List form");
	printf("\nEnter Choice :");
	scanf("%d",&ch);
	
	while(ch<0||ch>1)
	{
		printf("Wrong Input, try again!");
		goto INPUT;
	}
	
	if(ch==0)
		Matrix = form_AM(v);
	else
		List = form_AL(v);
	
	UP :
	printf("\n\nEnter 0 Exit");
	printf("\nEnter 1 to Show graph data");
	printf("\nEnter 2 to Find Minimum cost spanning tree (Kruskal's Method')");
	printf("\nEnter Choice :");
	scanf("%d",&choice);
	
	switch(choice)
	{
		case 0 : 
			exit(0);
		case 1 :
			if(ch==0)
			{
				OP_AM(Matrix,v);
				goto UP;
			}
			else
			{
				OP_AL(List,v);
				goto UP; 
			}
		case 2 :
			MST_Kruskal(Matrix,List,v);
			goto UP;
		default :
			printf("Wrong choice , try again");
			goto UP;
	}
}
