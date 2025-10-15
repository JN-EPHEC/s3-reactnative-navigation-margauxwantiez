// navigation/DrawerNavigator.tsx
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import ProfileScreen from '../screens/ProfileScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Courses">
      <Drawer.Screen name="Courses" component={TabNavigator} />
      <Drawer.Screen name="My Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}
