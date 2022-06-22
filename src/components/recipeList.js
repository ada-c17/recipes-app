import React from "react";
import PropTypes from 'prop-types';
import Recipe from './recipe';

const RecipeList = (props) => {
    // PART 1: BRAINS 
    //props is going to an array of objects
    const recipeComponentsArray = props.recipes.map((recipe, index) => {
        return (
            <Recipe
                key={index}
                name={recipe.name}
                ingredients={recipe.ingredients}
                mealType={recipe["meal-type"]}
                onDelete={props.onDelete}
            />
        )
    })

    // PART 2: BEAUTY creates the visual part of a component
    return (
        <>
            <h2>Recipe Count: {props.recipes.length}</h2>
            <button onClick={() => props.onDeleteAll()}>Delete All</button>    
            <section>
                <ul className="container">{recipeComponentsArray}</ul>
            </section>
        </>
    )
    
}

RecipeList.propType = {
    recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDelete: PropTypes.func.isRequired
}

export default RecipeList;