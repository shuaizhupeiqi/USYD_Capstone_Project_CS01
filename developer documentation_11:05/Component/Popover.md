# Popover



## Introduction

> The `PopOver` component is a specialized modal dialog box used within the `HssRiskDisplay.js` and `AgeGroupRisk.js` files in a React application. It is distinct from a similarly named method from Ant Design used in `settingpage`. This component is specifically designed to display suggestions or advice when a user interacts with a risk element on the homepage.

## Prerequisites

Ensure that `antd` and `recoil` are installed in your project for UI components and state management respectively. Additionally, `next/router` should be present if routing capabilities are required.

## Importing

Import the `PopOver` component where it's needed:

```
import PopOver from './path/to/PopOver';
```

## State Management

- `isModalOpen`: A boolean state managed by `useState` to control the visibility of the modal, initialized to `false`.

## Methods

- `showModal`: A function to display the modal and stop event propagation, ensuring that clicking outside the modal does not trigger other click events.
- `handleOk` and `handleCancel`: Functions to close the modal and stop event propagation. Despite their names, they perform the same action and could be used interchangeably.

## Rendering

- The component clones the `child` prop using `React.cloneElement`, attaching an `onClick` event handler to trigger the modal display.
- A `Modal` component from Ant Design is rendered, controlled by the `isModalOpen` state. The content of the modal is determined by the `content` prop, and the content area is styled with `scrollablePopupContent` for scrollable content.

## Usage

Wrap any component with `PopOver` to transform it into a trigger for displaying the modal. When the trigger is clicked, the modal appears with the provided content.

```
<PopOver content={<div>Suggestion Content Here</div>}>
  <button>Display Suggestion</button>
</PopOver>
```

## Example

Here's how to use the `PopOver` component within a component to display advice or suggestions:

```
import React from 'react';
import PopOver from './PopOver';

const RiskAdvice = () => {
  return (
    <PopOver content={<p>Advice or suggestion related to the risk.</p>}>
      <button>Show Advice</button>
    </PopOver>
  );
};

export default RiskAdvice;
```

## Additional Notes

- The component is wrapped with `withRouter` HOC, indicating it has access to router properties, although the current implementation does not explicitly utilize routing features.

## Conclusion

The `PopOver` component provides a straightforward way to add modal functionality to an application. Developers simply provide a trigger component (`child` prop) and the content for the modal (`content` prop), and the `PopOver` handles the rest, making it an efficient solution for displaying suggestions or advice in response to user interactions.
