import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/users");
        if (!response.ok) {
          throw new Error("Error Response was not ok");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.log("Fehler beim Abrufen der Daten:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>MERN STACK Übung</h1>
      <h2>Liste der Objekte:</h2>
      <ul>
        {data.map((obj) => (
          <li key={obj._id}>
            {obj.name} - {obj.username} - {obj.age}
          </li>
          // Hier sollte "name" und "beschreibung" durch die entsprechenden Felder deiner Objekte ersetzt werden
        ))}
      </ul>
    </div>
  );
}

export default App;
