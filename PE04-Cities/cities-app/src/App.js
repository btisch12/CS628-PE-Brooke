import React, { useState } from "react";
import CitiesList from "./components/CitiesList";
import AddCity from "./components/AddCity";
import CityDetails from "./components/CityDetails";
import "./index.css"; // ✅ Ensure correct import

function App() {
  // Initial city data
  const [cities, setCities] = useState([
    { id: 1, name: "Seattle", country: "USA", population: "733,919" },
    { id: 2, name: "New York", country: "USA", population: "8,398,748" }
  ]);

  // View state: 'list', 'add', or a city id for details
  const [view, setView] = useState("list");
  const [selectedCity, setSelectedCity] = useState(null);

  // Function to add a new city
  const addCity = (newCity) => {
    setCities([...cities, { id: cities.length + 1, ...newCity }]);
    setView("list"); // Redirect back to city list
  };

  return (
    <div className="container">
      <h1>Cities Application</h1> {/*Ensure at least a heading is shown */}
      
      {/* Navigation */}
      <nav>
        <button onClick={() => setView("list")}>Cities List</button>
        <button onClick={() => setView("add")}>Add City</button>
      </nav>

      {/* Conditionally Render Components Based on State */}
      {view === "list" && <CitiesList cities={cities} setView={setView} setSelectedCity={setSelectedCity} />}
      {view === "add" && <AddCity addCity={addCity} setView={setView} />}
      {typeof view === "number" && <CityDetails city={selectedCity} setView={setView} />}
    </div>
  );
}

export default App;
