import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ZipcodeValid from '../screens/ZipcodeValid';

const Stack = createStackNavigator();

export function ZipcodeStack() {
  return (
    <Stack.Navigator initialRouteName="Zipcode">
      <Stack.Screen
        name="MoviesList"
        component={ZipcodeValid}
        options={{
          headerTitle: 'Zipcode Validation',
        }}
      />
    </Stack.Navigator>
  );
}
