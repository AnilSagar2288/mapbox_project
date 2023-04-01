import React, { useEffect, useState } from "react";
import ReactMapGL, {
  Marker,
  NavigationControl,
  GeolocateControl,
  FullscreenControl,
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const MapComponent = ({ locationData }) => {
  const [lat, setLat] = useState(locationData.loc_latitude);
  const [lon, setLon] = useState(locationData.loc_longitude);

  useEffect(() => {
    setLon(locationData.loc_longitude);
    setLat(locationData.loc_latitude);
  }, [locationData]);
  return (
    <div>
      <ReactMapGL
        style={{
          width: "100vw",
          height: "calc(100vh - 91px)",
          padding: "0px",
          margin: "0px",
        }}
        mapboxAccessToken="pk.eyJ1IjoibWF1cnlhMzM1IiwiYSI6ImNsZnRocms5dDAxMXczbm9iYXk2NHB2cWkifQ.unde_msNhcTbjUMGB3jK0w"
        initialViewState={{
          longitude: lon,
          latitude: lat,
          zoom: 3.6,
        }}
        mapStyle="mapbox://styles/maurya335/clftol1nu015r01pep13p4ym0"
      >
        <Marker longitude={lon} latitude={lat} />
        <NavigationControl position="bottom-right" />
        <GeolocateControl />
        <FullscreenControl />
      </ReactMapGL>
    </div>
  );
};

export default MapComponent;
