#include <stdio.h>
void main()
{
    FILE *f;
    f = fopen("read.txt", "r");
    FILE *fp;
    fp = fopen("CopyCode.txt", "a");
    char c = fgetc(f);
    while (c != EOF)
    {
        if (c == '/')
        {
            c = fgetc(f);
            if (c == '/')
            {
                while (c != '\n')
                {
                    c = fgetc(f);
                }
            }
            else if (c == '*')
            {
                c=fgetc(f);
                while (c != '*')
                {
                    c = fgetc(f);
                    char ctemp = fgetc(f);
                    if(ctemp=='/'){
                        break;
                    }
                }
            }
            else{
                fprintf(fp,"%c",'/');
                fprintf(fp, "%c", c);
            }
        }
        else
        {
            fprintf(fp, "%c", c);
        }
        c = fgetc(f);
    }
    fclose(f);
    fclose(fp);
}