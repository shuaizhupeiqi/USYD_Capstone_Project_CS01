# Layout



## Introduction

> The `Layout` component is a standard structure used across all pages within a React application. It is responsible for loading the navigation bar (`NavBar`) and the footer (`Footer`), ensuring a consistent look and feel across the application. The component acts as a container for other components, providing a cohesive structure to the application's user interface.

## Structure

The `Layout` component is composed of three main parts:

- **NavBar**: The top bar of the application, used for navigation.
- **Content Area**: The central part of the layout where child components (`props.children`) are rendered.
- **Footer**: The bottom bar of the application.

## Styling

The component utilizes CSS modules for styling, specifically `indexStyle` from `index.module.css`. This approach encapsulates the styles and avoids conflicts with other global styles.

- `globalParentContainer`: A class applied to the outermost `div` that wraps the entire layout.
- `globalInnerContainer`: A class applied to the `div` that contains the child components. This ensures that any content passed to `Layout` is placed between the `NavBar` and `Footer`.

## Usage

The `Layout` component is designed to be used as a wrapper for the content of different pages. Here's an example of how to use the `Layout` component:

```
import Layout from './Layout';
import SomePageContent from '../components/SomePageContent';

function SomePage() {
  return (
    <Layout>
      <SomePageContent />
    </Layout>
  );
}

export default SomePage;
```

In this example, `SomePage` is a page component that renders specific content for that page. The `Layout` component wraps around `SomePageContent`, providing a consistent navigation bar and footer across the application.

## Implementation

Below is the implementation of the `Layout` component using CSS modules for styling:

```
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import indexStyle from "./../styles/index.module.css";

function Layout(props) {
  return (
    <div className={indexStyle.globalParentContainer}>
      <NavBar />
      <div className={indexStyle.globalInnerContainer}>
        {props.children}
      </div>
      <Footer />
    </div>
  );
}

// Exporting Layout for use in other parts of the application
export default Layout;
```

## Conclusion

The `Layout` component is a crucial part of the application's user interface, providing a consistent structure and style across different pages. By using CSS modules, it maintains style encapsulation and prevents global style conflicts. The component is flexible and can be used to wrap any content, making it an essential building block for the application's layout.
