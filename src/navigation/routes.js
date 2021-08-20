import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import React from 'react';
import UserDetail from '../views/Detail/details';
import UserList from '../views/List/list';
import 'react-native-gesture-handler';
import {COLORS, ROUTES} from '../common/contants/index';

const Stack = createStackNavigator();

const AppRoutes = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={ROUTES.HOME} component={UserList} />
        <Stack.Screen name={ROUTES.DETAILS} component={UserDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRoutes;
