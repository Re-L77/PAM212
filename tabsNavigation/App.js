import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Ionicons from 'react-native-vector-icons/Ionicons'; // El PDF menciona @expo/vector-icons, pero usa Ionicons en el código

// Importamos los Screens creados
import Home from './screens/home';
import Profile from './screens/profile';
import Settings from './screens/settings';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer >
        <Tab.Navigator
          initialRouteName="Profile"
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = 'home';
              } else if (route.name === 'Profile') {
                iconName = 'person';
              } else if (route.name === 'Settings') {
                iconName = 'settings';
              }

              // Retorna el icono correspondiente
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#007BFF',
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: {
              paddingBottom: 5,
              height: 60,
            },
          })}
        >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Profile" component={Profile} />
          <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
      </NavigationContainer >
    </SafeAreaProvider>
  );
}