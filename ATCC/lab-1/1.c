#include <stdio.h>

int main()
{
    FILE *f;
    if(f==NULL){
        printf("File not found");
        return;
    }
    f = fopen("demo.txt", "r");
    char a = fgetc(f);
    int tc=0,tl=0,ts=0,tt=0;
    while (a != EOF)
    {
        tc++;
        if(a==' '){
            ts++;
        }
        else if(a=='\t'){
            tt++;
        }
        else if(a=='\n'){
            tl++;
        }
        a = fgetc(f);
    }
    fclose(f);
    printf("%d %d %d %d",tc,tl,ts,tt);
    return 0;
}