import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";
export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const GoogleProvider = new GoogleAuthProvider();
    const GitHubProvider = new GithubAuthProvider();
   const [user,setUser] = useState(null);
   const [loading ,setLoading] = useState(true);
   const createUser = (email,password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password);
}
const signInUser = (email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);
}
const logOut =()=>{
    setLoading(true);
    return signOut(auth);
}
const googleSignIn= ()=>{
    setLoading(true);
    return signInWithPopup(auth,GoogleProvider);
}
const githubSignIn = () =>{
    setLoading(true);
    return signInWithPopup(auth,GitHubProvider)
}
    const authInfo = {
   user,
   createUser,
   signInUser,
   logOut,
   googleSignIn,
   githubSignIn


    }
   
    return (
        <AuthContext.Provider value={authInfo}>
           {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
