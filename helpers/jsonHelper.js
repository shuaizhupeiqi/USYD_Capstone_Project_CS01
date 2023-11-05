// iterate through a stringified JSON object and convert each objects' value back to a proper JSON obeject
export function parseJSONValues(input) {
  if (Array.isArray(input)) { //Check if the input is an array
    return input.map((value) => parseJSONValues(value)); //If it is an array. Call this function recursively for each element and return a new array
  } else if (typeof input === "object" && input !== null) { //Check whether the output is an object, null is also an object
    const parsedObj = {}; //Initialize a new object to store parsed data
    for (const key in input) {  //Iterate over the keys of all objects
      if (Object.prototype.hasOwnProperty.call(input, key)) { //Use Object.prototype.hasOwnProperty.call to check whether the key is a property of the object itself, rather than inherited from the prototype chain
        parsedObj[key] = parseJSONValues(input[key]);//Recursively call the parseJSONValues function for each key and save it in parsedObj
      }
    }
    return parsedObj;
  } else if (typeof input === "string") { //Check if the input is a string
    try {
      return JSON.parse(input); //Parse strings with json.parse
    } catch (error) {
      return input;
    }
  } else {
    return input;
  }
}

export function getAllValuesGivenKey(data, key) {
  //const values = Object.values(data).map((item) => item[key]);

  const values = Object.values(data)
    .flatMap((item) => (Array.isArray(item) ? item : [item]))
    .map((item) => item[key]);

  return values;
}
