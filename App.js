/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {ROUTES} from './src/common/contants';
import Details from './src/views/Detail/details';
import Home from './src/views/List/list';
import {Provider} from 'react-redux';
import store from './src/config/redux/store';
import NetworkInterceptor from './src/services/http-client/http-interceptor';

NetworkInterceptor.setupInterceptors(store);

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={ROUTES.HOME} component={Home} />
          <Stack.Screen name={ROUTES.DETAILS} component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
