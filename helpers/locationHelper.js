import tzlookup from "tz-lookup";

function haversineDistance(lat1, lon1, lat2, lon2) { //Calculate the distance between two coordinates
  const R = 6371; // Radius of the Earth in km
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;

  return distance;
}

function findClosestLocation(userLat, userLon, data) { //Accepts a user's latitude and longitude, and an array containing multiple unknown data, and returns the location closest to the user
  if (!Array.isArray(data)) {
    throw new Error("Data must be an array of location objects");
  }
  let closestLocation = data[0];
  let closestDistance = haversineDistance(
    userLat,
    userLon,
    parseFloat(data[0].latitude),
    parseFloat(data[0].longitude)
  );

  data.forEach((location) => {
    const distance = haversineDistance(
      userLat,
      userLon,
      parseFloat(location.latitude),
      parseFloat(location.longitude)
    );
    if (distance < closestDistance) {
      closestDistance = distance;
      closestLocation = location;
    }
  });

  return closestLocation;
}

export function getTimezone(lat, lng) {  //Find the corresponding time zone based on latitude and longitude
  const timezone = tzlookup(lat, lng);
  return timezone;
}

export async function reverseGeocode(lat, lng) {  //Accepts longitude and latitude as parameters, returns the geographical location close to these coordinates, imports the geographical location data from the postcodes file, and finally finds the closest geographical location
  try {
    if (lat == null || lng == null) {
      console.log("Invalid geo location");
      return null;
    } //If either longitude or latitude is null, output null

    let resGeo = await import("./../public/postcodes.json"); //Read the geographical location information of this file

    const closestLocation = findClosestLocation(lat, lng, resGeo.default);
    //Find the closest geographical location

    const suburb = closestLocation.suburb; //Extract suburb, state, zip code from closestLocation
    const state = closestLocation.state;
    const postcode = closestLocation.postcode;

    return { suburb, state, postcode }; //Return these data and return to homepage from here
  } catch (error) {
    console.error("Error reverse geocoding:", error);
    return null; //If an error occurs, error information is output on the console and null is returned.
  }
}
