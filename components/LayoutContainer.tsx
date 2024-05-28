import { StyleSheet, Platform, StatusBar, ScrollView, SafeAreaView, View, Text } from 'react-native';
import React, { ReactNode, useState, useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '@/constants';
import { getCurrentDate } from '@/lib/helpers/helpers';


interface ILayoutContainer {
  children: ReactNode;
}


const LayoutContainer: React.FC<ILayoutContainer> = ({ children }) => {
  const [currentDate, setCurrentDate] = useState<string>('');

  useEffect(() => {
    const date = getCurrentDate();
    setCurrentDate(date);
  }, []);
  
  return (
    <SafeAreaView style={styles.AndroidSafeAreaView}>
      <LinearGradient 
        colors={[colors.secondary, colors.primary]} 
        style={styles.gradient}
      >
        <View style={styles.info}>
          <View>
            <Text style={[styles.infoText, styles.topText]}>
              {currentDate}
            </Text>
            <Text style={[styles.infoText, styles.bottomText]}>
              Today
            </Text>
          </View>
          <View>
            <Text style={[styles.infoText, styles.topText]}>
              Notification
            </Text>
            <Text style={[styles.infoText, styles.bottomText]}>
              Next Time
            </Text>
          </View>
        </View>
        <ScrollView 
          style={styles.content} 
          contentContainerStyle={{ position: 'relative', flexGrow: 1, minHeight: 'auto', display: 'flex', gap: 10 }}
        >
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
  content: {
    paddingTop: 10,
    width: '100%',
  },
  gradient: {
    width: '100%',
    height: '100%',
    padding: 10,
    flex: 1,
  },
  info: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoText: {
    color: colors.white,
  },
  topText: {
    fontFamily: 'MontserratMedium',
    fontSize: 12,
  },
  bottomText: {
    fontFamily: 'MontserratBold',
    fontSize: 16,
  },
});