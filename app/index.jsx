import { StyleSheet, Text, View } from 'react-native'
import { Slot, Stack } from 'expo-router'

const RootLayout = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className='text-3xl text-pblack'>Aora!</Text>
      <StatusBar style='auto' />
      <Link href='/profile' style={{ color: 'blue' }}>Go to Profile</Link>
    </View>
  )
}

export default RootLayout