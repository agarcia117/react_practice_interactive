import { useEffect, useRef, useState } from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";
import {getRecipeFromMistral } from "../ai.js"

function Main() {

    const [ingredients, setIngredients] = useState(['pasta', 'heavy cream', 'all the main spices', 'chicken', 'corn']);
    const [recipeShown, setRecipeShown] = useState(false);
    const [recipe, setRecipe] = useState('');
    const recipeSection = useRef(null);

    useEffect(() => {
        if(recipe !== "" && recipeSection.current !== null){
            recipeSection.current.scrollIntoView({behavior: "smooth"});
        }
    }, [recipe]);
    
    async function addIngredient(formData){
        const newIngredient = formData.get("ingredient");
        setIngredients(prevIngredients => [...prevIngredients, newIngredient]); 
    }

    async function getRecipe(){
        const recipeMarkdown = await getRecipeFromMistral(ingredients);
        
        setRecipe(recipeMarkdown);
        setRecipeShown(prev => !prev);
    }

    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input 
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            {ingredients.length > 0 ? <IngredientsList
                                        ref={recipeSection} 
                                        ingredients={ingredients} 
                                        getRecipe={getRecipe}/> : null}

            {recipeShown ? <ClaudeRecipe recipeShown={recipeShown} data={recipe}/> : null}
        </main>
    )
}

export default Main