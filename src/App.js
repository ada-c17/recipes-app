import './App.css';
import React, {useState} from 'react';
import RecipeList from './components/recipeList';
import NewRecipeForm from './components/NewRecipeForm';
import recipeData from "./data/recipeData.json"

function App() {

  const [recipes, setRecipes] = useState(recipeData);

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
      <NewRecipeForm />
      <RecipeList recipes={recipes} onDelete={onDelete}/>
    </main>
  );
}

export default App;
