# addnewpeople

## Introduction

> The `addnewpeople` component is a React functional component that utilizes hooks for state management and rendering dynamic content. It is designed to manage user profiles and provide an interactive carousel for additional profile-related actions. This document outlines the structure, functionality, and key aspects of the component, including its use in the main page for switching between user profiles to display personalized risk information.

## Component Structure

The component is built using React and Ant Design UI components. It incorporates the following key elements:

- **State Management:** Uses `useState`, `useMemo`, and `useEffect` hooks for local state management and `useRecoilState`, `useRecoilValue` from Recoil for global state management.
- **UI Components:** Leverages Ant Design's `Button`, `Avatar`, and `Badge` components for rendering the UI elements.
- **Routing:** Utilizes Next.js's `Router` for client-side navigation.
- **Unique Identifiers:** Employs `nanoid` to generate unique keys for list items.
- **Localization:** Implements a custom hook `useLanguage` and helper `LanguageHelper` for internationalization.

## Key Functionalities

### Text Carousel

- **Dynamic Text Rotation:** The `TextCarousel` sub-component displays a set of messages that rotate based on a specified interval.
- **State Control:** Utilizes `useState` to manage the active index and direction of the carousel's movement.
- **Effects:** Uses `useEffect` to set up a timer that updates the active index and cleans up to prevent memory leaks.

### User Profile Management

- **Profile Selection:** Allows users to select different profiles by clicking on the corresponding avatar, which is highlighted if selected.
- **State Update:** When a profile is selected, the `handleCurUserChange` function updates the global `userInfo` state and saves it to `localStorage`.
- **Refresh Mechanism:** A refresh state from Recoil is toggled to trigger a re-render of the component, reflecting the changes.

### UI Rendering

- **Conditional Rendering:** The component conditionally renders user information based on the `isEmpty` check from Lodash, ensuring that only profiles with data are displayed.
- **Styling:** Inline styles are used extensively to customize the appearance of the avatars, headings, and the carousel.

## Specific Use Case

The `addnewpeople` component is integral to the main page where it facilitates the switching between different user profiles. Upon selection of a profile, the component triggers a refresh of the page to display risk information relevant to the chosen user group. This functionality is particularly useful after a user has set up profile information in the settings page, as it allows for the dynamic rendering of personalized content on the main page.

### Example of Profile Switching and Page Refresh

When a user selects a profile by clicking on an avatar, the `handleCurUserChange` function is invoked. This function updates the global state with the selected user's information and triggers a refresh of the main page to display the updated risk information.

Here's a code snippet illustrating this process:

```
const handleCurUserChange = (index) => {
  // Update the selected user profile
  const updatedUserInfo = userInfo.map((item, i) => ({
    ...item,
    check: index === i
  }));
  
  // Save the updated user profiles to localStorage
  localStorage.setItem("allValue", JSON.stringify(updatedUserInfo));
  
  // Update the global state to trigger a re-render
  setUserInfo(updatedUserInfo);
  
  // Toggle the refresh state to refresh the component
  setRefresh(!refresh);
}
```

In the above code, clicking on an avatar calls `handleCurUserChange`, which updates the state and toggles the refresh state. This results in the component re-rendering with the selected profile's data, thereby updating the main page with the relevant risk information.

## Conclusion

The `addnewpeople` component is a versatile and interactive part of the application that handles user profiles and provides informative text through a carousel. It demonstrates the effective use of React hooks for state management and dynamic content updates, as well as the integration of UI components from Ant Design for a responsive and aesthetically pleasing user interface. The component also supports localization, ensuring that it can cater to a diverse user base. Its specific role in profile management and page refresh on the main page underscores its importance in providing a personalized user experience.
