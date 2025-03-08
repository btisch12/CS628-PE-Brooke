import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddRecipe() {
  const [recipe, setRecipe] = useState({ name: '', ingredients: '', instructions: '' });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const recipeData = {
      ...recipe,
      ingredients: recipe.ingredients.split(','),
    };
    axios.post('http://localhost:5000/api/recipes', recipeData)
      .then(() => navigate('/'));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Recipe Name" value={recipe.name} onChange={e => setRecipe({...recipe, name: e.target.value})} required/>
      <input placeholder="Ingredients (comma-separated)" value={recipe.ingredients} onChange={e => setRecipe({...recipe, ingredients: e.target.value})} required/>
      <textarea placeholder="Instructions" value={recipe.instructions} onChange={e => setRecipe({...recipe, instructions: e.target.value})} required/>
      <button type="submit">Add Recipe</button>
    </form>
  );
}

export default AddRecipe;
