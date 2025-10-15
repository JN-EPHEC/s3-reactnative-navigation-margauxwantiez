import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { useRouter } from 'expo-router';

// Composant personnalisé pour le contenu du drawer
function CustomDrawerContent() {
  const router = useRouter();
  
  return (
    <DrawerContentScrollView>
      <DrawerItem
        label="Courses"
        onPress={() => router.push('/(courses)')}
      />
      <DrawerItem
        label="My Profile"
        onPress={() => router.push('/profile')}
      />
    </DrawerContentScrollView>
  );
}

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={CustomDrawerContent}
        screenOptions={{
          headerShown: true,
          drawerHideStatusBarOnOpen: false,
          // Cache toutes les routes automatiques
          drawerItemStyle: { display: 'none' },
        }}
      >
        {/* Ces écrans existent mais sont cachés du drawer */}
        <Drawer.Screen
          name="(courses)"
          options={{
            drawerLabel: () => null,
            title: 'Course Browser',
          }}
        />
        <Drawer.Screen
          name="profile"
          options={{
            drawerLabel: () => null,
            title: 'My Profile',
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}