// navigation/StackNavigator.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CourseListScreen from '../screens/CourseListScreen';
import CourseDetailScreen from '../screens/CourseDetailScreen';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();

export default function CourseStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CourseList"
        component={CourseListScreen}
        options={({ navigation }) => ({
          title: 'All Courses',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={{ marginLeft: 12 }}>
              <Ionicons name="menu" size={24} />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="CourseDetail"
        component={CourseDetailScreen}
        options={({ route }: any) => ({ title: route.params?.title ?? 'Course Detail' })}
      />
    </Stack.Navigator>
  );
}
