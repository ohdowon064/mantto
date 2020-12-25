import { combineReducers } from 'redux';

import talentCategoriesReducer from './talentCategoriesReducer';

import LoginReducer from './LoginReducer';

import MyPageReducer from './MyPageReducer';

import SignUpReducer from './SignUpReducer';

const rootReducer = combineReducers({
  talentCategoriesReducer,
  LoginReducer,
  SignUpReducer,
  MyPageReducer,
});

export default rootReducer;
