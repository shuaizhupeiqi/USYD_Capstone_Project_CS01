import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebaseui/dist/firebaseui.css";

const firebaseConfig = {
  apiKey: "AIzaSyDGbDncnE8u9TuFfzOBWqYasgeDmKaSrSE",
  authDomain: "hss-application.firebaseapp.com",
  projectId: "hss-application",
  storageBucket: "hss-application.appspot.com",
  messagingSenderId: "124675882675",
  appId: "1:124675882675:web:7b389a2a209de8da2efac6",
  measurementId: "G-JT6FHMP7DN",
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const checkUserLoggedIn = (callback) => {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      callback(true, user);
    } else {
      // No user is signed in.
      callback(false, null);
    }
  });
};
export const getUserInfo = async () => {
  return new Promise((resolve, reject) => {
    firebase.auth().onAuthStateChanged((user) => {
//firebase.auth method used to access the database,, onAuthStateChanged event listener, triggered when the user's login status changes
      if (user) {
        resolve(user); //If the user exists (logged in), the resolve function passes the user object and sets the promise status to fulfilled
      } else {
        resolve(undefined);//If the user does not exist (not logged in), the resolve function passes the user object and sets the promise status to fulfilled
      }
    }, reject);
  });
};
