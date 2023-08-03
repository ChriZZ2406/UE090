// Importieren der notwendigen Module und Funktionen
import React, { useState, useEffect } from 'react';
import { getWetter } from './wetterapi';  
import WeatherCard from './WeatherCard';
import AddCity from './AddCity';

// Hauptfunktion der Wetter-App
function App() {
  // Verwenden des useState-Hooks, um den Zustand der Städte zu verwalten
  const [cities, setCities] = useState(['Schwegenheim']);

  // Verwenden des useState-Hooks, um den Zustand der Wetterdaten zu verwalten
  const [weatherData, setWeatherData] = useState([]);

  // Funktion zum Hinzufügen neuer Städte
  const addCity = (city) => {
    setCities([...cities, city]);
  };

  // Funktion zum Löschen aller Städte
  const deleteAllCities = () => {
    setCities([]);
    setWeatherData([]);
  };

  // Verwenden des useEffect-Hooks, um die Wetterdaten abzurufen, wenn sich die Städte ändern
  useEffect(() => {
    const fetchWeatherData = async () => {
      // Speichert die Wetterdaten aller Städte
      const allWeatherData = [];
      // Durchlaufen aller Städte und Abrufen der Wetterdaten
      for (const city of cities) {
        const data = await getWetter(city);  // Hier ist der korrigierte Aufruf
        allWeatherData.push(data);
      }
      // Aktualisieren des weatherData-Zustands mit den abgerufenen Wetterdaten
      setWeatherData(allWeatherData);
    };
    // Aufrufen der Funktion zum Abrufen der Wetterdaten
    fetchWeatherData();
  }, [cities]);
// Was die Komponente zurückgibt, wird auf der Seite gerendert
return (
  <div style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: 'url(https://images.pexels.com/photos/912364/pexels-photo-912364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1) no-repeat center center fixed', 
    WebkitBackgroundSize: 'cover', 
    MozBackgroundSize: 'cover', 
    OBackgroundSize: 'cover', 
    backgroundSize: 'cover',
    minHeight: '100vh'  // Anpassung der Fensterhöhe, damit der Background gefüllt wird.
  }}>
    {/* Überschrift */}
    <h1 style={{fontFamily: "Lucida Console", fontSize: "3em"}}>Wetterdaten</h1>
    {/* Eingabefeld zum Hinzufügen neuer Städte */}
    <AddCity onAdd={addCity} />
    {/* Button zum Löschen aller Städte */}
    <button style={{backgroundColor: "red", color: "white"}} onClick={deleteAllCities}>Reset</button>
    {/* Für jede Stadt wird eine WeatherCard-Komponente gerendert */}
    {weatherData.map((cityWeatherData, index) => (
      <WeatherCard key={index} city={cityWeatherData} />
    ))}
  </div>
  );
}

// Exportieren der App-Komponente für die Verwendung in anderen Dateien
export default App;
