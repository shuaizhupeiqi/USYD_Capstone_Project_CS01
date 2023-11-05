# locationHelper



## Introduction

> The `locationHelper` module is a set of functions designed to assist with geolocation features within an application. It provides methods to find the closest geographical location to a user and match it against a predefined list of locations within the `/public/postcodes.json` file. This module is particularly useful for the 'locate me' functionality, offering methods for calculating distances, finding the closest location, determining time zones, and reverse geocoding.

## Functions

### haversineDistance

Calculates the Haversine distance between two geographic coordinates. This formula determines the shortest distance over the earth's surface, providing an "as-the-crow-flies" distance between the points (ignoring any hills they fly over, of course).

#### Parameters

- `lat1`, `lon1`: Latitude and longitude of the first point.
- `lat2`, `lon2`: Latitude and longitude of the second point.

#### Returns

- The distance in kilometers.

#### Example Usage

```
// This function is not used directly in the other methods but is available for direct use if needed.
const distance = haversineDistance(50.06638889, -5.71472222, 58.64388889, -3.07000000);
console.log(`Distance: ${distance} km`);
```

### findClosestLocation

Finds the closest location to the user's current position from a dataset of geographical locations.

#### Parameters

- `userLat`, `userLon`: User's current latitude and longitude.
- `data`: An array of location objects, each containing latitude and longitude properties.

#### Returns

- The closest location object to the user's current position.

#### Example Usage

```
const userCoordinates = { lat: 51.5074, lon: -0.1278 };
const locationData = [
  // Array of location objects
];
const closestLocation = findClosestLocation(userCoordinates.lat, userCoordinates.lon, locationData);
console.log(`Closest Location: ${JSON.stringify(closestLocation)}`);
```

### getTimezone

Returns the timezone string for a given latitude and longitude using the `tz-lookup` library.

#### Parameters

- `lat`: Latitude of the location.
- `lng`: Longitude of the location.

#### Returns

- A string representing the timezone.

#### Example Usage

```
const timezone = getTimezone(51.5074, -0.1278);
console.log(`Timezone: ${timezone}`);
```

### reverseGeocode

Performs reverse geocoding to convert latitude and longitude into geographical location information. Instead of using an external API, it utilizes the built-in `postcodes.json` file to find the closest location and return its suburb, state, and postcode.

#### Parameters

- `lat`: Latitude of the location.
- `lng`: Longitude of the location.

#### Returns

- An object containing the suburb, state, and postcode of the closest location.

#### Example Usage

```
const geolocation = { lat: 51.5074, lng: -0.1278 };
const locationDetails = await reverseGeocode(geolocation.lat, geolocation.lng);
console.log(`Location Details: Suburb - ${locationDetails.suburb}, State - ${locationDetails.state}, Postcode - ${locationDetails.postcode}`);
```

## Conclusion

The `locationHelper` module offers a comprehensive suite of tools for handling geographical information. It is designed to facilitate the development of location-based functionalities by providing methods to calculate distances between points, find the nearest location, determine time zones, and perform reverse geocoding using a local dataset. The latter three functions are particularly tailored for enhancing the 'locate me' feature in applications.
