import React from 'react';
import { View, Text } from 'react-native';
import { Link } from 'expo-router';
import 'nativewind'; // Ensure this import for Tailwind utility classes

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text>Hello from index</Text>
      <Link href="/profile">Go to the profile</Link>
    </View>
  );
}