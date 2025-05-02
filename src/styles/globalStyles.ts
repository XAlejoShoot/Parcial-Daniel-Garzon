import { StyleSheet } from 'react-native';

export const colors = {
    primary: '#6366f1',       // Indigo más vibrante
    secondary: '#a5b4fc',     // Indigo más claro
    accent: '#f43f5e',        // Rosa vibrante como acento
    background: '#f8fafc',    // Fondo más claro
    white: '#ffffff',
    text: '#1e293b',          // Texto más oscuro para mejor contraste
    lightGrey: '#e2e8f0',     // Gris claro más suave
    darkGrey: '#64748b',      // Gris oscuro más moderno
    cardBg: '#ffffff',        // Fondo de tarjetas
    success: '#10b981',       // Verde para éxito
    error: '#ef4444',         // Rojo para errores
    shadow: 'rgba(0, 0, 0, 0.1)', // Color para sombras
};

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.text,
        marginBottom: 16,
    },
    card: {
        backgroundColor: colors.cardBg,
        borderRadius: 16,
        padding: 16,
        marginBottom: 16,
        shadowColor: colors.shadow,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 5,
    },
    buttonPrimary: {
        backgroundColor: colors.primary,
        padding: 14,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonSecondary: {
        backgroundColor: colors.secondary,
        padding: 14,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 16,
    },
});