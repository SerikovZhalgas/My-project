import {combineReducers, createStore } from "redux";
import {ProfileReducer} from "./Reducers/ProfileReducer";
import {AuthReducer} from "./Reducers/AithReducer";

const rootReducer = combineReducers({
    profile: ProfileReducer,
    auth: AuthReducer
})

export type AppRootType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)

// @ts-ignore
window.store = store // for dev