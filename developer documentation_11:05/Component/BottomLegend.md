# BottomLegend



## Introduction

> The `BottomLegend` component is a React class-based component that renders a responsive scatter chart representing risk levels. It includes various customization options such as custom labels, reference shapes, and a popover for additional explanations.

## Dependencies

- `React` and `Component` from the react library.
- `withRouter` from next/router.
- Various components and helpers such as `LanguageHelper`, `ScatterChart`, `LoadingCard`, etc., from libraries like `recharts` and `antd`.

## Data Constants

Data constants like `dataLow`, `dataMedium`, etc., represent the data points to be displayed on the scatter chart.

## Custom Render Functions

Custom render functions like `renderCustomizedNowLabel`, `renderCustomizedMaxLabel`, etc., are defined to customize the appearance and position of labels and other elements in the scatter chart.

## Custom Shapes

Custom shapes like `CustomReferenceShape`, `CustomReferenceShapeMax`, etc., are defined to customize the appearance of reference lines or areas in the scatter chart.

## Main Component: `BottomLegend`

### Constructor and State Initialization

- The constructor initializes the state with default values and binds methods to the component’s context.
- The state includes various fields such as `componentSize`, `legendNow`, `translation`, and `loading`.

### Lifecycle Methods

- `componentDidMount` and `componentWillUnmount` are implemented for event listener management and other setup or cleanup tasks.

### Event Handlers

- Event handlers like `handleResize` are defined to manage component responsiveness.

### Render Methods

- Methods like `landScapeView` and `portialView` are defined to render the component differently based on screen size or orientation.
- Conditional rendering is utilized to display loading states or different views based on the component’s state and props.

### Export Component

- The component is exported wrapped with `withRouter` and `LanguageHelper` to provide routing and language support functionalities.

## Usage

This component, when used in a React application, will display a scatter chart representing risk levels with customized appearance and labels. It is responsive and will adjust its view based on the screen size or orientation.

### Example

Here is a simplified example of how you might use the `BottomLegend` component in a React application:

```
import React from 'react';
import BottomLegend from './path_to_your_component/BottomLegend';

function App() {
  return (
    <div>
      <h1>Risk Level Scatter Chart</h1>
      <BottomLegend 
        legendNow={yourDataForNow}
        legendMax={yourDataForMax}
        loading={yourLoadingState}
        // ...otherProps
      />
    </div>
  );
}

export default App;
```

In this example, `yourDataForNow`, `yourDataForMax`, and `yourLoadingState` should be replaced with your actual data and state.

## Additional Features

- **Popover**: A popover is included that displays additional explanations or information when clicked.
- **Loading State**: A loading card is displayed when the component is in a loading state.
- **Language Support**: The component includes language support functionalities, allowing for translations of labels and texts.

## Conclusion

The `BottomLegend` component is a comprehensive and customizable solution for displaying risk levels in a scatter chart format, with additional features like responsiveness, custom labels, and language support to enhance usability and user experience.
