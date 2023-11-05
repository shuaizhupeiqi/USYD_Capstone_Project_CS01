# hssHelper



## Introduction

> This module is designed to retrieve and process heat stress-related data based on geographic coordinates. It utilizes external APIs to fetch weather forecasts and calculates the risk of heat stress using the `jsthermalcomfort` library. The module also includes utility functions for parsing JSON data and extracting specific values from complex data structures.

## Installation

Before using this module, ensure that the following dependencies are installed:

```
npm install axios jsthermalcomfort tz-lookup
```

## Functions

### parseJSONValues

This function recursively parses input data, converting JSON strings within objects or arrays into JavaScript objects.

**Parameters:**

- `input` (Object|Array): The data to parse.

**Returns:**

- (Object|Array): The parsed data.

**Example:**

```
let inputData = '{"key": "{\"innerKey\": \"value\"}"}';
let parsedData = parseJSONValues(inputData);
// parsedData is now { key: { innerKey: "value" } }
```

### getAllValuesGivenKey

Extracts values associated with a given key from an array of objects or a single object.

**Parameters:**

- `data` (Object): The data containing the values to extract.
- `key` (String): The key whose values are to be extracted.

**Returns:**

- (Array): An array of values associated with the specified key.

**Example:**

```
let data = [{ key: "value1" }, { key: "value2" }];
let values = getAllValuesGivenKey(data, "key");
// values is ["value1", "value2"]
```

### findTheMaxRiskValue

Finds the object with the highest `riskValue` from an array of objects and determines the corresponding risk level.

**Parameters:**

- `data` (Array): An array of objects containing `riskValue` properties.

**Returns:**

- (Object): An object containing the maximum risk value and its associated risk level.

**Example:**

```
let dataArray = [{ riskValue: 0.3, time: "12:00" }, { riskValue: 0.7, time: "13:00" }];
let maxRisk = findTheMaxRiskValue(dataArray);
// maxRisk is { maxRiskValue: 0.7, maxRiskLevel: "High", time: "13:00" }
```

### getData

Calculates a `wDivider` value based on user settings.

**Parameters:**

- `data` (Object): The user data containing personal settings.

**Returns:**

- (Number): The calculated `wDivider` value.

**Example:**

```
let settings = { w: 0.9 };
let divider = getData(settings);
// divider is 0.765 (0.9 * 0.85)
```

### getHSSData

Asynchronously retrieves weather data based on geographic coordinates and calculates heat stress risk values.

**Parameters:**

- `geoData` (Object): An object containing `latitude` and `longitude`.
- `dataInput` (Object): User data for personal settings.

**Returns:**

- (Object): An object containing current and forecasted heat stress risk values.

**Example:**

```
let geoData = { latitude: -33.8, longitude: 151.01 };
let userSettings = { w: 0.9 };
let heatStressData = await getHSSData(geoData, userSettings);
// heatStressData contains currentRiskValue, todayData, todayMax, etc.
```

## Usage

To use the `getHSSData` function, provide it with geographic coordinates and user settings. It will return an object containing the current risk value, today's data, and the maximum risk value and level for the day.

## Conclusion

This module is a critical component for applications that aim to inform users about potential heat stress based on environmental conditions. It abstracts the complexity of data fetching and processing, providing a simple interface for retrieving heat stress risk assessments. When integrating this module into a larger system, ensure that the necessary error handling is in place to deal with potential issues such as API failures or unexpected data formats.
