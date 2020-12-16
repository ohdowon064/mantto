import 'react-native-gesture-handler';

import React from 'react';

import { Provider } from 'react-redux';

import store from './screens/store/index';

import Navigation from './navigation/RootNavigation';

// import TalentRegisterContainer from './screens/TalentRegisterContainer';

const App = () => (
  <>
    <Provider store={store}>
      <Navigation />
      {/* <LoginPage />
        {/* <Profile/> */}
      {/* <TalentRegisterContainer /> */}
    </Provider>
  </>
);

export default App;
