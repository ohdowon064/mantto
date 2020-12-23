import 'react-native-gesture-handler';

import React from 'react';

import { Provider } from 'react-redux';

import store from './screens/store/index';

import Navigation from './navigation/RootNavigation';

const App = () => (
  <>
    <Provider store={store}>
      <Navigation />
    </Provider>
  </>
);

export default App;
