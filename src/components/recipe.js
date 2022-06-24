import React from "react";
import PropTypes from 'prop-types';


const Recipe = ({id, name, ingredients, mealType, onDelete}) => {
// props is going to an object with a list of ingredients
    
    const ingredientList = ingredients.map((ingredient, index) => {
        return(
            <li key={index}>{ingredient}</li>
        )
    })

    const onClickRemove = () => {
        onDelete(id)
    }

    return (
        <li className="recipes">
            <h3>{name}</h3>
            <h4>Ingredients:</h4>
                <ul class="ingredients">
                    {ingredientList}
                </ul>
            
            <h4>Meal Type: {mealType}</h4>
            <button onClick={onClickRemove}>Delete Recipe</button>

        </li>
    )

}

Recipe.propTypes = {
    name: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    mealType: PropTypes.string.isRequired
}

export default Recipe;