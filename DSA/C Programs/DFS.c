#include<stdio.h>
#include<stdlib.h>

int ch=-1;

struct list
{
	int vertex;
	struct list *next;
};

int **form_AM(int v)
{
	int i,j,temp;
	
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
		
		printf("Enter the neighbours :\n");
		for(;j>0;j--)
		{
			scanf("%d",&temp);
			AM[i][temp-1]=1;
		}
	}
	
	return AM;
}

struct list **form_AL(int v)
{
	int i,j,c;
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
		
		printf("Enter the neighbours :\n");
		for(;j>0;j--)
		{
			scanf("%d",&c);
			
			temp = (struct list *)malloc(sizeof(struct list));
			temp->vertex = c-1;
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
			if(M[i][j]==1)
				printf("\n%d",j+1);
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
			printf("\n%d",temp->vertex+1);
			temp=temp->next;
		}
	}
}

int DFS(int **M,struct list **L,int v,int a,int b,int *vis,int *par)
{
	int i;
	struct list *c;
	
	vis[a]=1;
	
	if(a==b)
		return 1;
	
	if(ch==0)
	{
		for(i=0;i<v;i++)
			if(M[a][i]==1 && vis[i]==0)
			{
				par[i]=a;
				if(DFS(M,L,v,i,b,vis,par))
					return 1;
			}
		return 0;
	}
	else
	{
		c=L[a];
		while(c!=NULL)
		{
			if(vis[c->vertex]==0)
			{
				par[c->vertex]=a;
				if(DFS(M,L,v,c->vertex,b,vis,par))
					return 1;
			}
			c=c->next;
		}
		return 0;
	}
}

void main()
{
	int v,choice,s,d,i,j;
	int **Matrix,*vis,*par,*path;
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
	printf("\nEnter 2 to Perform Depth First Search(DFS)");
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
			printf("Enter source vertex :");
			scanf("%d",&s);
			printf("Enter destination vertex :");
			scanf("%d",&d);
			
			vis = (int *)malloc(v*sizeof(int));
			par = (int *)malloc(v*sizeof(int));
			
			for(i=0;i<v;i++)
			{
				vis[i]=0;
				par[i]=-1;	
			}
			
			DFS(Matrix,List,v,s-1,d-1,vis,par);
			
			if(vis[d-1]==1)
			{
				printf("\nCongratulations, Path found!");
				printf("\nPath :");
				
				path = (int *)malloc(v*sizeof(int));
				
				i=d-1;
				j=1;
				path[0]=i+1;
				
				while(par[i]>=0)
				{
					path[j]=par[i]+1;
					j++;
					i=par[i];
				}
				
				for(i=j-1;i>=0;i--)
					printf("\t%d",path[i]);
			}
			else
				printf("\nSorry, Path not found.");
			
			goto UP;
		default :
			printf("Wrong choice , try again");
			goto UP;
	}
}
