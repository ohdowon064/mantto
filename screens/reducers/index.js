import { combineReducers } from 'redux';

import talentCategoriesReducer from './talentCategoriesReducer';

import LoginReducer from './LoginReducer';

const rootReducer = combineReducers({
  talentCategoriesReducer,
  LoginReducer,
});

export default rootReducer;
