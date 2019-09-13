import 'dart:io';
main(){
//void main(){
  //'void' can be avoided
  //Dart program starts with main
  
  stdout.writeln('Name : ');
  String name = stdin.readLineSync();
  //print vs stdout => https://stackoverflow.com/a/52598348/10617695
  stdout.writeln('Age : ');
  //int age = stdin.readLineSync().to_i();

  //double decades = age/10;

  print('Welcome $name');
 // print('You\'re $decades old');


}