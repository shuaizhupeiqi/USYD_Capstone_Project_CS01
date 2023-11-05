# Mapnewfunc



## Introduction

> The `MapComponent` is a React component that utilizes the `react-leaflet` library to render an interactive map. It allows users to click on the map to place a custom marker and retrieve the coordinates of that location. This component is ideal for applications that require users to select a location on a map and possibly perform actions based on the selected coordinates.

## Installation

Before using the `MapComponent`, ensure you have installed the `react-leaflet` and `leaflet` packages in your project. You can install them using npm or yarn:

```
npm install leaflet react-leaflet
```

or

```
yarn add leaflet react-leaflet
```

## Usage

To use the `MapComponent`, import it into your React component and define a handler for the `onMapClick` event to receive the coordinates:

```
import MapComponent from './MapComponent';

function MyMap() {
  const handleMapClick = (coordinates) => {
    console.log(coordinates);
  };

  return <MapComponent onMapClick={handleMapClick} />;
}
```

## Component Props

- `onMapClick`: A callback function that is called when the map is clicked. It receives the clicked coordinates as an argument.

## Code Example

Here is a simplified example of the `MapComponent`:

```
import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH;

const customIcon = L.icon({
  iconUrl: `${basePath}/leaflet/images/marker-icon.png`,
  // ... other icon properties
});

const MapComponent = ({ onMapClick }) => {
  const [markerPosition, setMarkerPosition] = useState(null);

  const handleClick = (e) => {
    const newCoordinates = e.latlng;
    setMarkerPosition(newCoordinates);
    if (onMapClick) {
      onMapClick(newCoordinates);
    }
  };

  return (
    <MapContainer
      center={markerPosition || [51.505, -0.09]}
      zoom={13}
      style={{ height: '50vh', width: '90vw' }}
      whenCreated={(map) => {
        map.on('click', handleClick);
      }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; OpenStreetMap contributors'
      />
      {markerPosition && (
        <Marker position={markerPosition} icon={customIcon} />
      )}
    </MapContainer>
  );
};

export default MapComponent;
```

## Styling

The `MapComponent` has a default style for its height and width, but you can customize it by passing a `style` prop:

```
<MapComponent style={{ height: '100vh', width: '100vw' }} />
```

## Conclusion

The `MapComponent` is a versatile tool for adding interactive map functionality to your React application. It is lightweight, easy to use, and customizable, making it a great choice for projects that require map interactions.