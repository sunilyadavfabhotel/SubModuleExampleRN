// create a dummy app using nativewind

import React from 'react';
import {View, Text, Button, Alert} from 'react-native';
import './global.css';

export default function App() {
  return (
    <View className="bg-red-500 p-4">
      <Text className="text-white text-lg">Hello World</Text>
      <Button title="Click me" onPress={() => Alert.alert('Hello World')} />
    </View>
  );
}
