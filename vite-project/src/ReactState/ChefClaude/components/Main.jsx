import { useState } from "react";

function Main() {
    const [ingredients, setIngredients] = useState(["Chicken", "Oregano", "Tomatoes"]);
    const ingredientElements = ingredients.map(ingredient => {
        return <li key={ingredient}>{ingredient}</li>
    });

    function submittedForm(event){
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const newIngredient = formData.get("ingredient");
        
        setIngredients(prevIngredients => [...prevIngredients, newIngredient]);
    }

    return (
        <main>
            <form onSubmit={submittedForm} className="add-ingredient-form">
                <input 
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            <ul>
                {ingredientElements}
            </ul>
        </main>
    )
}

export default Main