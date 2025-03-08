import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import axios from 'axios';

function RecipeList() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/recipes')
      .then(res => setRecipes(res.data));
  }, []);

  return (
    <div>
      <h2>Recipes</h2>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe._id}>
            <Link to={`/${recipe._id}`}>{recipe.name}</Link>
            {' | '}
            <Link to={`/edit/${recipe._id}`}>Edit</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}

export default RecipeList;
