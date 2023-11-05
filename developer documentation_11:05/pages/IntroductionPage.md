# IntroductionPage 



## Introduction

> The `IntroductionPage` component is a React component designed to serve as the introductory page for a web application. It incorporates a variety of elements from the Ant Design library, such as `Carousel`, `Button`, `Tabs`, `Card`, and `Typography`, to create a rich and interactive user experience. This document provides an overview of the component's structure, functionality, and usage.

## Component Structure

The `IntroductionPage` component is wrapped with a `Layout` component, which provides a consistent header and footer for the page. The content within `Layout` is organized into various sections, each serving a different purpose:

- **Title and Buttons**: A card that contains the main title and a button to navigate to the home page.
- **Content Tabs**: A set of tabs that categorize information into different sections.
- **Recommendations**: A collapsible panel that provides detailed recommendations based on risk levels.
- **Additional Functions**: A set of cards that offer additional functionality like settings and maps.

## Key Functionalities

### State Management

The component uses the `useState` and `useEffect` hooks for managing state and side effects. For example, it maintains the loading state, expansion state of content, and translations for multilingual support.

### Dynamic Content and Styling

Content is dynamically loaded and translated based on the user's language preference. Styling is responsive, with font sizes and layout adjustments based on the viewport width.

### Navigation

The component uses the `useRouter` hook from Next.js to handle page navigation. Functions like `goToSettingPage`, `goToHomePage`, and `goMapPage` are defined to navigate to different routes.

### Recommendations Modal

A modal is used to display detailed recommendations. The visibility of the modal is controlled by the `isModalVisible` state.

### Environment Variables

The component uses environment variables (e.g., `basePath`) to reference resources, ensuring that the component can adapt to different deployment environments.

## Example Usage

The `IntroductionPage` component is typically used as the landing page of the application. It is wrapped with a higher-order component `LanguageHelper` for localization support.

```
import IntroductionPage from './IntroductionPage';

// ... other imports ...

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={LanguageHelper(IntroductionPage)} />
        {/* ... other routes ... */}
      </Switch>
    </Router>
  );
};

export default App;
```

In the above example, the `IntroductionPage` is the default route and is enhanced with `LanguageHelper` for language support.

## Conclusion

The `IntroductionPage` component is a comprehensive and interactive entry point for users into the web application. It is designed to be both informative and engaging, with a responsive design that adapts to various device sizes. By leveraging the Ant Design library and Next.js framework, it provides a seamless user experience with support for internationalization.
