import React, { useRef } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import RoutineMachine from "./RoutineMachine";

const Map = () => {
  const routingMachineRef = useRef();

  return (
    <div>
      <MapContainer
        doubleClickZoom={false}
        id="mapId"
        zoom={14}
        center={[47.9188, 106.91761]}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <RoutineMachine ref={routingMachineRef} />
      </MapContainer>
    </div>
  );
};

export default Map;
