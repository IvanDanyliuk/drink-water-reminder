import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { useState } from 'react';
import LayoutContainer from '@/components/LayoutContainer';

export default function HomeScreen() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const windowWidth = Dimensions.get('window')

  return (
    <LayoutContainer>
      <View>
        <Text>Main Information</Text>
      </View>
      <View>
        <Text>Water Consumed</Text>
      </View>
    </LayoutContainer>
  );
}

const styles = StyleSheet.create({
  
});
