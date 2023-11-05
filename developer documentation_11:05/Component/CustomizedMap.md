# CustomizedMap



## Introduction

> The `CustomizedMap` component is designed to asynchronously load a map component from `map.js`, enabling the map's features to be utilized in conjunction with the homepage. It serves as a lightweight loader that defers the loading of the actual map component until it is required, which can improve the performance of the homepage by reducing the initial load time.

## Implementation Details

### Asynchronous Loading

The component uses an asynchronous import to load the `Map` component from the `components/Map` directory. This is achieved using the `async` keyword in conjunction with `await` within the `componentDidMount` lifecycle method.

### State Management

Upon successful loading of the `Map` component, it updates the component's state with the loaded component, which is then used for rendering.

### Props

The `CustomizedMap` component expects the following props:

- `centerCoordinates`: Coordinates to center the map on.
- `markerCoordinates`: Coordinates where a marker should be placed.
- `content`: Content to be displayed within the map, such as marker labels or information windows.

These props are passed down to the dynamically loaded `Map` component to customize its appearance and behavior.

## Code Example

```
import React, { Component } from 'react';

class CustomizedMap extends Component {
  state = {
    MapComponent: null,
  };

  async componentDidMount() {
    const MapComponent = (await import("./../components/Map")).default;
    this.setState({ MapComponent });
  }

  render() {
    const { MapComponent } = this.state;
    return (
      <div style={{ height: "30vh" }}>
        {MapComponent && (
          <MapComponent
            center={this.props.centerCoordinates}
            marker={this.props.markerCoordinates}
            content={this.props.content}
          />
        )}
      </div>
    );
  }
}

export default CustomizedMap;
```

## Usage

To use the `CustomizedMap` component within the homepage or any other component:

1. Ensure that the `Map` component is correctly exported from the `components/Map` directory.
2. Pass the required `centerCoordinates`, `markerCoordinates`, and `content` props to the `CustomizedMap` component.

## Conclusion

The `CustomizedMap` component is a strategic implementation for lazy-loading a map component within an application. It is particularly useful for applications that do not require a map immediately upon page load, allowing for a more efficient use of resources and improved user experience.
