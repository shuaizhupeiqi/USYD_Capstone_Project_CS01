# Notification



## Introduction

> The `Notification` utility function is a plugin designed to provide popup notifications within a web application. It is particularly useful for displaying messages like "Save Successful" or "Data has been saved to the cloud" after a user logs in or saves data. These notifications typically appear in the top-right corner of the screen.

## Prerequisites

Before you can use the `Notification` function, you need to have Ant Design's library installed in your project. You can install it using npm or yarn:

```
npm install antd
```

or

```
yarn add antd
```

## Importing

To use the `Notification` function in your component, import it as follows:

```
import showAlert from './path/to/showAlert';
```

## Function Definition

The `Notification` function is defined as follows:

```
import { notification } from "antd";

const showAlert = (type, title, message) => {
  notification[type]({
    message: title,
    description: message,
  });
};

export default showAlert;
```

### Parameters

- `type` (string): The type of notification to display. Valid types are `'success'`, `'info'`, `'warning'`, `'error'`.
- `title` (string): The title of the notification.
- `message` (string): The detailed message within the notification.

## Usage

To display a notification, call the `showAlert` function with the appropriate parameters. Here's an example of how to use it:

```
showAlert('success', 'Login Successful', 'You have been logged into the system.');
```

## Example in a React Component

Here is an example of how to use the `Notification` function within a React component to inform the user of a successful save operation:

```
import React from 'react';
import showAlert from './showAlert';

const MyComponent = () => {
  const handleSave = async () => {
    try {
      // Assume a save operation is performed here
      showAlert('success', 'Save Successful', 'Your changes have been saved to the cloud.');
    } catch (error) {
      showAlert('error', 'Save Failed', 'Unable to save changes.');
    }
  };

  return (
    <button onClick={handleSave}>Save Changes</button>
  );
};

export default MyComponent;
```

## Customization

The `Notification` function leverages Ant Design's notification component, which can be customized with additional properties such as `duration`, `placement`, and custom icons. For a comprehensive list of customizable properties, refer to the Ant Design documentation.

## Considerations

- **Duration**: Notifications close after a default duration unless specified otherwise. Use the `duration` property to control how long the notification remains visible.
- **Placement**: Control where the notification appears on the screen with the `placement` property.
- **Maximum Count**: Be aware of the maximum number of simultaneous notifications. Exceeding this number will cause the oldest notification to be replaced by the newest one.
- **Theming**: The style of notifications can be affected by global Ant Design themes. Ensure that custom themes do not interfere with the notification's visibility.

## Conclusion

The `Notification` utility function is a versatile tool for providing immediate feedback to users in a web application. It is easy to implement and can be customized to fit the needs of your application, ensuring a consistent and user-friendly experience.
