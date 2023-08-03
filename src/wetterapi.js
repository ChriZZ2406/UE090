// Importieren der axios-Bibliothek, die für das Senden von HTTP-Anfragen verwendet wird
import axios from 'axios';

// Basis-URL für die OpenWeatherMap-API
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

// API-Schlüssel für die OpenWeatherMap-API
const API_KEY = 'cc156d81da850e3b4317025986762d83';  

// Funktion zum Abrufen von Wetterdaten für eine bestimmte Stadt
export const getWetter = async (stadt) => {
  try {
    // axios.get sendet eine GET-Anfrage an die angegebene URL
    // Die Parameter der Anfrage werden als Objekt übergeben
    // In diesem Fall sind die Parameter: q (der Name der Stadt), appid (der API-Schlüssel) und units (die Einheitensystem)
    const response = await axios.get(BASE_URL, {
      params: {
        q: stadt,
        appid: API_KEY,
        units: 'metric',  // Wetterdaten in metrischen Einheiten
      },
    });

    // Die Antwort der Anfrage wird zurückgegeben
    return response.data;

  } catch (error) {  // Fehlerbehandlung für den Fall, dass der API-Aufruf fehlschlägt
    // Fehler in der Konsole ausgeben
    console.error(`Fehler beim Abrufen der Wetterdaten für ${stadt}: `, error);

    // Fehler weiterwerfen, um ihn in der Komponente zu behandeln
    throw error;  
  }
};
