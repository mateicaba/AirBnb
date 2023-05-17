//se da o matrice n x m. sa se afiseze matricea inversandu-se liniile.

#include <iostream>
using namespace std;

int main()
{
    int n, m, a[50][50];
    for(int i = 0; i < n; i++)
        for(int j = 0; j < m; j++)	
            cin >> a[i];
    for(int j = 0; j<m; j++)
        for(int i = 0; i < n/2; i++)
        {
            int aux = a[i][j];
            a[i][j] = a[n-1-i][j];
            a[n-1-i][j] = aux;
        }
    for(int i = 0; i < n; i++)
        {
            for(int j = 0; j < m; j++)	
                cout << a[i][j] << " ";
            cout << endl;
        }
    return 0;
}