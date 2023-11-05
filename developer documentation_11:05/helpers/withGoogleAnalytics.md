# withGoogleAnalytics



## Introduction

> The `withGoogleAnalytics` module provides developers with tools for interacting with Google Analytics to track and record pageview events and changes to form inputs. It simplifies the integration of analytics tracking into a web application and ensures that user interactions are captured accurately for analysis in Google Analytics.

## Configuration

### Tracking IDs

- `prodTrackingId`: The Google Analytics Tracking ID for the production environment.
- `devTrackingId`: The Google Analytics Tracking ID for the development environment.

### GA_TRACKING_ID

A constant that determines which Tracking ID to use based on the environment.

```
export const GA_TRACKING_ID =
  process.env.NODE_ENV === "production" ? prodTrackingId : devTrackingId;
```

## Functions

### pageview

Tracks page views in the application, sending the URL to Google Analytics.

#### Parameters

- `url`: The path of the page being viewed.

#### Usage

```
pageview('/home');
```

### trackSingleInputChange

Tracks changes to individual form inputs, sending the field name and new value to Google Analytics.

#### Parameters

- `fieldName`: The name of the form field.
- `fieldValue`: The value of the form field.

#### Usage

```
trackSingleInputChange('email', 'user@example.com');
```

### trackInputChange

Tracks changes to all inputs within a form, sending each field's name and value to Google Analytics.

#### Parameters

- `formValues`: An object containing form field names and their respective values.

#### Usage

```
const formValues = {
  email: 'user@example.com',
  password: 'password123'
};
trackInputChange(formValues);
```

## Implementation Details

The module uses the `window.gtag` function to send tracking data to Google Analytics. It distinguishes between development and production environments to prevent the collection of analytics data during development.

### trackInputChange

This function iterates over the `formValues` object, using `parseJSONValues` to handle JSON objects and arrays properly. It then constructs and sends an analytics event for each form field that has changed.

## Error Handling

The functions within the module check if the `window` object is defined to prevent errors during server-side rendering or in non-browser environments.

## Conclusion

The `withGoogleAnalytics` module is an essential tool for developers who need to integrate Google Analytics tracking into their web applications. It provides a set of functions that abstract away the direct use of the `gtag` function, making it easier to track page views and form input changes. This module helps in gathering valuable insights into user behavior, which can be used to inform decisions and improve the overall user experience.
