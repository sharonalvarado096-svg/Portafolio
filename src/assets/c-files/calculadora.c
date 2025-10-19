// Calculadora simple
#include <stdio.h>

int suma(int a, int b) {
    return a + b;
}

int main() {
    int x = 5, y = 3;
    printf("%d + %d = %d\n", x, y, suma(x, y));
    return 0;
}
