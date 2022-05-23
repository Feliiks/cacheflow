import * as React from 'react';
import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '../firebase';
// @ts-ignore
var userAuthContext = createContext();
export function UserAuthContextProvider(_a) {
    var children = _a.children;
    var _b = useState({}), user = _b[0], setUser = _b[1];
    function logIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }
    function signUp(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    function logOut() {
        return signOut(auth);
    }
    function googleSignIn() {
        var googleAuthProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleAuthProvider);
    }
    useEffect(function () {
        var unsubscribe = onAuthStateChanged(auth, function (currentuser) {
            console.log("Auth", currentuser);
            // @ts-ignore
            setUser(currentuser);
        });
        return function () {
            unsubscribe();
        };
    }, []);
    return (React.createElement(userAuthContext.Provider, { value: { user: user, logIn: logIn, signUp: signUp, logOut: logOut, googleSignIn: googleSignIn } }, children));
}
export var useUserAuth = function () {
    return useContext(userAuthContext);
};
//# sourceMappingURL=UserAuthContext.js.map