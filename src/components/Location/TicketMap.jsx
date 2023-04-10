import React from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";

function TicketMap() {
  const lat = 38.8951;
  const lng = -77.0364;
  return (
    <div className="leafletContainer">
      <MapContainer
        style={{ height: "100%", width: "100%" }}
        center={[lat, lng]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png"
        />

        <Marker position={[lat, lng]}></Marker>
      </MapContainer>
    </div>
  );
}

export default TicketMap;
