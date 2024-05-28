import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { useState } from 'react';
import { BlurView } from 'expo-blur';
import LayoutContainer from '@/components/LayoutContainer';


export default function HomeScreen() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const windowWidth = Dimensions.get('window')

  return (
    <LayoutContainer>
      <View style={[styles.section, styles.mainInfo]}>
        <BlurView style={styles.blur} intensity={150}>
          <Text>Main Information</Text>
        </BlurView>
      </View>
      <View style={[styles.section, styles.intakeInfo]}>
        <BlurView style={styles.blur} intensity={150}>
          <Text>Water Consumed</Text>
        </BlurView>
      </View>
    </LayoutContainer>
  );
}

const styles = StyleSheet.create({
  section: {
    borderRadius: 5,
    overflow: 'hidden',
  },
  mainInfo: {
    flex: 1
  },
  intakeInfo: {
    height: 100,
  },
  blur: {
    padding: 5,
    height: '100%',
  }
});
