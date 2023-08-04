// Importieren der notwendigen Hooks von React
import React, { useState } from "react";

// Definieren der Funktion für die AddCity-Komponente
// Diese Komponente erhält eine Funktion als Prop, die aufgerufen wird, wenn eine Stadt hinzugefügt wird
function AddCity({ onAdd }) {

  // Verwenden des useState Hooks, um den Zustand der Stadt zu verwalten, die gerade eingegeben wird
  const [city, setCity] = useState("");

  // Definieren der Funktion, die aufgerufen wird, wenn das Formular abgesendet wird
  const onSubmit = (e) => {
    // Verhindern des Standardverhaltens des Formulars, um eine vollständige Seitenaktualisierung zu vermeiden
    e.preventDefault();

    // Aufrufen der onAdd Funktion mit der eingegebenen Stadt
    onAdd(city);

    // Zurücksetzen des Eingabefeldes
    setCity("");
  };

  // Rendern des Formulars
  return (
    <form onSubmit={onSubmit}>
      {/* Textfeld zur Eingabe der Stadt, bindet den city Zustand und setzt diesen bei Änderungen neu */}
      <input
        type="text"
        placeholder="Stadt hinzufügen..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      {/* Absenden-Button, der das Formular absendet, wenn er angeklickt wird */}
      <button type="submit" style={{backgroundColor: "green", color: "white"}}>Stadt</button>
    </form>
  );
}

// Exportieren der Komponente, um sie in anderen Dateien verwenden zu können
export default AddCity;
