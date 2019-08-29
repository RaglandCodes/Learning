// Comment
//https://www.youtube.com/watch?v=Rub-JsjMhWY
#include<iostream>
#include<vector>
#include<string>
#include<fstream>

using namespace std;
int main(){
    cout <<"Hello World" <<endl;
    const double PI = 3.1415926535;  //float is accurate to ~15 decimal places
    char myGrade = 'A'; //characters take 1 byte of memory
    bool isHappy = true;
    float favNum = 3.141592; //float is accurate to ~6 decimal places

    cout<< "Favorite number" << favNum << endl;

    cout << "int size = "<< sizeof(myGrade) << " bytes" << endl;


    //Casting
    cout <<" 22/7 = "<< 22/7 <<endl;
    cout <<" 22/7 = "<< (float) 22/7 <<endl;
    cout <<" 22/7 = "<< (double) 22/7 <<endl;

    //int numbers[3];
    
    vector<int> numVect(10);

    return 0;
}