import { View, Text, ImageSourcePropType, StyleSheet, Image } from 'react-native';
import React from 'react';


interface ITabIcon {
  image: ImageSourcePropType;
  label: string;
  focused: boolean;
  color: string;
}

const TabIcon: React.FC<ITabIcon> = ({ image, label, focused, color }) => {
  return (
    <View style={styles.container}>
      <Image 
        source={image} 
        resizeMode='contain' 
        style={{ width: 20, height: 20 }} 
      />
      <Text style={{ color, fontSize: 10 }}>
        {label}
      </Text>
    </View>
  );
};

export default TabIcon;


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 1
  }
})