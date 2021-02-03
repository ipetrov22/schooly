import firebase from '../firebase';

export const register = (email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
}