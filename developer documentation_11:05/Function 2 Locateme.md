# Function 2: Location

> Note: `homepage.js` is used for data handling, while the actual UI rendering for location is implemented in `components/Addressdropdown.js`, specifically for this feature.

1. Starting from the `handleLocateMeCallBack` in the `homepage.js` file, it is necessary to enter `components/AddressDropDown.js`. However, the main purpose of entering this file is to pass the parameters from `homepage.js` to `AddressDropDown.js`. Ultimately, the frontend rendering of this feature occurs in `AddressDropDown.js`, with data processing in `homepage.js`.

2. The `handleLocateMeCallBack` method in `homepage.js` mainly uses two core functions: `getCurrentPosition`, which is a system function that obtains the current location's latitude and longitude, and `reverseGeocode`, which finds the nearest coordinates to oneself from the data in `./../public/postcodes.json` based on latitude and longitude. Then, the data is saved to cookies and the current page state is refreshed. This leads into the `loaddata()` method.

   ```
   jsCopy code
   // The unique location function
     handleLocateMeCallBack = async () => {
       this.setState({
         loading: true,
         reloadAddress: true,
       });
       navigator.geolocation.getCurrentPosition(async (position) => {
         let lat = position.coords.latitude;
         let lon = position.coords.longitude;
         let data = await reverseGeocode(lat, lon);
   ```

3. `loadData()`, this method is mainly used to verify whether the user is logged in. After logging in, it stores a series of status parameters and then calls the next method `loadGeodataFromCookie()`. If not logged in, `loadGeodataFromCookie()` will also be called.

4. The `loadGeodataFromCookie()` method is primarily for retrieving data from cookies. If logged in, the data is taken from the current state; if not, directly from the cookie. The data is then transferred to the next method.

5. In the `setLoadedData` method, all data is passed to `helpers/hssHelper.js-gethssdata`, which then returns an array based on the input data. This array contains the necessary data for various renderings and is assigned to the `hssRiskData` parameter. This parameter is used to update the current state, and then the final rendering `HssRiskDisplay` will call all properties of the current state.

# Summary

The data flow is straightforward: `handleLocateMeCallBack` in `homepage.js` uses the system's built-in method to obtain latitude and longitude, and then `reverseGeocode` is used to get the data of the nearest coordinates.

Then it enters `loadData` to determine whether the user is logged in.

`loadGeodataFromCookie` is used to retrieve data.

`setLoadedData` transforms the data into the required rendering data (data saved in the current state).

`HssRiskDisplay` takes the rendering data from the previous step and places it in UI components for rendering.
