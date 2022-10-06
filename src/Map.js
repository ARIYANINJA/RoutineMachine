import React, { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import RoutineMachine from "./RoutineMachine";

const Map = () => {
  const [map, setMap] = useState(null);
  const routingMachineRef = useRef();
  const pluginRef = useRef();

  useEffect(() => {
    if (!map) return;
    const controlContainer = routingMachineRef.current.onAdd(map);
    pluginRef.current.appendChild(controlContainer);
  }, [map]);

  return (
    <div>
      <MapContainer
        doubleClickZoom={false}
        id="mapId"
        zoom={14}
        center={[47.9188, 106.91761]}
        whenCreated={setMap}
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
