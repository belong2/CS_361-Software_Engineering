#include <stdio.h>
#include <stdlib.h>

int main() {
    // myString is a pointer see the asterisk
    char* myString1 = "Hello World"; //The compiler automatically puts \0 at the end

    // Now I need to fill up a lot of memory for this to make sense
    char* fillString1;
    char* fillString2;
    fillString1 = (char*)calloc(100000000, sizeof(char));
    fillString2 = (char*)calloc(100000000, sizeof(char));

    for (int i=0; i<=100000000; i++) {
        fillString1[i] = 'a';
        fillString2[i] = 'a';
    }

    // Let's make our own string from scratch
    char* myString2;
    char* myString3;
    myString2 = (char*)calloc(5, sizeof(char));
    myString3 = (char*)calloc(5, sizeof(char));

    // Now we will fill this byte array with some values
    myString2[0] = 'H';
    myString2[1] = 'e';
    myString2[2] = 'l';
    myString2[3] = 'l';
    myString2[4] = 'o';
    myString2[5] = ' ';
    myString2[6] = 'W';

    myString3[0] = 'H';
    myString3[1] = 'e';
    myString3[2] = 'l';
    myString3[3] = 'l';
    myString3[4] = 'o';

    int this = 2;
    int that = 3;

    printf("%s\n", myString2);
    printf("%s\n", myString3);
    printf("%s\n", myString1);


}
