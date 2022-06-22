import './App.css';
import React, {useState} from 'react';
import RecipeList from './components/recipeList'
import recipeData from "./data/recipeData.json"

function App() {

  const [recipes, setRecipes] = useState(recipeData);

  const onDelete = (name) => {
    const newRecipes = recipes.filter((recipe) => {
      return recipe.name !== name;
    })

    setRecipes(newRecipes)
  }

  const onDeleteAll = () => {
    setRecipes([])
  }

  return (
    <main>
      <h1>Recipe App</h1>
      <RecipeList recipes={recipes} onDeleteAll={onDeleteAll} onDelete={onDelete}/>
    </main>
  );
}

export default App;
