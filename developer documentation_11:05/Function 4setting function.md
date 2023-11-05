# Function 4: Settings Page

This page's functionality is divided into two parts: one is the direction of data flow, setting personal information, and then saving it somewhere.

The other is the visualization aspect, which is divided into two components: the current page's component and the login component for managing your profile.

This feature mainly discusses the data flow.

Method 1: `onFormValueChange`

This is used to listen to the current value in the input box and save it in the current state.

```
  onFormValueChange = (changedValue, allValue) => {
    this.setState({ latestFormValues: allValue });
  };
```

Method 2: `onSaveData`

This method saves the data. If logged in, it will store the personal information in Firebase under one's own settings as shown in the code below.

```
if (user) {
      if (user.emailVerified) {
        createOrUpdateData(`users/${user.uid}`, { settings: values })
          .then(() => {
            console.log("Operation successful");
          })
```

If not logged in, the settings values are placed in cookies.

```
    } else {
      showAlert(
        "info",
        this.state.translation.Alert.Info.SettingSavedTitle,
        this.state.translation.Alert.Info.LoginToSaveYourDataDescription
      );
      localStorage.setItem("allValue", JSON.stringify(values));
    }
```
