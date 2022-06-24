import React, {useState} from "react";
import PropTypes from 'prop-types';


const NewRecipeForm = ({ addRecipeCallback }) => {
// props is going to an object with a list of ingredients

    const [recipeData, setRecipeData] = useState({
        name: '',
        ingredients: ''
    })

    const submitDessertData = (e) => {
        e.preventDefault();
        addRecipeCallback();

        addRecipeCallback(recipeData);
        setRecipeData({ name: '', ingredients: ''});
    }

    const handleChange = e => {
        setRecipeData({ ...recipeData, [e.target.name]: e.target.value})
    }


    return (
        <form onSubmit={submitDessertData} className="new-dog__form">
        <section>
            <h2>Add a Dog</h2>
            <div className="new-dog__fields">
            <label htmlFor="name">Name</label>
            <input
                name="name"
                id="name"
                value={recipeData.name}
                onChange={handleChange}
            />
            <label htmlFor="name">Ingredients</label>
            <input
                name="ingredients"
                id="ingredients"
                value={recipeData.ingredients}
                onChange={handleChange}
            />

            <button className="button new-dog__submit" type="submit">
                Add Dessert
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