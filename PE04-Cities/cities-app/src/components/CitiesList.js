const CitiesList = ({ cities, setView, setSelectedCity }) => {
    return (
      <div>
        <h2>Cities List</h2>
        {cities.map((city) => (
          <div key={city.id}>
            <button onClick={() => { setSelectedCity(city); setView(city.id); }}>
              {city.name}
            </button>
          </div>
        ))}
      </div>
    );
  };
  
  export default CitiesList;
  
  