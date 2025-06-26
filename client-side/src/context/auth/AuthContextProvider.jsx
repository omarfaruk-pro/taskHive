import { useEffect, useState } from "react"
import { AuthContext } from "./AuthContext"
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase.init";


export default function AuthContextProvider({children}) {
    const [user, setUser] = useState();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProver = new GoogleAuthProvider();

    const userRegister = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth , email, password);
    }

    const userLogin =(email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleLogin=()=>{
        setLoading(true);
        return signInWithPopup(auth, googleProver);
    }


    const userLogout = () =>{
        setLoading(true);
        return signOut(auth);
    }


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoading(false);
            return () => unsubscribe();
        })
    },[])

    const userInfo ={
        userRegister,
        userLogin,
        userLogout,
        googleLogin,
        user,
        setUser,
        error,
        setError,
        loading,
        setLoading
    }
  return (
    <AuthContext value={userInfo}>
        {children}
    </AuthContext>
  )
}
