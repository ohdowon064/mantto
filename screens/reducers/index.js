import { combineReducers } from 'redux';

import talentCategoriesReducer from './talentCategoriesReducer';

import LoginReducer from './LoginReducer';

import MyPageReducer from './MyPageReducer';

const rootReducer = combineReducers({
  talentCategoriesReducer,
  LoginReducer,
  MyPageReducer,
});

export default rootReducer;
