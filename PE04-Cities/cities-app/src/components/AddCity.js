import { useState } from "react";

const AddCity = ({ addCity, setView }) => {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [population, setPopulation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addCity({ name, country, population });
    setView("list"); // Redirect back to Cities List
  };

  return (
    <div>
      <h2>Add City</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="text" placeholder="Country" value={country} onChange={(e) => setCountry(e.target.value)} required />
        <input type="text" placeholder="Population" value={population} onChange={(e) => setPopulation(e.target.value)} required />
        <button type="submit">Add City</button>
      </form>
      <button onClick={() => setView("list")}>Cancel</button>
    </div>
  );
};

export default AddCity;
