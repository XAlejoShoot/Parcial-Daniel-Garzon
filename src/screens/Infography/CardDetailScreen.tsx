import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useAppContext } from '../../context/AppContext';
import { colors } from '../../styles/globalStyles';

// Definir tipos para la navegación
type CardStackParamList = {
    CardDetail: {
        id: string;
        title: string;
        imageUrl: string;
        description: string;
        websiteUrl: string;
    };
};

type CardDetailScreenRouteProp = RouteProp<CardStackParamList, 'CardDetail'>;

type CardDetailScreenNavigationProp = StackNavigationProp<CardStackParamList, 'CardDetail'>;

interface Props {
    route: CardDetailScreenRouteProp;
    navigation: CardDetailScreenNavigationProp;
}

const CardDetailScreen: React.FC<Props> = ({ route, navigation }) => {
    const { id, title, imageUrl, description, websiteUrl } = route.params;
    const { addVisitedCard } = useAppContext();

    useEffect(() => {
        navigation.setOptions({
        title: title,
        });
    }, [navigation, title]);

    const handleOpenWebsite = () => {
        addVisitedCard(id);
        // Aquí se abriría el sitio web, pero podemos implementar una pantalla web interna
        navigation.navigate('WebView' as any, { url: websiteUrl, title });
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: imageUrl }} style={styles.image} />
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
                <View style={styles.divider} />
                <Text style={styles.description}>{description}</Text>
                
                <Text style={styles.extendedDescription}>
                {title} es una tecnología esencial para el desarrollo de aplicaciones modernas. 
                En el contexto de este proyecto, nos permite crear interfaces de usuario 
                eficientes y mantenibles.
                </Text>
                
                <TouchableOpacity style={styles.button} onPress={handleOpenWebsite}>
                    <Text style={styles.buttonText}>Más información</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    imageContainer: {
        width: '100%',
        height: 250,
        overflow: 'hidden',
        backgroundColor: colors.primary,
    },
    image: {
        width: '100%',
        height: 250,
        resizeMode: 'contain',
    },
    content: {
        padding: 20,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        backgroundColor: colors.cardBg,
        marginTop: -20,
        shadowColor: colors.shadow,
        shadowOffset: { width: 0, height: -5 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 5,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: colors.primary,
        marginBottom: 16,
    },
    divider: {
        height: 2,
        backgroundColor: colors.lightGrey,
        width: 60,
        marginBottom: 16,
    },
    description: {
        fontSize: 16,
        color: colors.text,
        lineHeight: 24,
        marginBottom: 16,
    },
    extendedDescription: {
        fontSize: 16,
        color: colors.darkGrey,
        lineHeight: 24,
        marginBottom: 24,
        backgroundColor: colors.background,
        padding: 16,
        borderRadius: 12,
    },
    button: {
        backgroundColor: colors.accent,
        padding: 16,
        borderRadius: 12,
        alignItems: 'center',
        marginTop: 16,
        shadowColor: colors.shadow,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4,
    },
    buttonText: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default CardDetailScreen;