// Done by following this site https://dart.dev/guides/language/language-tour

main(){
// Program starts executing in main
  var number = 90; // Type can be infered
  int another_number = 909;
  print('The number\'s are ${number} & ${another_number}');

  final String my_name = "Ragland";
  /*
  Final can be set only once

  Const is compile time constant
  */
  String last_name = " Asir";
  String fullName = my_name + last_name.toUpperCase(); // String concatnation
  
  print("Full name : ${fullName}"); //Ragland ASIR

  String multiLine = """
  This is how to make 
  a
  multi
  line 
  string
  """;

  // Also check out Runes for emoji, etc

  var thisEqualsNull;
  var thisIsNan = 0/0;

  var list = [2, 2, 3, 3, 3];  //List are b default List<int>
  
  var spreadWorksLikeThis = [0, 1, ...list, if(true) 99, 90, if(false)77, 2];
   print("spreadWorksLikeThis.length =>  ${spreadWorksLikeThis.length}");
   print("spreadWorksLikeThis =>  ${spreadWorksLikeThis}");
  
  var collectionFor = [for (var i in spreadWorksLikeThis) '#$i'];
  print("collectionFor =>  ${collectionFor}");
  
  var hashSet = <String>{}; // or Set<String> names = {}
  hashSet.addAll(collectionFor);

  print("hashSet   =>  ${hashSet}");
  
  var mapUsingConstructor = Map();
// type Map<int, String> is infered
  mapUsingConstructor[1] = "one";
  mapUsingConstructor[5] = "five";
  mapUsingConstructor[9] = "nine";

  print("mapUsingConstructor =>  ${mapUsingConstructor}");


}


// TBC functions