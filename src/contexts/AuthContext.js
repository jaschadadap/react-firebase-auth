import React, { useContext, useEffect, useState } from "react";
import { auth } from '../firebase'


const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}



export function AuthProvider({ children }) {

    const [currentUser, setCurrentUser] =  useState()
    const [loading, setLoading] = useState(true)

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    function logout() {
        return auth.signOut()
    }

    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email)
    }

    function updateEmail(email) {
        return auth.currentUser.updateEmail(email)
    }

    function updatePassword(password) {
        return auth.currentUser.updatePassword(password)
    }

    useEffect(()=>{
        const unsub = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })

        return unsub
    },[])

    const value = {
        currentUser,
        signup,
        login,
        logout,
        resetPassword,
        updateEmail,
        updatePassword
    }



    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}




// import React, { useContext, useEffect, useState } from 'react'
// import { auth } from '../firebase'

// const AuthContext = React.createContext()


// export function useAuth(){
//     return useContext(AuthContext)
// }

// export function AuthProvider({ children }) {
//     const [currentUser, setCurrentUser] = useState()

//     function signup (email, password) {
//         return auth.createUserWithEmailAndPassword(email, password)
//     }

//     useEffect(() => {
//         const  unsubscribe = auth.onAuthStateChanged(user => {
//             setCurrentUser(user)
//         })

//         return unsubscribe
//     }, [])

//     const value = {
//         currentUser,
//         signup
//     }

//   return(
//     <AuthContext.Provider value={value}>  
//         {children}
//     </AuthContext.Provider>
//   )
// }
