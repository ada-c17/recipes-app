import React, {useState} from "react";
import PropTypes from 'prop-types';


const NewRecipeForm = ({ addRecipeCallback }) => {
// props is going to an object with a list of ingredients

    return (
        <form onSubmit="" className="new-dog__form">
        <section>
            <h2>Add a Dog</h2>
            <div className="new-dog__fields">
            <label htmlFor="name">Name</label>
            <input
                name="name"
                id="name"
                value=""
                onChange=""
            />
            <label htmlFor="name">Ingredients</label>
            <input
                name="ingredients"
                id="ingredients"
                value=""
                onChange=""
            />

            <button className="button new-dog__submit" type="submit">
                Add Recipe
            </button>
            </div>
            </section>
        </form>
    )

}

NewRecipeForm.propTypes = {
    addRecipeCallback: PropTypes.func.isRequired 
}

export default NewRecipeForm;