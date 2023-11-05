import React, { useState, useEffect } from 'react';

function CustomizedMap(props) {
// Replace this.state with useState
  const [MapComponent, setMapComponent] = useState(null);

// Replace componentDidMount with useEffect
  useEffect(() => {
//Define an asynchronous function to dynamically load components
    async function loadComponent() {
      const ImportedMapComponent = (await import("./../components/Map")).default;
      setMapComponent(() => ImportedMapComponent); // Use setMapComponent to update state instead of this.setState
    }

    loadComponent(); // Call the asynchronous function
  }, []); // Passing an empty array ensures that useEffect is only executed when the component is mounted, similar to componentDidMount

  return (
    <div style={{ height: "30vh" }}>
      {MapComponent && (
        <MapComponent
          center={props.centerCoordinates}
          marker={props.markerCoordinates}
          content={props.content}
        />
      )}
    </div>
  );
}

export default CustomizedMap;