import './App.css';
import React, {useState, useEffect} from 'react';
import RecipeList from './components/recipeList';
import recipeData from "./data/recipeData.json";
import axios from 'axios';
const URL = "http://localhost:5000/desserts"
function App() {

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        setRecipes(response.data)
      })
  }, [])

  const onDelete = (id) => {
    const newRecipes = recipes.filter((recipe) => {
      console.log(recipe)
      // we only want to add the recipe to the array if it's id does not equal the id of the recipe we want to remove
      return recipe.id !== id;
    });
    console.log(newRecipes);
    setRecipes(newRecipes);
  }

  return (
    <main>
      <h1>Recipe App</h1>
      <RecipeList recipes={recipes} onDelete={onDelete}/>
    </main>
  );
}

export default App;
