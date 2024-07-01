import React from 'react';
import { View, Text } from 'react-native';
import { Slot } from 'expo-router';

export default function Layout() {
  return (
    <View style={{ flex: 1 }}>
      {/* <Text>This is the layout</Text> */}
      <Slot />
    </View>
  );
}