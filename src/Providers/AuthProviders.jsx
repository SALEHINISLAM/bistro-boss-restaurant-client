import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../Firebase/firebase.config";
import Swal from "sweetalert2";
import { GoogleAuthProvider } from "firebase/auth";
import useAxiosPublic from "../hooks/useAxiosPublic";
//import { GoogleAuthProvider } from "firebase/auth/web-extension";
//import { GoogleAuthProvider } from "firebase/auth/cordova";
export const AuthContext = createContext(null);

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth(app);

  const axiosPublic=useAxiosPublic()
  const createUser = async (email, password, displayName) => {
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const newUser = userCredential.user;
      await updateProfile(newUser, {
        displayName: displayName,
      });
      setUser(newUser);
      return userCredential.user;
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  const signIn = async (email, password) => {
    setLoading(true);
    try {
      signInWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          return userCredential.user;
        }
      );
    } catch (err) {
      Swal.fire(err.message);
      return "error";
    }
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const googleSignIn = async () => {
    setLoading(true);
    const googleProviders = new GoogleAuthProvider();
    try {
      signInWithPopup(auth, googleProviders).then((userCredential) => {
        return userCredential.user;
      });
    } catch (err) {
      console.log(err);
      Swal.fire(err.message);
      return "error";
    }
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("current user", currentUser);
      if (currentUser) {
        const userInfo={email: currentUser.email}
        axiosPublic.post('/jwt', userInfo)
        .then(res=>{
          if (res.data.token) {
            localStorage.setItem('access-token', res.data.token)
          }
          else{
            localStorage.removeItem('access-token')
          }
        })
      }
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, [axiosPublic]);

  const authInfo = {
    user,
    loading,
    createUser,
    logOut,
    googleSignIn,
    signIn,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
