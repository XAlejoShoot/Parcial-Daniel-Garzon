import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import CalculatorScreen from '../screens/Calculator/CalculatorScreen';
import InfographyStackNavigator from './InfographyStackNavigator';
import { colors } from '../styles/globalStyles';

const Tab = createBottomTabNavigator();

const TabNavigator: React.FC = () => {
    return (
        <Tab.Navigator
        screenOptions={{
            tabBarActiveTintColor: colors.accent,
            tabBarInactiveTintColor: colors.darkGrey,
            tabBarStyle: {
                backgroundColor: colors.cardBg,
                borderTopColor: 'transparent',
                paddingVertical: 10,
                height: 60,
                shadowColor: colors.shadow,
                shadowOffset: { width: 0, height: -2 },
                shadowOpacity: 0.1,
                shadowRadius: 4,
                elevation: 5,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
            },
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
            tabBarLabelStyle: {
                fontSize: 12,
                fontWeight: '500',
            },
        }}
        >
        <Tab.Screen
            name="Calculadora"
            component={CalculatorScreen}
            options={{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="calculator" size={size} color={color} />
                ),
            }}
        />
        <Tab.Screen
            name="Infografía"
            component={InfographyStackNavigator}
            options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="information-circle" size={size} color={color} />
                ),
            }}
        />
        </Tab.Navigator>
    );
};

export default TabNavigator;