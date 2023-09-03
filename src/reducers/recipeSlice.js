import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recipes:[]
}

export const recipeSlice = createSlice({
  name: "Recipe",
  initialState,
  reducers: {
    addRecipes: (state, action) => {
      state.recipes = action.payload; 
    }
  }
})

export const {addRecipes} = recipeSlice.actions;

export default recipeSlice.reducer;