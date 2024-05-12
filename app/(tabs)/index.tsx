import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <View className='flex-1 items-center justify-center bg-white text-slate-700'>
      <Text className='text-3xl font-pblack'>Root Layout</Text>
      <Link href='/profile' className='text-slate-500'>Go to Profile</Link>
    </View>
  );
}

