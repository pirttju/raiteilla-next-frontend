"use client";

import { useState, useEffect } from "react";
import Map from "react-map-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { getVehicleLocations } from "@/lib/api";
import { MapData } from "@/types";

export default function MapComponent() {
  const [viewport, setViewport] = useState({
    longitude: 24.9384,
    latitude: 60.1699,
    zoom: 10,
  });
  const [vehicleData, setVehicleData] = useState<MapData | null>(null);

  useEffect(() => {
    const fetchVehicleData = async () => {
      const bbox = `${viewport.latitude - 0.1},${viewport.longitude - 0.1},${
        viewport.latitude + 0.1
      },${viewport.longitude + 0.1}`;
      const data = await getVehicleLocations(bbox);
      setVehicleData(data);
    };

    fetchVehicleData();
  }, [viewport]);

  return (
    <Map
      {...viewport}
      style={{ width: "100%", height: "500px" }}
      mapStyle="https://sv1.raiteilla.fi/maps/osm-light/style.json"
      onMove={(evt) => setViewport(evt.viewState)}
    >
      {/* TODO: render markers for the vehicle locations here */}
    </Map>
  );
}