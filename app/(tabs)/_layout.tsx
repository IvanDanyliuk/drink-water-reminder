import { Tabs } from 'expo-router';
import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { colors, icons } from '../../constants';
import TabIcon from '@/components/TabIcon';


export default function TabLayout() {
  useEffect(() => {
    StatusBar.setBackgroundColor(colors.secondary);
    StatusBar.setBarStyle('dark-content')
  }, []);

  return (
    <Tabs screenOptions={{
      tabBarShowLabel: false,
      tabBarActiveTintColor: colors.primary,
      tabBarInactiveTintColor: colors.grayDark,
    }}>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon 
              image={focused ? icons.homeActive : icons.home} 
              label='Home' 
              focused={focused} 
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="statistics"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon 
              image={focused ? icons.statisticsActive : icons.statistics} 
              label='Statistics' 
              focused={focused} 
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon 
              image={focused ? icons.profileActive : icons.profile} 
              label='Profile' 
              focused={focused} 
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen 
        name='settings'
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon 
              image={focused ? icons.settingsActive : icons.settings} 
              label='Settings' 
              focused={focused} 
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
};