import { combineReducers } from "redux";
import { customersData } from "./customers/reducer";

export const rootReducer = combineReducers({ customersData });

export type RootState = ReturnType<typeof rootReducer>;
