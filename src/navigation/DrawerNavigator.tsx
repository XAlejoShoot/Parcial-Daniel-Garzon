import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import TabNavigator from './TabNavigator';
import AboutScreen from '../screens/AboutScreen';
import { colors } from '../styles/globalStyles';

const Drawer = createDrawerNavigator();

const DrawerNavigator: React.FC = () => {
    return (
        <Drawer.Navigator
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
            drawerActiveTintColor: colors.accent,
            drawerInactiveTintColor: colors.darkGrey,
            drawerLabelStyle: {
                fontSize: 16,
                fontWeight: '500',
            },
            drawerStyle: {
                backgroundColor: colors.cardBg,
                width: 280,
                borderTopRightRadius: 20,
                borderBottomRightRadius: 20,
            },
        }}
        >
        <Drawer.Screen
            name="HomeDrawer"
            component={TabNavigator}
            options={{
                title: 'Inicio',
                drawerIcon: ({ color, size }) => (
                    <Ionicons name="home" size={size} color={color} />
                ),
            }}
        />
        <Drawer.Screen
            name="About"
            component={AboutScreen}
            options={{
                title: 'Acerca de',
                drawerIcon: ({ color, size }) => (
                    <Ionicons name="information-circle" size={size} color={color} />
                ),
            }}
        />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;