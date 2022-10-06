import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";

const createRoutineMachineLayer = () => {
  console.log("leaflet", L);

  const instance = L.Routing.control({
    waypoints: [L.latLng(47.921, 106.91016), L.latLng(47.9158, 106.92025)],
    lineOptions: {
      styles: [{ color: "#74b6fc", opacity: "0.9", weight: 10 }],
    },
    show: false,
    addWaypoints: false,
    routeWhileDragging: true,
    draggableWaypoints: true,
    fitSelectedRoutes: true,
    showAlternatives: false,
  });

  return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;
