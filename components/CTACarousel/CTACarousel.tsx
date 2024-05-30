import { View, Text, Pressable } from 'react-native';
import React, { useRef } from 'react';
import Carousel from 'react-native-reanimated-carousel';
import type { ICarouselInstance } from 'react-native-reanimated-carousel';
import { beverages } from '@/constants';
import CarouselItem from './CarouselItem';


const CTACarousel: React.FC = () => {
  const ref = useRef<ICarouselInstance>(null);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ marginVertical: 100 }}>
        <Carousel 
          key={'adfadfa'}
          data={beverages} 
          ref={ref}
          loop={true}
          renderItem={({ item, animationValue }) => (
            <CarouselItem 
              data={item}
              animationValue={animationValue}
              onPress={() => {
                ref.current?.scrollTo({
                  count: animationValue.value,
                  animated: true,
                })
              }}
            />
          )}
          width={100}
          height={120}
          autoPlay={false}
          style={{
            width: window.innerWidth,
            height: 170,
            justifyContent: 'center',
            alignItems: 'center',
            borderBottomWidth: 1,
            borderBottomColor: '#000000',
          }}
        />
      </View>
      {/* <View
        style={{
          marginTop: 24,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}
      >
        <Pressable onPress={() => ref.current?.prev()}>
          <Text>{'Prev'}</Text>
        </Pressable>
        <Pressable onPress={() => ref.current?.next()}>
          <Text>{'Next'}</Text>
        </Pressable>
      </View> */}
    </View>
  );
};

export default CTACarousel;