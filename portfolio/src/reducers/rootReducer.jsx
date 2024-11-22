import { combineReducers } from "@reduxjs/toolkit";
import sectionReducer from "../slices/slicesAbout"

const rootReducer = combineReducers({
    page: sectionReducer
});

export default rootReducer;