import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isloading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);

  const createUser = (email, pass) => {
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const userSignIn = (email, pass) => {
    return signInWithEmailAndPassword(auth, email, pass);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const updateUser = (updateData) => {
    return updateProfile(auth.currentUser, updateData);
  };

  const addToCart = (toy, quantity) => {
    setCartItems((prevItems) => {
      const isExist = prevItems.find((item) => item.toyId === toy.toyId);
      if (isExist) {
        return prevItems.map((item) =>
          item.toyId === toy.toyId
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        );
      }
      return [...prevItems, { ...toy, quantity: quantity }];
    });
  };

  const authData = {
    user,
    setUser,
    createUser,
    logOut,
    userSignIn,
    isloading,
    updateUser,
    addToCart,
    cartItems,
    setCartItems,
  };
  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
