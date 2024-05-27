import { Tabs } from 'expo-router';
import React, { useEffect } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';

export default function TabLayout() {
  useEffect(() => {
    StatusBar.setBackgroundColor('#5DD8FF');
    StatusBar.setBarStyle('dark-content')
  }, []);

  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: false,
          // tabBarIcon: ({ color, focused }) => (
          //   <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          // ),
        }}
      />
      <Tabs.Screen
        name="statistics"
        options={{
          title: 'Statistics',
          headerShown: false,
          // tabBarIcon: ({ color, focused }) => (
          //   <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
          // ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerShown: false,
          // tabBarIcon: ({ color, focused }) => (
          //   <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
          // ),
        }}
      />
      <Tabs.Screen 
        name='settings'
        options={{
          title: 'Settings',
          headerShown: false,
        }}
      />
    </Tabs>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e58484'
  }
})
