# Footer



## Introduction

> The `Footer` component is a reusable React component that serves as the footer for all pages within an application. It prominently features the University of Sydney's branding, including its name and logo, to maintain a consistent and professional appearance across the site.

## Implementation

### Layout and Styling

The footer uses the `Layout` component from Ant Design to provide a container for its content. It is styled with padding and theming consistent with the rest of the website.

```
<Layout
  id={footerStyle.layout}
  style={{ padding: "1rem" }}
  className={generalStyle.WebsiteTheme}
>
  {/* Content goes here */}
</Layout>
```

### Content Structure

Within the `Layout`, a `Row` component is used to horizontally align the content. The `Row` is configured to justify the space between its child elements and align them in the middle.

```
<Row
  justify="space-between"
  align="middle"
  id={footerStyle.mainRow}
>
  {/* Columns go here */}
</Row>
```

### Copyright Information

The first column within the `Row` displays the copyright information, ensuring that it spans half of the available width.

```
<Col span={12}>
  {this.state.translation.copyright}
</Col>
```

### University Logo

The second column contains an image of the University of Sydney logo. The image source is dynamically set using the `basePath` variable, which allows for flexible deployment paths.

```
<Col>
  <Image
    src={`${basePath}/icons/usyd-logo.png`}
    alt="University of Sydney"
    width={120}
    preview={false}
  />
</Col>
```

## Features

- **Responsive Design**: The footer is responsive, adjusting to the width of the viewport to maintain a visually appealing layout across different devices.
- **Internationalization**: The component supports internationalization, allowing for the display of the copyright text in multiple languages.
- **Branding Consistency**: By including the university's logo and name, the footer contributes to a consistent branding experience throughout the application.

## Usage

The `Footer` component is designed to be placed at the bottom of all pages within the application. It should be included in the page layout after the main content sections.

## Conclusion

The `Footer` component is a key part of the user interface, providing important branding and copyright information in a clean and responsive layout. Its use of Ant Design components and React best practices makes it an efficient and easy-to-maintain piece of the application's overall design.

