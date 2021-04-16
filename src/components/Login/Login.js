import React, { useContext } from 'react';
import firebase from 'firebase/app';
import { FaGoogle } from 'react-icons/fa';
import 'firebase/auth';
import firebaseConfig from '../firebaseConfig';
import './login.css';
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import Nav from '../Home/Nav/Nav';
import Subscribe from '../Home/Subscribe/Subscribe';
import Footer from '../Home/Footer/Footer';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}
const provider = new firebase.auth.GoogleAuthProvider();
const Login = () => {
  const [userLogin, setUserLogin] = useContext(userContext);
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: '/' } };
  const handleGoogleLogin = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        var credential = result.credential;
        var token = credential.accessToken;
        sessionStorage.setItem('token', token);
        var user = result.user;
        const { displayName, email, photoURL } = user;
        sessionStorage.setItem('photo', user.photoURL);
        sessionStorage.setItem('email', user.email);
        const userData = {
          name: displayName,
          email: email,
          photoURL: photoURL,
        };
        setUserLogin(userData);
        history.replace(from);
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  };
  return (
    <div className='container text-center'>
      <Nav />
      <div className='loginDiv'>
        Login With{' '}
        <button onClick={handleGoogleLogin} className='login'>
          <FaGoogle /> Google{' '}
        </button>
      </div>

      <Subscribe />
      <Footer />
    </div>
  );
};

export default Login;