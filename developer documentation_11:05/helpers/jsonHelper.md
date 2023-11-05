# jsonHelper



## Introduction

> The `jsonHelper` module provides two essential functions for handling JSON data, particularly focusing on formatting personal information extracted from Firebase and settings information. These functions are crucial for applications that require parsing and manipulating JSON data retrieved from various sources.

## Functions

### parseJSONValues

**Purpose:** Recursively processes the input data, aiming to parse all string values, attempting to convert them from strings back into appropriate JSON objects or other suitable types such as arrays.

**Parameters:**

- `input`: The data to be parsed, which can be a string, array, object, or any other data type.

**Behavior:**

- If the input is an array, it returns a new array where each element has been recursively processed.
- If the input is an object, it returns a new object where the value of each key has been recursively processed.
- If the input is a string, it attempts to parse it into JSON using `JSON.parse`. If parsing fails (for example, because the string is not valid JSON), it simply returns the original string.
- For other data types, it returns the input as is.

**Usage Example:**

```
const userSettingsString = '{"notifications":"true","theme":"dark"}';
const userSettingsObject = parseJSONValues(userSettingsString);
// Expected output: { notifications: true, theme: "dark" }
```

### getAllValuesGivenKey

**Purpose:** Searches through all direct children of a given object to collect all values associated with a given key. It also handles cases where the children are arrays.

**Parameters:**

- `data`: An object from which you wish to extract values associated with a specific key.
- `key`: The specific key whose values you want to extract.

**Behavior:**

- Returns an array containing all values associated with the specified key. If a value within the object is an array, the function extracts the corresponding key value from each item in the array.

**Usage Example:**

```
const settingsArray = [
  { user: 'Alice', settings: '{"theme":"light"}' },
  { user: 'Bob', settings: '{"theme":"dark"}' }
];
const themes = getAllValuesGivenKey(settingsArray, 'settings').map(setting => parseJSONValues(setting));
// Expected output: [{ theme: "light" }, { theme: "dark" }]
```

## Conclusion

The `parseJSONValues` function ensures that all values within a JSON string are correctly parsed, while the `getAllValuesGivenKey` function extracts all values associated with a given key from an object. These functions are invaluable for developers who need to handle JSON data formatting and extraction in their applications, especially when dealing with user settings and personal information from databases like Firebase.
