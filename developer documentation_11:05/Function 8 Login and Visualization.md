# Function 8 Login and Visualization



The first is the login function

1. Many files will have the following code, which returns the information of the currently logged in user to the user parameter.

```js
    let user = await getUserInfo();
```

The getuserinfo method is in helpers/authHelper.js.

```js
export const getUserInfo = async () => {
  return new Promise((resolve, reject) => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        resolve(user);
      } else {
        resolve(undefined);
      }
    }, reject);
  });
};
```

There is also a method provided in authhelper, which may be duplicated with the getuserinfo function.

```js
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
```

2. Read user data readData

This reading is based on the user uid, but an additional function is added here and it may be redundant to read again based on the uid.

```js
   if (user && user.emailVerified) {
      try {
        const dataFromFirebase = await readData(`users/${user.uid}`);
        let geoData = parseJSONValues(dataFromFirebase.geoData);
```

The method is readData, which reads users/${user.uid}. In fact, user.uid is the value in the user parameter obtained from method 1. The uid is obtained here, and the data is read from firebase based on the uid.

This method is in helpers/dataHelper.js, and there is a database method in it.

```js
export function readData(path) {
  return new Promise((resolve, reject) => {
    try {
      const ref = database.ref(path);
      ref.once(
        "value",
        (snapshot) => {
          const data = snapshot.val();
          // console.log('Data read successfully:', data);
          resolve(data);
        },
        (error) => {
          console.error("Error reading data:", error);
          reject(error);
        }
      );
    } catch (error) {
      console.error("Error reading data:", error);
      reject(error);
    }
  });
}
```

In the dataHelper.js file, there are some methods to save the data saveUserData, createOrUpdateData to update the data to firebase, and deleteData to delete the data in firebase.



3. The database method is mentioned in the second method, helpers/firebaseClient.js

This method is mainly used to connect to the firebase database

```js
const firebaseConfig = {
  apiKey: "AIzaSyDGbDncnE8u9TuFfzOBWqYasgeDmKaSrSE",
  authDomain: "hss-application.firebaseapp.com",
  projectId: "hss-application",
  storageBucket: "hss-application.appspot.com",
  messagingSenderId: "124675882675",
  appId: "1:124675882675:web:7b389a2a209de8da2efac6",
  measurementId: "G-JT6FHMP7DN",
};

const app = firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
const firestore = firebase.firestore();
const database = firebase.database();

//track with firebase analytics
export const trackInputChangeViaFirebase = (formValues) => {
  if (typeof window !== "undefined") {
    const analytics = firebase.analytics();
    Object.entries(formValues).forEach(([fieldName, fieldValue]) => {
      analytics.logEvent("input_change", {
        field_name: fieldName,
        field_value: fieldValue,
      });
    });
  }
};
```

There is also a method trackInputChangeViaFirebase in this file, which is used in settingpage.js. When the user's setting is successfully set, the content will be saved in the firebase database. This method is used to check whether the save is successful.

4.Jsonhelper.js

After extracting data from firebase, the data needs to be cleaned. The function of this function is to traverse an object or array and try to parse the string value into a JSON object.

```js
   if (user && user.emailVerified) {
      try {
        const dataFromFirebase = await readData(`users/${user.uid}`);
        let geoData = parseJSONValues(dataFromFirebase.geoData);
```



# Summary

helpers/firebaseClient.js is used to connect to the firebase database

The getUserInfo method of helpers/authHelper.js is used to get data from firebase.

The parseJSONValues method in helpers/jsonHelper.js is used to parse these data into json readable

helpers/dataHelper.js The four methods in this file are used for firebase operations, data viewing, deletion, and addition.



const dataFromFirebase = await readData(`users/${user.uid}`); This line of code is used to obtain the user’s information stored in the database

let user = await getUserInfo(); This information is used to obtain the user's login personal information such as email username, etc.