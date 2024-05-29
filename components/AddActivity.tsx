import { View, Modal, Pressable, StyleSheet, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { useAnimatedStyle, useSharedValue, withDelay, withRepeat, withTiming, interpolate } from 'react-native-reanimated';
import { colors, icons } from '@/constants';


interface IRing {
  delay: number;
}


const Ring: React.FC<IRing> = ({ delay }) => {
  const ring = useSharedValue(0);

  const ringStyle = useAnimatedStyle(() => {
    return {
      opacity: 0.8 - ring.value,
      transform: [
        {
          scale: interpolate(ring.value, [0, 1], [0, 4])
        }
      ]
    };
  });

  useEffect(() => {
    ring.value = withDelay(
      delay,
      withRepeat(
        withTiming(1, {
          duration: 4000
        }),
        -1,
        false
      )
    );
  }, []);

  return (
    <Animated.View style={[styles.ring, ringStyle]} />
  );
};


const AddActivity = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleVisibilityMode = () => {
    setIsVisible(prev => !prev);
  };

  return (
    <View>
      <Modal
        animationType='slide'
        transparent
        visible={isVisible}
      >
        <View style={styles.container}>
          <Pressable onPress={handleVisibilityMode} style={styles.drawer} />
          <View style={styles.modalBody}>
            <BlurView intensity={220} style={styles.blur}>
              <Pressable onPress={handleVisibilityMode} style={styles.closeButton}>
                <Image source={icons.close} style={styles.closeIcon} />
              </Pressable>
            </BlurView>
          </View>
        </View>
      </Modal>
      <View style={styles.addButtonContainer}>
        <Pressable onPress={handleVisibilityMode} style={styles.addButtonWrapper}>
          <LinearGradient colors={['#5DD8FF', '#0176E1']} style={styles.addButton}>
          <Image source={icons.plus} style={styles.plus} />
          </LinearGradient>
        </Pressable>
        <Ring delay={0} />
        <Ring delay={1000} />
        <Ring delay={2000} />
        <Ring delay={3000} />
      </View>
    </View>
  );
};

export default AddActivity;


const styles = StyleSheet.create({
  addButtonContainer: { 
    alignItems: 'center', 
    justifyContent: 'center', 
    flexDirection: 'column' 
  },
  addButtonWrapper: {
    zIndex: 10
  },
  addButton: {
    width: 76,
    height: 76,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 38,
  },
  plus: {
    width: 36,
    height: 36,
  },
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  drawer: {
    flex: 1,
    backgroundColor: 'transparent'
  },
  modalBody: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
    height: 500,
  },
  blur: {
    position: 'relative',
    height: '100%',
    padding: 10,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  closeIcon: {
    width: 30,
    height: 30,
  },
  ring: {
    position: 'absolute',
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 10,
    borderColor: colors.secondary,
  },
});