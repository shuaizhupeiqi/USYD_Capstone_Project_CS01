# Function 1: Dropdown Box Function

[View Logic Diagram](https://app.diagrams.net/#G18NjbbnP0caqJgNMf3H1ICppSo9g_qaeO)

> Note: `homepage.js` is responsible for handling data, while the actual UI rendering for the dropdown is implemented in `components/Addressdropdown.js`, specifically for this feature.

1. This function originates from `/component/homepage.js` and invokes the `components/Addressdropdown.js` file.

2. The `onChangeAddress` method is called within the `components/Addressdropdown.js` file. This method monitors the dropdown box selection event by the front-end user. Upon selection, it captures the user's chosen value and assigns it to the `jsonval` parameter. These parameters store five user-selected values, including region, longitude, latitude, zip code, etc.

   ```
     onChangeAddress = (value) => {
       let values = value.split("//");
   
       let jsonVal = {
         postcode: values[0],
         suburb: values[1],
         latitude: values[2],
         longitude: values[3],
         state: values[4],
       };
   ```

   ***Direction of data flow: `components/Addressdropdown.js` will load data from `public/postcodes.json`, populate it into `data`, and then load it into the dropdown box. The user then selects a value from the dropdown box.***

   ```
      // Import geographic data
       let resGeo = await import("../public/postcodes.json");
       let res = [];
   ```

3. After `/component/homepage.js` retrieves the data, it calls the `handleaddress` callback in the js file. If the user is logged in (determined by the `getuserinfo` method), then `getuserinfo` will return a `user` parameter. This `user` parameter contains all the user's information, including email, etc. Regardless of the login status, this method will parse and store the JSON information received in the second step into `geodata`. Then it proceeds to the next method `loaddata()`.

   ```
   // The unique dropdown box function, after dropdown processing, JSON data is sent here to update data, which is then passed into the cookie.
   handleAddressCallBack = async (values) => {
     let jsonVal = {
       postcode: values[0],
       suburb: values[1],
       latitude: values[2],
       longitude: values[3],
       state: values[4],
     };
     let user = await getUserInfo();
     if (user && user.emailVerified) {
       createOrUpdateData(`users/${user.uid}`, { geoData: jsonVal })
       cookie.save("geoData", JSON.stringify(jsonVal)); // Save the five pieces of data in the cookie
           this.loadData();
     } else {
       cookie.save("geoData", JSON.stringify(jsonVal)); // Save the five pieces of data in the cookie
       this.loadData();
     }
   };
   ```

4. `loadData()`, This method primarily checks if the user is logged in. After login, it stores a series of status parameters and then calls the next method `loadGeodataFromCookie()`. If not logged in, `loadGeodataFromCookie()` will be called as well.

   ```
     async loadData() {
       this.setState({ loading: true });
       // The main switch to verify if the user is logged in
       let user = await getUserInfo();
       if (user && user.emailVerified) {
         try {
           const dataFromFirebase = await readData(`users/${user.uid}`);
   
           let geoData = parseJSONValues(dataFromFirebase.geoData);
           // dataFromFirebase contains geographic location and weight, etc.
           let timeZone = getTimezone(geoData.latitude, geoData.longitude);
           this.setState({
             parameters: {
               latitude: geoData.latitude,
               longitude: geoData.longitude,
               // variable needed, unchanged
               hourly: "temperature_2m,relativehumidity_2m,cloudcover,windspeed_10m",
               timezone: timeZone,
             },
           });
           await this.loadGeodataFromCookie();
         } catch (error) {
           console.error(
             "Get user geo data from firebase operation failed:",
             error
           );
           await this.loadGeodataFromCookie();
         }
       } else {
         await this.loadGeodataFromCookie();
       }
     }
     
   ```

5. `loadGeodataFromCookie()` is mainly for retrieving data from cookies. If logged in, the data is taken from the current state; if not, directly from the cookie. The data is then passed to the next method `setLoadedData`.

   ```
     async loadGeodataFromCookie() {
       
       let geoData = cookie.load("geoData"); // Load geodata from the cookie
   
       // console.log('geodata data:', geoData); // This line can show the received data in the console
       // geodata data: {postcode: '6280', suburb: 'Abbey', latitude: '-33.680', longitude: '115.460', state: 'WA'}
       if (geoData) {
         let timeZone = getTimezone(geoData.latitude, geoData.longitude);
         this.setState({
           loading: true,
           parameters: {
             suburb: geoData.suburb ,
             postcode: geoData.postcode ,
             latitude: geoData.latitude,
             longitude: geoData.longitude,
             // variable needed, unchanged
             hourly: "temperature_2m,relativehumidity_2m,cloudcover,windspeed_10m",
             timezone: timeZone,
           },
         });
       } 
       else {
         geoData = this.state.parameters;
       }
       await this.setLoadedData(geoData);
     }
     
   ```

6. In the `setLoadedData` method, all data is passed to `helpers/hssHelper.js-gethssdata`, which then returns an array based on the input data. This array contains the necessary data for various renderings and is assigned to the `hssRiskData` parameter. These parameters are used to update the current state, and then the final rendering `HssRiskDisplay` will call all properties of the current state.

## Summary

The dropdown box initially listens for the user's click event on the dropdown from `components/Addressdropdown.js` and captures five values (latitude, longitude, state, zip code, suburb).

These data are sent back to the `component/homepage.js` file via the `handleAddressCallBack`.

`loadData` is responsible for determining whether the user is logged in, with two logical paths for logged-in and non-logged-in scenarios, and then passes the data to the next method.

`loadGeodataFromCookie` is tasked with retrieving data from the cookie or the current state data (if logged in).

Finally, the `setLoadedData` method takes the data to calculate a series of required values for rendering and then updates the current page's values.

`HssRiskDisplay` uses the current page values to render all visuals on the homepage.
