import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Screens
import HomeScreen from './index';
import EnquiryScreen from './enquiry';

type TabParamList = {
  Home: undefined;
  Enquiry: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }: { route: any; }) => ({
          tabBarIcon: ({ color, size }: {
            color: any;
            size: any;
          }) => {
            let iconName: keyof typeof Ionicons.glyphMap;

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Enquiry') {
              iconName = 'information-circle';
            } else {
              iconName = "home";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#1E90FF',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Enquiry" component={EnquiryScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
