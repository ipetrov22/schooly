import { createContext, useState, useEffect } from 'react';
import firebase from '../firebase';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const uid = localStorage.getItem('uid');
    const [user, setUser] = useState(uid);

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                localStorage.setItem('uid', user.uid);
            } else {
                localStorage.removeItem('uid');
            }
            setUser(user);
        });

        return unsubscribe;
    }, []);

    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    )
}