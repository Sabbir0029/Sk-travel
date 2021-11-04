import { getAuth, signInWithPopup, GoogleAuthProvider, signOut,onAuthStateChanged, GithubAuthProvider,} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../../firebase/initializeFirebase";


initializeFirebase()
const UseFirebase = () => {

  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  // 
  const auth = getAuth();
  // google login function
  const googlelognin =() =>{
    setLoading(true);
    const googleprovider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleprovider);
  };
  // github login function
  const githublogin =()=>{
    const githubprovider = new GithubAuthProvider();
    signInWithPopup(auth, githubprovider)
    .then(result =>{
        setUser(result.User);
    })
  }
  // onAuthStateChanged function
  useEffect(()=>{
    const Changed= onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } 
      else {
        setUser({});
      }
      setLoading(false);
    });
    return () => Changed;
  },[]);
    // Logout function
  const logOut =()=>{
    setLoading(true);
      signOut(auth)
      .then(() =>{ })
      .finally(() => setLoading(false));
  }

  return {
    user,
    loading,
    googlelognin,
    logOut,
    githublogin,
  }
};

export default UseFirebase;