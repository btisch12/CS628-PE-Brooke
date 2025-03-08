// Home.js
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to Recipe Finder!</h1>
      <p>Discover new recipes and manage your own collection.</p>
      <Link to="/recipes">View Recipes</Link>
    </div>
  );
}

export default Home;
