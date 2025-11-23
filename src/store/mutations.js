
export const setMealsByLetter = (state,meals) => {
    state.mealsByLetter = meals || []
}

export const setMealsByName = (state,meals) => {
    state.mealsByName = meals || []
}

export const setMealsByIngredient = (state,meals) => {
    state.mealsByIngredient = meals || []
}