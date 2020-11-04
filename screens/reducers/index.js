import { combineReducers } from 'redux';

import talentCategoriesReducer from "./talentCategoriesReducer";

const rootReducer = combineReducers({
    talentCategoriesReducer : talentCategoriesReducer,
})

export default rootReducer;