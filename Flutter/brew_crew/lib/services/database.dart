import 'package:brewcrew/models/brew.dart';
import 'package:brewcrew/models/user.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
class DatabaseService {
  final String uid;

  DatabaseService({this.uid});

  // if 'brews' collection doesn't exist, Firestore will make.
  final CollectionReference brewCollection =
  Firestore.instance.collection('brews');

  Future updateUserData(String sugars, String name, int strength) async {
    return await brewCollection
        .document(uid)
        .setData({'sugars': sugars, 'name': name, 'strength': strength});
  }




  //get brew list from snapshow
  List<Brew> _brewListFromSnapshow(QuerySnapshot snapshot) {
    return snapshot.documents
        .map((doc) =>
        Brew(
            name: doc.data['name'] ?? '',
            strength: doc.data['strength'] ?? 0,
            sugars: doc.data['sugars'] ?? '0'))
        .toList();
  }

  Stream<List<Brew>> get brews {
    return brewCollection.snapshots().map(_brewListFromSnapshow);
  }

  //userdata from snapshot
  UserData _userDataFromSnapshot(DocumentSnapshot snapshot) {
    return UserData(
        uid: uid,
        name: snapshot.data['name'],
        sugars: snapshot.data['sugars'],
        strength: snapshot.data['strength']
    );
  }

  // get user doc stream
  Stream<UserData> get userData {
    return brewCollection.document(uid).snapshots().map(_userDataFromSnapshot);
  }
}
