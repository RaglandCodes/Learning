import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(title: "TokTik", home: Home());
  }
}

class Home extends StatelessWidget {


  Widget get topSection => Container(
    height: 100,
    padding: EdgeInsets.only(bottom: 15.0),
    color: Colors.amberAccent,
  );

  Widget get videoDescription => Expanded(
    child: Container(
      color: Colors.red,
    ),
  );

  Widget get actionsToolBar => Container(
    width: 100,
  );

  Widget get middleSection => Expanded(
    child: Row(
      mainAxisSize: MainAxisSize.max,
      crossAxisAlignment: CrossAxisAlignment.end,
      children: <Widget>[
        videoDescription,
        actionsToolBar
      ],
    ),
  );

  Widget get bottomSection => Container(
    height: 80,
    color: Colors.limeAccent,
  );

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Column(
        children: <Widget>[
          topSection,
          middleSection,
          bottomSection
        ],
      ),
    );
  }
}
