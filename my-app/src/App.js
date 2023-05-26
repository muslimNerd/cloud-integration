import React, { useState } from "react";
import ReactDOM from "react-dom";
import GoogleMapReact from "google-map-react";

const App = () => {
  const [location, setLocation] = useState({
    lat: 37.4419,
    lng: -122.1419,
  });

  const onMapClick = (event) => {
    setLocation({
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    });
  };

  return (
    <div>
      <GoogleMapReact
        mapContainerStyle={{ width: "100vw", height: "100vh" }}
        center={location}
        zoom={15}
        onMapClick={onMapClick}
      >
        <Marker
          key={location.lat + location.lng}
          position={location}
        />
      </GoogleMapReact>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
