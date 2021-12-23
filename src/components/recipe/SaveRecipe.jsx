import React from 'react';

const SaveRecipe = ({recipe}) => {
    return (
        <div>
            <form action="">
                <input type="hidden" name="recipeName" value={recipe.recipeName} />
            </form>
        </div>
    );
};

export default SaveRecipe;