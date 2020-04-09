import 'package:brewcrew/models/user.dart';
import 'package:brewcrew/screens/authenticate/authenticate.dart';
import 'package:brewcrew/screens/authenticate/register.dart';
import 'package:brewcrew/services/auth.dart';
import 'package:brewcrew/shared/constants.dart';
import 'package:brewcrew/shared/loading.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';

class SignIn extends StatefulWidget {
  final Function toggleView;

  SignIn({this.toggleView});

  @override
  _SignInState createState() => _SignInState();
}

class _SignInState extends State<SignIn> {
  String email = '';
  String password = '';
  String error = "";

  final AuthService _auth = AuthService();
  final _formKey = GlobalKey<FormState>();
  bool loading = false;

  @override
  Widget build(BuildContext context) {
    return loading?Loading(): Scaffold(
      backgroundColor: Colors.brown[100],
      appBar: AppBar(
        backgroundColor: Colors.brown,
        elevation: 0,
        title: Text('Sign in to Brew Crew'),
        actions: <Widget>[
          FlatButton.icon(
            onPressed: () {
              widget.toggleView();
            },
            icon: Icon(Icons.person),
            label: Text("Register"),
          )
        ],
      ),
      body: Container(
        padding: EdgeInsets.symmetric(vertical: 20, horizontal: 50),
        child: Form(
          key: _formKey,
          child: Column(
            children: <Widget>[
              SizedBox(
                height: 20,
              ),
              TextFormField(
                decoration: textInputDecoration,
                onChanged: (val) {
                  setState(() {
                    email = val;
                  });
                },
              ),
              SizedBox(
                height: 20,
              ),
              TextFormField(
                obscureText: true,
                decoration: textInputDecoration.copyWith(hintText: 'Password'),
                onChanged: (val) {
                  setState(() {
                    password = val;
                  });
                },
              ),
              SizedBox(
                height: 20,
              ),
              RaisedButton(
                color: Colors.pink,
                child: Text(
                  'Sign In',
                  style: TextStyle(color: Colors.white),
                ),
                onPressed: () async {
                  setState(() {
                    loading = true;
                  });

                  dynamic result =
                      await _auth.signInWithEmailAndPassword(email, password);

                  setState(() {
                    loading = false;
                  });
                },
              )
            ],
          ),
        ),
      ),
    );
  }
}
