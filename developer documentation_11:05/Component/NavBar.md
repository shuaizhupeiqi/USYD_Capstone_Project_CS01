# NavBar



## Introduction

> The `NavBar` component is a versatile navigation bar implemented in React, designed to be responsive and adaptive to various screen sizes. It is primarily used in the `pages/layout.js` file and offers two main rendering methods: `landScapeView` for desktop displays and `portialView` for mobile displays.

## Features

- Responsive design with dedicated views for desktop (`landScapeView`) and mobile (`portialView`).
- Multilingual support with dynamic translation loading.
- Interactive UI elements that respond to various user events.
- Integrated routing using Next.js's `Router`.

## Dependencies

- React and its component classes.
- Ant Design components such as `Button`, `Menu`, `Input`, etc., for constructing the navigation bar elements.
- Icons like `MenuOutlined` and `UserOutlined` from `@ant-design/icons`.
- Routing support with `Link` and `withRouter`.
- Style modules imported from style files.

## State Management

The component's state includes:

- `landscape`: Boolean indicating if the display is in landscape mode based on screen width.
- `loading`: Boolean to control the display of a loading indicator.
- `submenuVisible`: Boolean to toggle the visibility of the submenu.
- `webTitlemob`, `translation`, `color`, `supportedLanguages`, `sel_keys`: Related to multilingual support, color themes, supported languages, and the currently selected navigation item.

## Lifecycle Methods

- `componentDidMount`: Invoked after the component mounts, responsible for loading translations, adding resize event listeners, checking screen width, and loading supported languages.
- `componentWillUnmount`: Invoked before the component unmounts, responsible for removing event listeners added in `componentDidMount`.

## Routing Handlers

Several methods like `handleBackToHomePage`, `handleAboutPage`, `handleSettingPage`, etc., are responsible for handling click events on different navigation items and navigating to respective pages using `Router.push`.

## Responsive Design

- `handleResize`: Detects window width changes and sets the `landscape` state to determine which view (landscape or portrait) to display.
- `landScapeView` and `portialView` return the respective views for landscape and portrait orientations.

## Rendering

- The `render` method checks for the `loading` state and displays a loading card if true.
- Otherwise, it displays either `landScapeView` or `portialView` based on the `landscape` state.

## Multilingual Support

Utilizes `LanguageHelper` for translation and loading supported languages functionality.

## Detailed Views

### landScapeView

- Designed for landscape or wider screens.
- Navigation items such as "Home," "Settings," "Documentation," etc., are arranged horizontally and displayed at the top.
- Uses Ant Design's `Menu` component with `horizontal` mode for aligning menu items in a row.
- Suitable for devices with larger screen space where all navigation options are visible at a glance.

### portialView

- Designed for portrait or narrower screens, typically for mobile devices.
- Most navigation items are hidden in a dropdown menu (`SubMenu` component) and can be toggled by clicking a button (`MenuOutlined`).
- This design conserves screen space and ensures a clear and accessible user interface on small screens.
- Features a login button in the top-left corner with the `UserOutlined` icon, likely for user authentication.

## Conclusion

In summary, the `NavBar` component is a responsive navigation bar that provides different views for landscape and portrait modes and supports multiple languages, making it an essential part of the user interface for web applications.