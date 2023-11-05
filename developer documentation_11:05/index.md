# Code Flowchart

https://app.diagrams.net/#G18NjbbnP0caqJgNMf3H1ICppSo9g_qaeO

# `public` Folder

This folder is designated for storing various image icons and some JSON data, such as all the geographical locations required for dropdown menus. It also contains `tips` which provide different images based on various demographics.

# `style` Folder

CSS files that will eventually be replaced with Ant Design.

# `pages` Folder

Contains pages that are directly rendered to the screen.

# `node_modules` Folder

Includes all dependency components, which are substantial in size. This folder should not be uploaded to GitHub.

# `language` Folder

Handles translation features.

# `functions` Folder

Likely a testing folder; no useful or called packages for the project were found here.

# `Cypress` Folder

Mainly based on test scripts written by cypress to test the functions of the website

# `helpers` – Secondary Main Folder

###### 1. `helpers/authHelper.js`

For user authentication, methods to get user information from the Firebase database and check login status.

###### 2. `helpers/dataHelper.js`

Operations for Firebase, including create, read, update, and delete actions.

###### 3. `helpers/firebaseClient.js`

Connects to the Firebase database.

###### 4. `helpers/hssHelper.js`

Processes incoming latitude and longitude data and returns a series of parameters for plotting. This page mainly converts setting values and retrieves API data, then uses the phs function to transform into usable parameters, sorting out the maximum and minimum risks. These parameters are finally passed to the current state for use by other files.

###### 5. `helpers/jsonHelper.js`

Two methods: one for formatting personal information extracted from Firebase into JSON data format, and another for formatting information from settings into JSON format.

###### 6. `helpers/languageHelper.js`

Used for translation (this may not be necessary as the translation feature may not need optimization, but if new features are added, this should be reviewed).

###### 7. `helpers/locationHelper.js`

Finds the nearest geographical location and matches it with the five parameters inside `/public/postcodes.json`.

###### 8. `helpers/tipHelper.js`

For image display when giving suggestions, such as images for drinking water, it calls the JSON in `./../public/tips`, which corresponds to some images.

###### 9. `helpers/withGoogleAnalytics.js`

For Google Analytics; currently unused and commented out.

# `components` – Main Folder

###### 1. `components/AddressDropDown.js`

One of the main features called in `Homepage.js`, used for rendering the top dropdown box and the locate function, and for data transmission.

###### 2. `components/AgeGroupRisk.js`

This component displays risk alerts for different age groups. It generates risk levels for healthy adults, older adults, and people with chronic diseases based on the provided data and risk values, offering detailed recommendations for each age group.

Part of the visualization, only called by `/HssRiskDisplay.js`.

###### 3. `components/BottomLegend.js`

A visualization component, only used in the homepage, for the colored bar below the personal information. However, this file is extensive and likely can be optimized, as a bar function should not require six hundred lines of code.

###### 4. `components/LanguageSelect.js`

The feature in `settingpage` for selecting a language.

###### 5. `components/Chart.js`

Only referenced by `HssRiskDisplay.js`, used for the forecast chart on the homepage. It has two methods; `area` is unused, and `linechart` is the default.

###### 6. `components/ChartForPublicDisplay.js`

Only referenced by `HssRiskDisplay.js`. This file seems to be for test data; although it is used in `HssRiskDisplay.js`, it never triggers this method. If triggered, the entire page is another page, which appears to be a test page.

> This can be optimized later.

###### 7. `components/LoadingCard.js`

Called multiple times, it is a fixed component used for the loading animation when the page is refreshing. It is an essential component.

###### 8. `components/Map.js`

The map component at the bottom of the homepage, called by `CustomizedMap.js`.

###### 9. `components/NavBar.js`

Called by `pages/layout.js`, mainly for the navigation bar at the top and bottom.

###### 10. `components/Notification.js`

A popup alert feature that appears in the top right corner after you log in or save data, with messages like "Save successful" or "Saved to cloud data".

###### 11. `components/Profile.js`

The page for `manage profile.js` after logging in on the setting page, mainly for front-end rendering and a series of front-end features.

###### 12. `components/Popover.js`

Only called by `HssRiskDisplay.js` and `AgeGroupRisk.js`. There is a method with the same name in `settingpage`, but it is called from `antd`, which should be noted.

It is likely the feature that pops up suggestions, such as when clicking on a risk on the homepage, it will pop up suggestions. This method is used for that popup.

###### 13. `components/CustomizedMap.js`

Calls the `map.js` file, asynchronously loads the map, and works in conjunction with map functionality.

###### 14. `components/Footer.js`

The footer of the page.

###### 15. `components/HssRiskDisplay.js`

All UI rendering for the main page, with content shown in feature 7.