import React, { useState, useContext, createContext } from "react";
import { initializeApp } from "firebase/app";
import { loginRequest } from "./authentication.service";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut } from "firebase/auth";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const firebaseConfig = {
    apiKey: "AIzaSyCmKs99svyFa0ORK5Vp26yicy01ijYflWM",
    authDomain: "mealstogo-78c91.firebaseapp.com",
    projectId: "mealstogo-78c91",
    storageBucket: "mealstogo-78c91.appspot.com",
    messagingSenderId: "35242938410",
    appId: "1:35242938410:web:e189f68e6e4ef3f9a1f353",
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);


  onAuthStateChanged(auth, (usr) => {
    if(usr) {
      setUser(usr)
      setIsLoading(false)
    }else{
      setIsLoading(false)
    }
  })

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((u) => {
        
        setUser(u.user);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.message.toString());
      });
  };

  

  const onRegister = (email, password, repeatedPassword) => {
    setIsLoading(true)
    if (password !== repeatedPassword) {
      setError("Error: Passwords do not match");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((u) => {
        setUser(u.user);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.message.toString());
      });
  };

  const onLogOut = () => {
    
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        setError(error)
      });
  }

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
        onLogOut,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
