import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IInitialState } from "./model";
import { Car } from "../../graphql/generated";

const initialState: IInitialState = {
    favorites: []
}

export const MainSlice = createSlice({
    name: 'mainStore',
    initialState,
    reducers: {
        addToFavorites (state, action: PayloadAction<Car>) {
            state.favorites.push(action.payload)
        },
        removeFromFavorites (state, action: PayloadAction<number>) {
            state.favorites = state.favorites.filter((i) => i.id !== action.payload)
        },

    }
})

export const {
    addToFavorites, removeFromFavorites
} = MainSlice.actions

export default MainSlice.reducer 