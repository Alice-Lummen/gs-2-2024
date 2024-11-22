// import React from "react";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import L from "leaflet";
// import ChargeGo from "@/../public/images/chargeGo.png";
// import "leaflet/dist/leaflet.css";

// // Coordenadas dos pontos que você deseja marcar
// const pontos = [
//   { lat: -23.625336547758145, lng: -46.6584138489513, nome: "ChargeGo 1", rua: "Vila Congonhas, São Paulo - SP, 04626-911"},
//   { lat: -22.906549710098904, lng: -43.17319070744876, nome: "ChargeGo 2", rua: "Av. Pres. Antônio Carlos - Centro, Rio de Janeiro - RJ, 20020-010"},
//   { lat: -25.4284, lng: -49.2733, nome: "ChargeGo 3", rua: "São Francisco, Curitiba - PR, 13484-015"},
//   { lat: -23.556399562591352, lng: -46.662069445592046, nome: "ChargeGo 4", rua: "Praça do Ciclista - Bela Vista, São Paulo - SP, 01415-002"},
// ];

// export default function Mapa() {

//   return (
//     <div className="flex flex-col md:flex-row w-full h-full p-5">
//       <div className="flex flex-col text-2xl font-bold h-64 md:h-[500px]">
//         <h2 className="text-2xl font-bold" style={{color: 'var(--verde-normal)'}}>PONTOS DE RECARGA</h2>
//         <ul className="flex flex-col gap-2 justify-evenly h-full">
//           {pontos.map((ponto, index) => (
//             <>
//             <li key={index} className="text-green-900 hover:text-green-700 cursor-pointer">{ponto.nome}</li>
//             <p className="text-xs">{ponto.rua}</p>
//             </>
//           ))}
//         </ul>
//       </div>
//       <div className="w-[500px] flex h-[500px] items-center justify-center">

//       <MapContainer
//         center={[-23.55052, -46.633308]} // Coordenadas iniciais do mapa
//         zoom={6}
//         style={{ height: "100%", width: "100%", border: '3px solid var(--verde-normal)' }}
//         className="rounded-full"
//       >
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />

//         {/* Marcadores */}
//         {pontos.map((ponto, index) => (
//           <Marker
//             key={index}
//             position={[ponto.lat, ponto.lng]}
//             icon={L.icon({
//               iconUrl: ChargeGo.src,
//               iconSize: [25, 41],
//               iconAnchor: [12, 41],
//               popupAnchor: [1, -34],
//             })}
//           >
//             <Popup>{ponto.nome}</Popup>
//           </Marker>
//         ))}
//       </MapContainer>
//         </div>
//     </div>
//   );
// }
