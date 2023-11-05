# Function 3: Data Processing

> Data processing follows Functions 1 and 2, occurring after the geographic location, state.hour, and translation parameters are passed to the getHSSData function.

The method `getHSSData` in `helpers/hssHelper.js` is used for data processing.

Data processing in three steps:

1. Determine the user's personal settings to get the weight, using `getWDivider` to obtain a final weight number.
2. Obtain three sets of data from the API: temperatures, wind speeds, and humidities, and pass them to the PHS (Professor's component) to get the RSS value.
3. Divide the RSS value by the divider to get the final value.

Then, use some algorithms with the values obtained from the above three steps to get the maximum and minimum values, and perform drawing based on time. The `getHSSData` method will eventually return a series of parameters. These parameters are passed to `homepage.js` to update the state, and then `HssRiskDisplay` performs the drawing.

```
jsCopy code
 return {
    dataForPublicDisplay: dataForPublicDisplay,
    currentRiskValue: currentRiskValue,
    data: subArrays,
    maxLevelForecast: maxLevelForecast,
    now: now,
    max: max,
    portialNow: portialNow,
    portialMax: portialMax,
  };
```

### getWDivider Method

If logged in, retrieve the settings data from Firebase:

```
jsCopy code
          const dataFromFirebase = await readData(`users/${user.uid}`);
          const parsedData = parseJSONValues(dataFromFirebase.settings);
          const wDivider = getData(parsedData);
```

If not logged in, retrieve data from cookies:

```
jsCopy code
        if (localStorage.getItem("allValue")) {
          data = parseJSONValues(JSON.parse(localStorage.getItem("allValue")));
        }
        const wDivider = getData(data);
        resolve(wDivider);
```

This method will obtain the settings from the above two steps, but these settings are not a number, rather a JSON-formatted array. The `getData` method is then used to process this array, ultimately returning a number.

### getData Method

This method simply transforms the JSON-formatted settings into a number through a series of conversions. For example, the original data entering the `getData` method might be:

```
jsonCopy code
ageGroup
: 
{label: '<18', w: 0.8}
isIllness
: 
{label: 'no', w: 1}
isTakingMedication
: 
{label: 'yes', w: 0.9}
```

`getData` will transform this data into a single value as follows:

```
kotlinCopy code
Received data: 0.3916800000000001
```

# Summary

The `helpers/hssHelper.js` file has four methods:

1. `findTheMaxRiskValue` to find the maximum risk value, which is a custom method with if statements, etc.
2. `getWDivider` to receive settings data, determining whether to extract from the database if logged in or from cookies if not.
3. `getData` to transform the JSON-formatted settings data into a number, because the final calculation only needs a number.
4. `getHSSData` to obtain data via API, then use the professor's algorithm to calculate a series of data, combined with the divider to calculate the final numerical value, and then update the state parameter values, which are finally passed to `homepage.js`. In `homepage.js`, `HssRiskDisplay` uses the updated parameters for drawing.
