# dataHelper



## Introduction

> The `dataHelper` module is designed to manage user interactions with Firebase Realtime Database. It provides a set of functions to perform create, read, update, and delete (CRUD) operations on user data. This document details the usage of each function and includes code examples for developers to integrate into their applications.

## Setup

Ensure Firebase is initialized in your project and the Firebase Realtime Database module is imported:

```
import { database } from "./firebaseClient";
```

## Functions

### saveUserData

This function saves or updates a user's data in the Firebase Realtime Database. It identifies the location to save the data using the provided `userId`.

**Parameters:**

- `userId` (String): The unique identifier for the user.
- `data` (Object): The data to be saved or updated for the user.

**Usage:**

```
saveUserData('userId123', { name: 'Alice Smith', email: 'alice.smith@example.com' });
```

### createOrUpdateData

This function either creates a new user entry or updates an existing one in the Firebase Realtime Database. It also ensures that the `emailSubscription` field is set to `true` if it does not already exist.

**Parameters:**

- `path` (String): The database path where the data should be created or updated.
- `data` (Object): The data to be created or updated at the specified path.

**Returns:**

- A promise that resolves upon successful creation or update, or rejects with an error.

**Usage:**

```
createOrUpdateData('users/user123', { email: 'alice.updated@example.com' })
  .then(() => console.log('User data created or updated successfully'))
  .catch(error => console.error('Error:', error));
```

### deleteData

Deletes data at the specified path in the Firebase Realtime Database.

**Parameters:**

- `path` (String): The database path from which the data should be deleted.

**Returns:**

- A promise that resolves when the data is successfully deleted or rejects with an error.

**Usage:**

```
deleteData('users/user123')
  .then(() => console.log('User data deleted successfully'))
  .catch(error => console.error('Error:', error));
```

### readData

Retrieves data from the specified path in the Firebase Realtime Database.

**Parameters:**

- `path` (String): The database path from which to read the data.

**Returns:**

- A promise that resolves with the retrieved data or rejects with an error.

**Usage:**

```
readData('users/user123')
  .then(data => console.log('User data retrieved successfully:', data))
  .catch(error => console.error('Error:', error));
```

## Conclusion

The `dataHelper` module streamlines the process of interacting with Firebase Realtime Database for user data management. It provides a simple and efficient way to perform CRUD operations, ensuring that developers can focus on building their application's core features. Proper error handling and promise resolution are key to integrating these functions into your application effectively. Always ensure that Firebase database rules are configured to secure user data and privacy.
