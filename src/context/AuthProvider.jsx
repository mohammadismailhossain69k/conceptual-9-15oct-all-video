import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { auth } from "../fairbase/fairbase.config";
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
//akane amra google and github ar kaj ta korsi
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //1st step: create user signup work
  const createUserWithEmailAndPasswordFunc = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //update profile signup
  const updateProfileFunc = (displayName, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName,
      photoURL,
    });
  };
  //email verification signup
  const sendEmailVerificationFunc = () => {
    setLoading(true);
    return sendEmailVerification(auth.currentUser);
  };
  //2nd step  signin work
  const signInWithEmailAndPasswordFunc = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //signinWith Googlework

  const signInWithGoogleFunc = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //github signin work
  const signInWithGithubFunc = () => {
    setLoading(true);
    return signInWithGoogleFunc(auth, githubProvider);
  };

  //reset password email

  const sendPasswordResetEmailFunc = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  //signout work
  const signOutFunc = () => {
    setLoading(true);
    return signOut(auth);
  };

  const authInfo = {
    createUserWithEmailAndPasswordFunc,
    updateProfileFunc,
    sendEmailVerificationFunc,
    signInWithEmailAndPasswordFunc,
    signInWithGoogleFunc,
    signInWithGithubFunc,
    sendPasswordResetEmailFunc,
    signOutFunc,
    user,
    setUser,
    loading,
    setLoading,
  };

  //user website teke bahir hole o page reload hobe na amra just akta kaj korsi
  //ouAuthStateChanged akta side effect tai amra atake useEffect ar vitor rakbo

  //con-19-v:5 12mi
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    //amra akane useEffect er listener ta akane off kore disi
    return () => {
      unsubscribe();
    };
  }, []);

  //amra kon data ta Global ei share kothe chai seta value hisabe AuthContext a patate parbo
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
