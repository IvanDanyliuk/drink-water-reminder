import { Image, StyleSheet, Platform, View, Button, Modal, Text, StatusBar, Dimensions, ScrollView } from 'react-native';
import { useState } from 'react';

export default function HomeScreen() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const windowWidth = Dimensions.get('window')

  return (
    <ScrollView>
      <Text>Hello World!</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  modalContainer: {
    padding: 10
  }
});
