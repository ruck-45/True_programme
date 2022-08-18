#include<stdio.h>
#include<stdlib.h>

int ch=-1,edge_number=0;
long infinity=0;

struct Dist
{
	int v1,v2,dist;
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
			
			infinity+=weight;
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
			
			infinity+=w;
			
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

int MIN(struct Dist *arr, int a, int b)
{
	if(arr[a].dist<=arr[b].dist)
	return a;
	else
	return b;
}

void InsertMin(struct Dist *arr,int n)
{
	int cur=n,par=(n-1)/2;
	struct Dist *temp = (struct Dist *)malloc(sizeof(struct Dist));
	
	while(par>=0)
	{
		if(arr[cur].dist<arr[par].dist)
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
}

struct Dist *Delete(struct Dist *arr, int *n)
{
	int lchld,rchld,cur=0,min=0;
	struct Dist *temp = (struct Dist *)malloc(sizeof(struct Dist));
	
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
		
		if(arr[cur].dist>arr[min].dist)
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

void Dijkstra(int **M,struct list **L,int v,int s)
{
	int i,j,k,e,*par,*path;
	long *distance;
	struct Dist *E,*c;
	struct list *temp;
	
	E = (struct Dist *)malloc(edge_number*sizeof(struct Dist));
	c = (struct Dist *)malloc(sizeof(struct Dist));
	distance = (long *)malloc(v*sizeof(long));
	par = (int *)malloc(v*sizeof(int));
	path = (int *)malloc(v*sizeof(int));
	
	for(i=0;i<v;i++)
	{
		distance[i]=infinity+1;
		par[i]=-1;
	}
		
	distance[s]=0;
	k=0;
	e=0;
	i=s;
	
	while(k<v)
	{
		if(ch==0)
		{
			for(j=0;j<v;j++)
				if(M[i][j]>0)
					if(distance[j]>distance[i]+M[i][j])
					{
						distance[j] = distance[i]+M[i][j];
						par[j]=i;
						
						E[e].v1=i;
						E[e].v2=j;
						E[e].dist=distance[j];
						
						InsertMin(E,e);
						e++;
					}
		}
		
		else
		{
			temp=L[i];
			
			while(temp!=NULL)
			{
				if(distance[temp->vertex]>distance[i]+temp->weight)
				{
					distance[temp->vertex]=distance[i]+temp->weight;
					par[temp->vertex]=i;
					
					E[e].v1=i;
					E[e].v2=temp->vertex;
					E[e].dist=distance[temp->vertex];
					
					InsertMin(E,e);
					e++;
				}
				
				temp=temp->next;
			}
		}
		
		c=Delete(E,&e);
		i=c->v2;
		
		k++;
	}
	
	printf("\n\n||Computation Complete||\n\n");
	
	for(k=0;k<v;k++)
	{
		if(k==s)
			continue;
		
		path[0]=k;
		j=1;
		i=par[k];
		
		while(i>=0)
		{
			path[j]=i;
			i=par[i];
			j++;
		}
		
		j--;
		
		printf("\n%d--->%d\n",s+1,k+1);
		if(path[j]!=s)
			printf("Sorry No path found.\n");
		else
		{
			printf("Path : ");
			for(;j>=0;j--)
				printf("%d  ",path[j]+1);
			printf("\nDistance : %d\n",distance[k]);
		}
	}
}

void main()
{
	int v,choice,s;
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
	printf("\nEnter 2 to Find Single Source Sortest Path (Dijkstra's Agorithm)");
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
			printf("\nEnter Source Vertex :");
			scanf("%d",&s);
			
			Dijkstra(Matrix,List,v,s-1);
			goto UP;
		default :
			printf("Wrong choice , try again");
			goto UP;
	}
}
