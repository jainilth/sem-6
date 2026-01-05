%option noyywrap
%{
#include<stdio.h>
int c=0,v=0;
%}
%%
[aeiouAEIOU]  {v++;}
[a-zA-Z]   {c++;}
\n     {printf("count of Vowels:%d\nCount of Consonants%d",v,c);v=0;c=0;}
%%
void main()
{
	yylex();
}