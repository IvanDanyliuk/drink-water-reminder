import { StyleSheet, Platform, StatusBar, ScrollView, SafeAreaView } from 'react-native';
import React, { ReactNode } from 'react';
import { LinearGradient } from 'expo-linear-gradient';


interface ILayoutContainer {
  children: ReactNode;
}

const LayoutContainer: React.FC<ILayoutContainer> = ({ children }) => {
  return (
    <SafeAreaView style={styles.AndroidSafeAreaView}>
      <LinearGradient colors={['#5DD8FF', '#0176E1']} style={styles.gradient}>
        <ScrollView style={styles.container}>
          {children}
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default LayoutContainer;


const styles = StyleSheet.create({
  AndroidSafeAreaView: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    flex: 1
  },
  container: {
    width: '100%',
    height: '100%',
    flex: 1
  },
  gradient: {
    width: '100%',
    height: '100%',
    padding: 10,
    flex: 1
  }
});