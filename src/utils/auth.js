import firebase from 'firebase';

function signIn(email, password) {
  return firebase.auth().signInWithEmailAndPassword(email, password);
}

function signOut() {
  return firebase.auth().signOut();
}

function createUser(email, password) {
  return firebase.auth().createUserWithEmailAndPassword(email, password);
}
module.exports = { signIn, signOut, createUser };
