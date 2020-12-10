import {combineReducers} from "redux";
import {dataReducer} from "./dataReudcer";

export const rootReducer = combineReducers({
    dataReducer
})

export type rootState = ReturnType<typeof rootReducer>;

