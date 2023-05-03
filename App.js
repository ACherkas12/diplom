import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import React, { useState, useEffect } from 'react';
import { AppLoading } from 'expo-app-loading';
import * as Font from 'expo-font';
import { AppNavigator } from './src/navigations/Navigator';

export const App = () => {
  const [isFontLoaded, setIsFontLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        Bold: require('./src/fonts/Montserrat-ExtraBold.otf'),
        Medium: require('./src/fonts/Montserrat-Medium.otf'),
        Regular: require('./src/fonts/Montserrat-Regular.otf'),
      });
      setIsFontLoaded(true);
    };

    loadFonts();
  }, []);

  return isFontLoaded ? <AppNavigator /> : <AppLoading />;
};

export default App;
AppRegistry.registerComponent('diplom-app', () => App);
