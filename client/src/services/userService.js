import firebase from '../firebase';

export const register = (email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
}

export const login = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password);
}

export const logout = () => {
    return firebase.auth().signOut();
}