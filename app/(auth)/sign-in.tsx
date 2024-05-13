import { View, Text, ScrollView, Image } from 'react-native';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../constants';
import FormField from '@/components/FormField';
import CustomButton from '@/components/CustomButton';
import { Link } from 'expo-router';

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {

  };

  return (
    <SafeAreaView className='h-full bg-primary'>
      <ScrollView>
        <View className='my-6 px-4 w-full min-h-[85vh] justify-center'>
          <Image 
            source={images.logo}
            resizeMode='contain'
            className='w-[115px] h-[35px]'
          />
          <Text className='mt-10 text-2xl text-semibol text-white font-psemibold'>
            Log in to Aora
          </Text>
          <FormField 
            title='Email'
            value={form.email}
            handleChangeText={(e: any) => setForm({ ...form, email: e })}
            otherStyles='mt-7'
            keyboardType='email-address'
          />
          <FormField 
            title='Password'
            value={form.password}
            handleChangeText={(e: any) => setForm({ ...form, password: e })}
            otherStyles='mt-7'
          />
          <CustomButton 
            title='Sign In'
            handlePress={submit}
            containerStyles='mt-7'
            isLaoding={isSubmitting}
          />
          <View className='pt-5 flex-row justify-center gap-2'>
            <Text className='text-lg text-gray-100 font-pregular'>
              Don't have an account?
            </Text>
            <Link 
              href='/sign-up'
              className='text-lg text-secondary font-psemibold'
            >
              Sign Up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;