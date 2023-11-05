# Map



## Introduction

> The `MapComponent` is a specialized React component used at the bottom of the homepage and is invoked by `CustomizedMap.js`. It integrates with the `react-leaflet` library to render an interactive map, displaying a marker with an associated popup. The component is designed to be responsive and user-friendly, with gesture handling for touch devices.

## Prerequisites

Ensure the following libraries and stylesheets are included in your project:

- `react-leaflet` for map components.
- `leaflet` as the core mapping library.
- `leaflet-gesture-handling` for enhanced touch gesture support.
- Leaflet's CSS and gesture handling's CSS for proper styling.

## Environment Configuration

The `basePath` constant is used to define the path for loading resources:

```
const basePath = process.env.NEXT_PUBLIC_BASE_PATH;
```

Set the `NEXT_PUBLIC_BASE_PATH` environment variable to the correct base path for your project.

## Leaflet Extensions

A new pane is created to ensure that popups appear above other map layers:

```
L.Map.include({
  _initPopupPane: function () {
    const pane = (this._popupPane = this.createPane("leaflet-popup-pane"));
    pane.style.zIndex = 650;
  },
});
```

## Component Rendering

The map is rendered using the `MapContainer` component with props for center coordinates and zoom level:

```
<MapContainer center={center} zoom={13} gestureHandling={true} style={{ height: "100%", width: "100%" }}>
  // ... TileLayer and Marker
</MapContainer>
```

`TileLayer` is used to display the map tiles, sourced from OpenStreetMap's tile server:

```
<TileLayer
  attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
/>
```

A `Marker` is placed on the map with a custom icon, and a `Popup` displays additional information:

```
<Marker position={marker} icon={customIcon}>
  <Popup style={{ maxHeight: "30vh", maxWidth: "80vw", overflowY: "auto", overflowX: "hidden" }}>
    {content}
  </Popup>
</Marker>
```

## Custom Icon

A custom icon for the marker is defined using the `L.icon` method, with image paths based on the `basePath`:

```
let customIcon = L.icon({
  iconUrl: basePath + "/leaflet/images/marker-icon.png",
  // ... other properties
});
```

## Gesture Handling

Gesture handling is enabled to provide a better touch and scroll experience on touch devices:

```
L.Map.addInitHook("addHandler", "gestureHandling", GestureHandling);
```

## Example Usage

```
<MapComponent
  center={[51.505, -0.09]}
  marker={[51.505, -0.09]}
  content={<div>Latitude: 51.505, Longitude: -0.09</div>}
/>
```

## Conclusion

In summary, the `MapComponent` is a comprehensive React component encapsulating map display functionality. It showcases a center point, a marker, and a popup associated with that marker. When used in conjunction with `CustomizedMap.js`, it achieves asynchronous functionality handling, making it a robust solution for interactive map displays in modern web applications.