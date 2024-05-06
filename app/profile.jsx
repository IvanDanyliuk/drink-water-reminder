import { Text, View } from 'react-native'
import { Link } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const Profile = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text>Profile</Text>
      <StatusBar style='auto' />
      <Link href='/profile' style={{ color: 'blue' }}>Go to Profile</Link>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})