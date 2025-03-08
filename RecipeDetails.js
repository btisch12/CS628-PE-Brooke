import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function RecipeDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/recipes/${id}`)
      .then(res => setRecipe(res.data));
  }, [id]);

  const handleDelete = () => {
    axios.delete(`http://localhost:5000/api/recipes/${id}`)
      .then(() => navigate('/'));
  };

  if (!recipe) return <div>Loading...</div>;

  return (
    <div>
      <h2>{recipe.name}</h2>
      <h3>Ingredients:</h3>
      <ul>{recipe.ingredients.map((ing, idx) => <li key={idx}>{ing}</li>)}</ul>
      <h3>Instructions:</h3>
      <p>{recipe.instructions}</p>
      <button onClick={handleDelete}>Delete Recipe</button>
    </div>
  );
}

export default RecipeDetails;
