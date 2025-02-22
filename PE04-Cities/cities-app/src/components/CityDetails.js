const CityDetails = ({ city, setView }) => {
    return (
      <div>
        <h2>{city.name} Details</h2>
        <p><strong>Country:</strong> {city.country}</p>
        <p><strong>Population:</strong> {city.population}</p>
        <button onClick={() => setView("list")}>Back to Cities List</button>
      </div>
    );
  };
  
  export default CityDetails;
  