import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { useState } from 'react';
import { BlurView } from 'expo-blur';
import { AnimatedCircularProgress } from 'react-native-circular-progress'
import LayoutContainer from '@/components/LayoutContainer';
import { colors } from '@/constants';


interface IProgress {
  progress: number;
  consumed: number;
  goal: number;
}


const ProgressDetails: React.FC<IProgress> = ({ progress, consumed, goal }) => {
  return (
    <View>
      <Text style={styles.progressPercentage}>
        {progress}%
      </Text>
      <Text style={styles.progressInfo}>
        {`${consumed} / ${goal} ml`}
      </Text>
    </View>
  );
};


export default function HomeScreen() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [progress, setProgress] = useState<IProgress>({
    progress: 79,
    consumed: 2530,
    goal: 3200
  });

  const windowWidth = Dimensions.get('window')

  return (
    <LayoutContainer>
      <View style={[styles.section, styles.mainInfo]}>
        <BlurView style={styles.blur} intensity={170}>
          <View>
            <Text style={[styles.greeting, styles.greetingTop]}>Hi Ivan!</Text>
            <Text style={[styles.greeting, styles.greetingBottom]}>Today your water balance is</Text>
          </View>
          <View style={styles.progressContainer}>
            <AnimatedCircularProgress 
              size={210}
              width={17}
              fill={progress.progress}
              tintColor={colors.secondary}
              // backgroundColor={colors.primary}
              rotation={0}
              children={() => (
                <ProgressDetails 
                  progress={progress.progress} 
                  consumed={progress.consumed} 
                  goal={progress.goal} 
                />
              )}
            />
          </View>
        </BlurView>
      </View>
      <View style={[styles.section, styles.intakeInfo]}>
        <BlurView style={styles.blur} intensity={170}>
          <Text>Water Consumed</Text>
        </BlurView>
      </View>
    </LayoutContainer>
  );
};


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
    padding: 10,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    gap: 16
  },
  greeting: {
    textAlign: 'center',
    color: colors.primary,
  },
  greetingTop: {
    fontFamily: 'MontserratBold',
    fontSize: 18,
  },
  greetingBottom: {
    fontFamily: 'MontserratSemibold',
    fontSize: 14,
  },
  progressContainer: { 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  progressPercentage: {
    fontFamily: 'MontserratBold',
    fontSize: 50,
    textAlign: 'center',
    color: colors.primary,
  },
  progressInfo: {
    fontFamily: 'MontserratSemibold',
    fontSize: 14,
    textAlign: 'center',
    color: colors.grayDark,
  }
});
