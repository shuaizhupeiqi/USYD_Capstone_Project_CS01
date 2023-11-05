import { database } from "./firebaseClient";

export function saveUserData(userId, data) {
  try {
    const userRef = database.ref(`users/${userId}`);
    userRef.update(data);
    console.log("User data saved successfully");
  } catch (error) {
    console.error("Error saving user data:", error);
  }
}

export function createOrUpdateData(path, data) {
  return new Promise(async (resolve, reject) => {
    try {
      const ref = database.ref(path);  //ref is a reference to a specific path in the firebase database, ref (path) is a method of the firebase database, indicating how to extract the specified path

      // Get the current data at the path
      const snapshot = await ref.once("value");//ref.once is firebase's method to obtain the data of the specified path at one time (data snapshot)
      const currentData = snapshot.val(); //Extract data from the data snapshot and accurately reproduce the current data

      // If currentData doesn't exist, or if currentData does exist but emailSubscription attribute doesn't,
      // add the emailSubscription field and set it to true
      if (
        !currentData ||
        (currentData && currentData.emailSubscription === undefined) //Check if currentdata is missing emailSubscription field
      ) {
        ref.child("emailSubscription").set(true, (error) => { //Get a reference to emailSubscription
          if (error) {
            console.error("Error updating emailSubscription:", error);
            reject(error);
          } else {
            console.log("emailSubscription updated successfully");
          }
        });
      }
      ref.update(data, (error) => { 
        if (error) {
          console.error("Error creating or updating data:", error);
          reject(error);
        } else {
          resolve();
        }
      });
    } catch (error) {
      console.error("Error creating or updating data:", error);
      reject(error);
    }
  });
}

export function deleteData(path) {
  return new Promise((resolve, reject) => {
    try {
      const ref = database.ref(path);
      ref.remove((error) => {
        if (error) {
          console.error("Error deleting data:", error);
          reject(error);
        } else {
          console.log("Data deleted successfully");
          resolve();
        }
      });
    } catch (error) {
      console.error("Error deleting data:", error);
      reject(error);
    }
  });
}

export function readData(path) {
  return new Promise((resolve, reject) => {
    try {
      const ref = database.ref(path); //Reference pointing to a specific path of the database
      ref.once(  //Used to read data at one time
        "value", //Indicates the data value under the path that you want to read, such as users
        (snapshot) => {
          const data = snapshot.val(); //Callback function, when the data is read successfully, get the actual data from the snapshot
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
