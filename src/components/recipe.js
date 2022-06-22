import React from "react";


const Recipe = ({ mealType, name, ingredients, onDelete}) => {
// props is going to an object with a list of ingredients
    //BRAINS
    const ingredientElementsArray = ingredients.map((ingredient, index) => {
        return <li key={index}>{ingredient}</li>
    }) 


    // flow we'll see a lot especiall in handling forms
    // const onClickRemove = () => {
    //     onDelete(name)
    // }


    //BEAUTY
    return (
        // During class I made this into an empty element however, I changed this element
        // to a list item so that I can style each Recipe component
        <li className="recipes">
            <h3>{name}</h3>
            <h3>Ingredients:</h3>
                <ul>
                    {ingredientElementsArray}
                </ul>
            <h3>Meal Type: {mealType}</h3>
            <button onClick={() => onDelete(name)}>Delete Recipe</button>    
        </li>

    )
}


export default Recipe;