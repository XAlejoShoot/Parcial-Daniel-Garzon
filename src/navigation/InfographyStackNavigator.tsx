import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import InfographyScreen from '../screens/Infography/InfographyScreen';
import CardDetailScreen from '../screens/Infography/CardDetailScreen';
import WebViewScreen from '../screens/Infography/WebViewScreen';
import { colors } from '../styles/globalStyles';

// Definir el tipo para los parámetros de navegación
type InfographyStackParamList = {
    Infography: undefined
    CardDetail: {
        id: string
        title: string
        imageUrl: string
        description: string
        websiteUrl: string
    }
    WebView: {
        url: string
        title: string
    }
}

// Crear el Stack con el tipo correcto
const Stack = createStackNavigator<InfographyStackParamList>()

const InfographyStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
          shadowColor: colors.shadow,
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 5,
        },
        headerTintColor: colors.white,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        cardStyle: {
          backgroundColor: colors.background,
        },
      }}
    >
      <Stack.Screen name="Infography" component={InfographyScreen} options={{ headerShown: false }} />
      <Stack.Screen name="CardDetail" component={CardDetailScreen} />
      <Stack.Screen name="WebView" component={WebViewScreen} />
    </Stack.Navigator>
  )
}

export default InfographyStackNavigator