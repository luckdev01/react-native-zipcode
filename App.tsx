import * as React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import ThemeProvider from './themes/ThemeProvider';
import { ZipcodeStack } from './navigation/ZipcodeStack';
import store from './store/store';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <NavigationContainer>
          <ZipcodeStack />
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
