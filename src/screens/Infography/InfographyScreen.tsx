import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import InfoCard from '../../components/InfoCard';
import { colors, globalStyles } from '../../styles/globalStyles';

// Datos de ejemplo
const cards = [
    {
        id: '1',
        title: 'React Native',
        imageUrl: 'https://reactnative.dev/img/header_logo.svg',
        description: 'React Native es un framework que permite construir aplicaciones móviles utilizando JavaScript y React. Aprende más sobre esta poderosa herramienta.',
        websiteUrl: 'https://reactnative.dev/',
    },
    {
        id: '2',
        title: 'TypeScript',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
        description: 'TypeScript es un superconjunto de JavaScript que añade tipado estático y objetos basados en clases para mejorar el desarrollo.',
        websiteUrl: 'https://www.typescriptlang.org/',
    },
    {
        id: '3',
        title: 'Expo',
        imageUrl: 'https://static.expo.dev/static/brand/square-512x512.png',
        description: 'Expo es una plataforma open-source para crear aplicaciones nativas universales para Android, iOS y web con JavaScript y React.',
        websiteUrl: 'https://expo.dev/',
    },
    {
        id: '4',
        title: 'React Navigation',
        imageUrl: 'https://reactnavigation.org/img/spiro.svg',
        description: 'Navegación para tu aplicación React Native. Implementa navegaciones por stack, tabs y drawer con facilidad.',
        websiteUrl: 'https://reactnavigation.org/',
    },
];

// Tipo para la navegación
type InfographyNavigationProp = StackNavigationProp<any, 'Infography'>;

const InfographyScreen: React.FC = () => {
    const navigation = useNavigation<InfographyNavigationProp>();

    const handleCardPress = (card: typeof cards[0]) => {
        navigation.navigate('CardDetail', card);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.headerTitle}>Infografía Tecnologías</Text>
            <ScrollView 
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                {cards.map((card) => (
                <TouchableOpacity 
                    key={card.id} 
                    onPress={() => handleCardPress(card)}
                    activeOpacity={0.8}
                    style={styles.cardWrapper}
                >
                    <InfoCard
                    id={card.id}
                    title={card.title}
                    imageUrl={card.imageUrl}
                    description={card.description}
                    websiteUrl={card.websiteUrl}
                    />
                </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        padding: 16,
    },
    scrollContent: {
        paddingBottom: 24,
    },
    headerTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: colors.primary,
        marginBottom: 20,
        marginTop: 8,
    },
    cardWrapper: {
        marginBottom: 16,
    }
});

export default InfographyScreen;