import React from 'react';

import { Provider } from 'react-redux';

import InsertTalentPage from "./screens/InsertTalentPage";

import InsertTalentLayout from './screens/layouts/InsertTalentLayout';

import store from "./screens/store/index";

const App = () => {
    return (
      <>
      <Provider store={store}>
        <InsertTalentLayout>
          <InsertTalentPage/>
        </InsertTalentLayout>
      </Provider>
      </>
    );
};

export default App;
