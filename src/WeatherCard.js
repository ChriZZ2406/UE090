import React from 'react';

function WeatherCard({ city }) {
  // Notwendige Informationen aus den Wetterdaten extrahieren
  const { name, main, weather } = city;

  return (
    <div style={{ fontWeight: 'bolder' }}>
      {/* Anzeige des Stadtnamens */}
      <h2>{name}</h2>  
      {/* Anzeige der Wetterbeschreibung */}
      <p>{weather[0].description}</p>
      {/* Anzeige der Temperatur */}
      <p>{main.temp} °C</p> 
      {/* Anzeige der Luftfeuchtigkeit */}
      <p>{main.humidity} %</p> 
    </div>
  );
}

export default WeatherCard;
