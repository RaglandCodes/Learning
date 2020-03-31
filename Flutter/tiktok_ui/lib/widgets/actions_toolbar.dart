import 'package:flutter/material.dart';
//import 'package:cached_network_image/cached_network_image.dart';

class ActionsToolbar extends StatelessWidget {
  Widget _getPlusIcon() {
    return Positioned(
      bottom: 0,
      left: (20),
      child: Container(
        width: 20,
        height: 20,
        decoration: BoxDecoration(
            color: Color.fromARGB(255, 255, 43, 84),
            borderRadius: BorderRadius.circular(15)),
        child: Icon(
          Icons.add,
          color: Colors.white,
          size: 20,
        ),
      ),
    );
  }

  Widget _getProfilePicture() {
    return Positioned(
      left: 5,
      child: Container(
        width: 20,
        height: 20,
        decoration: BoxDecoration(
            color: Color.fromARGB(255, 255, 43, 84),
            borderRadius: BorderRadius.circular(15)),
        child: Icon(
          Icons.add,
          color: Colors.white,
          size: 20,
        ),
      ),
    );
  }

  Widget _getFollowAction({String pictureURL}) {
    return Container(
      margin: EdgeInsets.symmetric(vertical: 10),
      width: 60,
      height: 60,
      child: Stack(
        children: <Widget>[_getProfilePicture(), _getPlusIcon()],
      ),
    );
  }

  Widget _getSocialAction({String title, IconData icon}) {
    return Container(
      margin: EdgeInsets.only(top: 15),
      width: 60,
      height: 60,
      child: Column(
        children: <Widget>[
          Icon(
            icon,
            size: 35,
            color: Colors.white,
          ),
          Padding(
            padding: EdgeInsets.only(top: 2),
            child: Text(
              title,
              style: TextStyle(fontSize: 12),
            ),
          )
        ],
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 100,
      //color: Colors.red,
      child: Column(mainAxisSize: MainAxisSize.min, children: [
        _getSocialAction(icon: Icons.healing, title: "3.2m"),
        _getSocialAction(icon: Icons.chat, title: "16.2k"),
        _getSocialAction(icon: Icons.share, title: "Share"),
      ]),
    );
  }
}
