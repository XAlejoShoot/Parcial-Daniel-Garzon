import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppProvider } from './src/context/AppContext';
import DrawerNavigator from './src/navigation/DrawerNavigator';
import { enableScreens } from 'react-native-screens';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { colors } from './src/styles/globalStyles';

// Habilitar optimizaciones de React Navigation
enableScreens();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <AppProvider>
          <NavigationContainer>
            <StatusBar style="light" backgroundColor={colors.primary} />
            <DrawerNavigator />
          </NavigationContainer>
        </AppProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}