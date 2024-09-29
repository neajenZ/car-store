import { configureStore } from "@reduxjs/toolkit"
import MainSlice from "../slice/mainSlice"

export const store = configureStore({
    reducer: {
        mainStore: MainSlice
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware()
            .prepend()
    })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch