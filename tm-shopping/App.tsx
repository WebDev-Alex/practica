import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './navigation/RootNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'gold'
  },

});
