import 'package:flutter/material.dart';

class VideoDescription extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Expanded(
        child: Column(
      mainAxisSize: MainAxisSize.min,
      crossAxisAlignment: CrossAxisAlignment.start,
      children: <Widget>[
        Text(
          "@ragland",
          style: TextStyle(fontWeight: FontWeight.bold),
        ),
        Text('video title'),
        Row(
          children: <Widget>[
            Icon(
              Icons.music_note,
              size: 15,
            ),
            Text(
              'Artist name',
              style: TextStyle(fontSize: 12),
            )
          ],
        ),
      ],
    ));
    ;
  }
}
