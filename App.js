import 'react-native-gesture-handler';

import React from 'react';

import { Provider } from 'react-redux';

import store from "./screens/store/index";

// import Navigation from './navigation/RootNavigation';

import Profile from './screens/Profile';

const App = () => {
    return (
      <>
      <Provider store={store}>
        <Profile/>
        {/* <Navigation/> */}
      </Provider>
      </>
    );
};

export default App;
