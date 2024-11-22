import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import ChargeGo from "@/../public/images/chargeGo.png";
import "leaflet/dist/leaflet.css";

// Coordenadas dos pontos que você deseja marcar
const pontos = [
  { lat: -23.55052, lng: -46.633308, nome: "ChargeGo 1" },
  { lat: -22.9068, lng: -43.1729, nome: "ChargeGo 2" },
  { lat: -25.4284, lng: -49.2733, nome: "ChargeGo 3" },
];

export default function Mapa() {
  return (
    <div style={{ height: "500px", width: "500px"}}>
      <MapContainer
        center={[-23.55052, -46.633308]} // Coordenadas iniciais do mapa
        zoom={6}
        style={{ height: "100%", width: "100%" }}
      >
        {/* Mapa de fundo (OpenStreetMap) */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Marcadores */}
        {pontos.map((ponto, index) => (
          <Marker
            key={index}
            position={[ponto.lat, ponto.lng]}
            icon={L.icon({
              iconUrl: ChargeGo,
              iconSize: [25, 41],
              iconAnchor: [12, 41],
              popupAnchor: [1, -34],
            })}
          >
            <Popup>{ponto.nome}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
