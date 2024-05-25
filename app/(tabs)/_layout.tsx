import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {

  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          // tabBarIcon: ({ color, focused }) => (
          //   <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          // ),
        }}
      />
      <Tabs.Screen
        name="statistics"
        options={{
          title: 'Statistics',
          // tabBarIcon: ({ color, focused }) => (
          //   <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
          // ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          // tabBarIcon: ({ color, focused }) => (
          //   <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
          // ),
        }}
      />
      <Tabs.Screen 
        name='settings'
        options={{
          title: 'Settings'
        }}
      />
      </Tabs>
  );
}
