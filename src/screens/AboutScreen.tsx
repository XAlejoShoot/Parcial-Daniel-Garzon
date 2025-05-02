import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { colors, globalStyles } from '../styles/globalStyles';

const AboutScreen: React.FC = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Acerca de la Aplicación</Text>
            </View>
            
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Proyecto Universidad</Text>
                <Text style={styles.text}>
                Esta aplicación fue desarrollada como parte de un proyecto universitario 
                utilizando React Native con Expo y TypeScript.
                </Text>
            </View>
            
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Funcionalidades</Text>
                <View style={styles.featureItem}>
                    <View style={styles.bullet} />
                    <Text style={styles.text}>Calculadora funcional</Text>
                </View>
                <View style={styles.featureItem}>
                    <View style={styles.bullet} />
                    <Text style={styles.text}>Infografía con tarjetas informativas</Text>
                </View>
                <View style={styles.featureItem}>
                    <View style={styles.bullet} />
                    <Text style={styles.text}>Navegación por pestañas, stack y drawer</Text>
                </View>
                <View style={styles.featureItem}>
                    <View style={styles.bullet} />
                    <Text style={styles.text}>Gestión de estado con Context API</Text>
                </View>
            </View>
            
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Tecnologías</Text>
                <View style={styles.techContainer}>
                    <View style={styles.techItem}>
                        <Text style={styles.techText}>React Native</Text>
                    </View>
                    <View style={styles.techItem}>
                        <Text style={styles.techText}>Expo</Text>
                    </View>
                    <View style={styles.techItem}>
                        <Text style={styles.techText}>TypeScript</Text>
                    </View>
                    <View style={styles.techItem}>
                        <Text style={styles.techText}>React Navigation</Text>
                    </View>
                    <View style={styles.techItem}>
                        <Text style={styles.techText}>Context API</Text>
                    </View>
                </View>
            </View>
            
            <View style={styles.footer}>
                <Text style={styles.versionText}>Versión 1.0.0</Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    header: {
        padding: 24,
        backgroundColor: colors.primary,
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
        marginBottom: 16,
        shadowColor: colors.shadow,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 5,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: colors.white,
        textAlign: 'center',
    },
    section: {
        backgroundColor: colors.cardBg,
        borderRadius: 16,
        padding: 20,
        marginHorizontal: 16,
        marginBottom: 16,
        shadowColor: colors.shadow,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.primary,
        marginBottom: 16,
    },
    text: {
        fontSize: 16,
        color: colors.text,
        marginBottom: 8,
        lineHeight: 24,
    },
    featureItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    bullet: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: colors.accent,
        marginRight: 12,
    },
    techContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
    },
    techItem: {
        backgroundColor: colors.primary,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 20,
    },
    techText: {
        color: colors.white,
        fontWeight: '600',
    },
    footer: {
        marginTop: 16,
        marginBottom: 40,
        alignItems: 'center',
    },
    versionText: {
        fontSize: 14,
        color: colors.darkGrey,
    },
});

export default AboutScreen;