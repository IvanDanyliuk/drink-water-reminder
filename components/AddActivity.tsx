import { View, Modal, Pressable, StyleSheet, Image, Text, FlatList, TextInput, Alert, useWindowDimensions } from 'react-native';
import React, { useEffect, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { useAnimatedStyle, useSharedValue, withDelay, withRepeat, withTiming, interpolate } from 'react-native-reanimated';
import { colors, icons, beverages, liquidContainers } from '@/constants';


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
  const { width, height } = useWindowDimensions();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [liquidConsumed, setLiquidConsumed] = useState<any>({
    beverageId: beverages[0].id,
    volume: liquidContainers[0].capacity,
  });

  const handleVisibilityMode = () => {
    setIsVisible(prev => !prev);
  };

  const selectBeverage = (beverageId: string) => {
    setLiquidConsumed({
      ...liquidConsumed,
      beverageId
    });
  };

  const increaseVolume = () => {
    setLiquidConsumed({
      ...liquidConsumed,
      volume: liquidConsumed.volume + 5
    });
  };

  const decreaseVolume = () => {
    setLiquidConsumed({
      ...liquidConsumed,
      volume: liquidConsumed.volume !== 0 ? liquidConsumed.volume - 5 : liquidConsumed.volume
    });
  };

  const handleVolumeChange = (volume: number) => {
    setLiquidConsumed({
      ...liquidConsumed,
      volume
    });
  };

  const selectVolume = (capacity: number) => {
    setLiquidConsumed({
      ...liquidConsumed,
      volume: capacity
    });
  };

  const submitActivityForm = () => {
    //push liquidConsumed variable to state
    Alert.alert(`Width: ${width}, Height: ${height}`)
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
            <Pressable onPress={handleVisibilityMode} style={styles.closeButton}>
              <Image source={icons.close} style={styles.closeIcon} />
            </Pressable>
            <View style={styles.contentContainer}>
              <Text style={styles.contentSectionHeading}>
                What are you goind to drink?
              </Text>
              <FlatList 
                data={beverages}
                renderItem={({ item }) => (
                  <Pressable 
                    key={item.id} 
                    style={styles.listItem}
                    onPress={() => selectBeverage(item.id)}
                  >
                    {liquidConsumed.beverageId === item.id && (
                      <View style={styles.checkedIndicator}>
                        <Image source={icons.check} style={styles.checkedIndicatorIcon} />
                      </View>
                    )}
                    <Image source={item.image} style={{ width: 30, height: 30 }} />
                    <Text style={styles.listItemText}>
                      {item.name}
                    </Text>
                  </Pressable>
                )}
                horizontal
                style={styles.list}
                initialScrollIndex={0}
              />
              <Text style={styles.contentSectionHeading}>
                Select the capacity
              </Text>
              <FlatList 
                data={liquidContainers}
                renderItem={({ item }) => (
                  <Pressable 
                    key={item.id} 
                    style={styles.listItem}
                    onPress={() => selectVolume(item.capacity)}
                  >
                    {liquidConsumed.volume === item.capacity && (
                      <View style={styles.checkedIndicator}>
                        <Image source={icons.check} style={styles.checkedIndicatorIcon} />
                      </View>
                    )}
                    <View style={styles.listItemImageWrapper}>
                      <Image source={item.image} style={{ width: 26, height: 26 }} />
                    </View>
                    <Text style={styles.listItemText}>
                      {item.capacity}
                    </Text>
                  </Pressable>
                )}
                horizontal
                style={styles.list}
                initialScrollIndex={0}
                contentContainerStyle={{ width: '100%', justifyContent: 'center' }}
              />
              <View style={styles.controlsContainer}>
                <Pressable onPress={decreaseVolume}>
                  <Image source={icons.controlsMinus} style={styles.controlButtonIcon} />
                </Pressable>
                <TextInput 
                  value={String(liquidConsumed.volume)} 
                  keyboardType='numeric' 
                  onChange={(value) => handleVolumeChange(+value)} 
                  style={styles.textField} 
                />
                <Pressable onPress={increaseVolume}>
                  <Image source={icons.controlsPlus} style={styles.controlButtonIcon} />
                </Pressable>
              </View>
            </View>
            <Pressable onPress={submitActivityForm} style={styles.submitButton}>
              <LinearGradient colors={['#5DD8FF', '#0176E1']} style={styles.submitButtonBg}>
                <Text style={styles.submitButtonText}>Add</Text>
              </LinearGradient>
            </Pressable>
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
    position: 'relative',
    paddingTop: 46,
    paddingBottom: 20,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white
  },
  blur: {
    position: 'relative',
    height: '100%',
    paddingTop: 46,
    paddingBottom: 20,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contentContainer: { 
    width: '100%', 
    justifyContent: 'center', 
    alignItems: 'center', 
    gap: 10 
  },
  contentSectionHeading: { 
    fontFamily: 'MontserratSemibold', 
    fontSize: 14, 
    textAlign: 'center', 
    color: colors.primary 
  },
  list: { 
    width: '100%', 
    height: 100, 
    overflow: 'hidden' 
  },
  listItem: { 
    position: 'relative', 
    padding: 10, 
    width: 70, 
    maxHeight: 100, 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    gap: 7 
  },
  checkedIndicator: { 
    position: 'absolute', 
    top: 5, 
    right: 5, 
    width: 20, 
    height: 20, 
    justifyContent: 'center', 
    alignItems: 'center', 
    borderRadius: 10, 
    backgroundColor: colors.secondary, 
    zIndex: 10 
  },
  checkedIndicatorIcon: { 
    width: 10, 
    height: 10 
  },
  listItemText: { 
    fontSize: 12, 
    fontFamily: 'MontserratMedium', 
    textAlign: 'center' 
  },
  listItemImageWrapper: { 
    width: 50, 
    height: 50, 
    borderRadius: 25, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: colors.primary 
  },
  controlsContainer: { 
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center', 
    gap: 5 
  },
  controlButtonIcon: { 
    width: 55, 
    height: 55 
  },
  textField: { 
    width: 100, 
    textAlign: 'center', 
    fontSize: 20, 
    fontFamily: 'MontserratSemibold' 
  },
  submitButton: { 
    width: 170, 
    overflow: 'hidden', 
    borderRadius: 10 
  },
  submitButtonBg: { 
    paddingHorizontal: 20, 
    paddingVertical: 16 
  },
  submitButtonText: { 
    fontFamily: 'MontserratSemibold', 
    fontSize: 20, 
    textAlign: 'center', 
    color: colors.white 
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