/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/views/List/list';
import Details from './src/views/Detail/details';
import { ROUTES } from './src/common/contants';

const Stack = createStackNavigator();

// const Home = props => {
//   const {navigation} = props;
//   return (
//     <View>
//       <Text>Home</Text>
//       <Button
//         onPress={() => navigation.navigate('Details', {title: 'Abhi'})}
//         title="Learn More"
//         color="#841584"
//         accessibilityLabel="Learn more about this purple button"
//       />
//     </View>
//   );
// };

// const Details = props => {
//   useEffect(() => {
//     console.log(props);
//     props.navigation.setOptions({title: props.route.params.title});
//   }, []);
//   return (
//     <View>
//       <Text>Details</Text>
//     </View>
//   );
// };

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={ROUTES.HOME} component={Home} />
        <Stack.Screen name={ROUTES.DETAILS} component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
