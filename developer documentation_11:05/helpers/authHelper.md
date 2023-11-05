# authHelper



## Introduction

> The `authHelper` module is designed to facilitate user authentication by providing methods to interact with Firebase's authentication system. It allows developers to check if a user is logged in and to asynchronously retrieve the authenticated user's information directly from Firebase.

## Methods

### checkUserLoggedIn

This method is used to determine if a user is currently logged in.

**Syntax:**

```
checkUserLoggedIn(callback);
```

**Parameters:**

- ```
  callback
  ```

   (Function): A callback function that is called with two arguments:

  - `isLoggedIn` (Boolean): A flag indicating whether the user is logged in.
  - `user` (Object): The user object if the user is logged in; otherwise, `null`.

**Example Usage:**

```
checkUserLoggedIn((isLoggedIn, user) => {
  if (isLoggedIn) {
    console.log('User is signed in', user);
  } else {
    console.log('No user is signed in');
  }
});
```

### getUserInfo

This asynchronous function provides a convenient way to obtain the currently authenticated Firebase user's information.

**Syntax:**

```
getUserInfo();
```

**Returns:**

- (Promise): A promise that resolves with the authenticated user object if a user is logged in, or `undefined` if no user is logged in.

**Example Usage:**

```
async function fetchUserInfo() {
  try {
    const user = await getUserInfo();
    if (user) {
      console.log('Authenticated user info:', user);
    } else {
      console.log('No authenticated user.');
    }
  } catch (error) {
    console.error('Error fetching authenticated user info:', error);
  }
}
```

## Firebase Authentication State

Both methods utilize the `firebase.auth().onAuthStateChanged` listener to detect changes in the user's authentication state. This listener is triggered whenever the user's sign-in state changes, allowing the application to respond immediately to these changes.

## Conclusion

The `authHelper` module simplifies the process of checking the user's login status and obtaining the authenticated user's information from Firebase. It abstracts the Firebase authentication state handling, providing developers with easy-to-use functions that integrate seamlessly into the authentication flow of a web application. When implementing these methods, ensure that you handle any potential promise rejections and errors to maintain a robust and user-friendly experience.
