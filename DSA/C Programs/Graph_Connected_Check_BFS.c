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
			AM[temp-1][i]=1;
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

void BFS(int **M,struct list **L,int v,int a,int *vis,int *par,int count)
{
	int i,j,*Q,front=0,rear=0;
	struct list *temp;
	
	Q = (int*)malloc(v*sizeof(int));
	
	for(i=0;i<v;i++)
	Q[i] = -1;
	
	Q[front]=a;
	front++;
	vis[a]=1;
	par[a]=count;
	
	if(ch==0)
	{
		while(Q[rear]>=0)
		{
			i=Q[rear];
			rear++;
		
			for(j=0;j<v;j++)
			{
				if(M[i][j]==1 && vis[j]==0)
				{
					Q[front]=j;
					front++;
					vis[j]=1;
					par[j]=count;
				}
			}
		}
	}
	
	else
	{
		while(Q[rear]>=0)
		{
			i=Q[rear];
			rear++;
			
			temp=L[i];
			
			while(temp!=NULL)
			{
				j = temp->vertex;
				if(vis[j]==0)
				{
					Q[front]=j;
					front++;
					vis[j]=1;
					par[j]=count;
				}
				
				temp=temp->next;
			}
		}
	}
}

void Check_Connection(int **M,struct list **L,int v)
{
	int *vis,*par,i,c=0,j;
	
	vis = (int*)malloc(v*sizeof(int));
	par = (int*)malloc(v*sizeof(int));
	
	for(i=0;i<v;i++)
	vis[i] = 0;
	
	for(i=0;i<v;i++)
		if(vis[i]==0)
			BFS(M,L,v,i,vis,par,++c);
			
	if(c==1)
	printf("\nGraph is Connected");
	
	else
	{
		printf("\nGraph is Segmented. Segments are :");
		for(i=0;i<c;i++)
		{
			printf("\n\nSegment: %d\n",i+1);
			for(j=0;j<v;j++)
				if(par[j]==i+1)
					printf("%d\t",j+1);
		}	
	}
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
	printf("\nEnter 2 to Check graph is connected or not");
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
			Check_Connection(Matrix,List,v);
			goto UP;
		default :
			printf("Wrong choice , try again");
			goto UP;
	}
}
