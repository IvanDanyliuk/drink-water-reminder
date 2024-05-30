import { View, Text, Pressable, Image } from 'react-native';
import React from 'react';
import Animated, { 
  Extrapolation,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming  
} from 'react-native-reanimated';
import { SharedValue } from 'react-native-gesture-handler/lib/typescript/handlers/gestures/reanimatedWrapper';
import { colors } from '@/constants';

interface ICarouselItem {
  data: any;
  animationValue: SharedValue<number>;
  onPress: () => void;
}

const CarouselItem: React.FC<ICarouselItem> = ({ data, animationValue, onPress }) => {
  const translateY = useSharedValue(0);

  const containerStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      animationValue.value,
      [-1, 0, 1],
      [0.5, 1, 0.5],
      Extrapolation.CLAMP,
    );

    return {
      opacity,
    };
  }, [animationValue]);

  const labelStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      animationValue.value,
      [-1, 0, 1],
      [1, 1.25, 1],
      Extrapolation.CLAMP,
    );

    const color = interpolateColor(
      animationValue.value,
      [-1, 0, 1],
      ["#b6bbc0", "#0071fa", "#b6bbc0"],
    );

    return {
      transform: [{ scale }, { translateY: translateY.value }],
      color,
    };
  }, [animationValue, translateY]);

  const onPressIn = React.useCallback(() => {
    translateY.value = withTiming(-8, { duration: 250 });
  }, [translateY]);

  const onPressOut = React.useCallback(() => {
    translateY.value = withTiming(0, { duration: 250 });
  }, [translateY]);
  
  return (
    <Pressable
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
    >
      <Animated.View
        style={[
          {
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 5
          },
          containerStyle,
        ]}
      >
        <View style={{ width: 50, height: 50, borderRadius: 25, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.primary }}>
          <Image source={data.image} style={{ width: 30, height: 30 }} />
        </View>
        <Text style={{  }}>{data.name}</Text>
        {/* <Animated.Text
          style={[{ fontSize: 18, color: "#26292E" }, labelStyle]}
        >
          {data.name}
        </Animated.Text> */}
      </Animated.View>
    </Pressable>
  )
}

export default CarouselItem