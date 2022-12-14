import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Create user using email and password
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Send Email Verification
    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser);
    }

    // User profile update
    const updateUserProfile = profile => {
        return updateProfile(auth.currentUser, profile);
    }

    // Login with Email and Password
    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Login with Google & Facebook
    const socialLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    // Log out
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    // Check & set current user to user state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('Auth State Change', currentUser);
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = {
        createUser,
        updateUserProfile,
        verifyEmail,
        logIn,
        socialLogin,
        user,
        logOut,
        setLoading,
        loading
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;