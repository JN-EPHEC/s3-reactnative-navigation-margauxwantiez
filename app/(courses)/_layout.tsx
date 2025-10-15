import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function CoursesLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#4A90E2',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'All Courses',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="wishlist"
        options={{
          title: 'My Wishlist',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}