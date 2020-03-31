import 'package:flutter/material.dart';
import 'package:tiktokui/widgets/bottom_toolbar.dart';
import 'package:tiktokui/widgets/video_description.dart';
import 'package:tiktokui/widgets/actions_toolbar.dart';
void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(title: "TokTik",
        theme: ThemeData(
          textTheme: Theme.of(context).textTheme.apply(
            bodyColor: Colors.white,
            displayColor: Colors.white
          )
        ),
        home: Home());
  }
}

class Home extends StatelessWidget {
  Widget get topSection => Container(
        height: 100,
        padding: EdgeInsets.only(bottom: 15.0),
        color: Colors.amberAccent,
      );


  Widget get middleSection => Expanded(
        child: Row(
          mainAxisSize: MainAxisSize.max,
          crossAxisAlignment: CrossAxisAlignment.end,
          children: <Widget>[VideoDescription(), ActionsToolbar()],
        ),
      );

  //Widget get bottomSection =>

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.black,
      body: Column(
        children: <Widget>[topSection, middleSection, BottomToolbar()],
      ),
    );
  }
}
