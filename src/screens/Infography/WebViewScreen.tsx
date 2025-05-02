import React, { useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { colors } from '../../styles/globalStyles';

// Definir tipos para la navegación
type WebViewStackParamList = {
    WebView: {
        url: string;
        title: string;
    };
};

type WebViewScreenRouteProp = RouteProp<WebViewStackParamList, 'WebView'>;
type WebViewScreenNavigationProp = StackNavigationProp<WebViewStackParamList, 'WebView'>;

interface Props {
    route: WebViewScreenRouteProp;
    navigation: WebViewScreenNavigationProp;
}

const WebViewScreen: React.FC<Props> = ({ route, navigation }) => {
    const { url, title } = route.params;

    useEffect(() => {
        navigation.setOptions({
        title: title,
        });
    }, [navigation, title]);

    return (
        <View style={styles.container}>
        <WebView
            source={{ uri: url }}
            style={styles.webview}
            startInLoadingState={true}
            renderLoading={() => (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color={colors.primary} />
            </View>
            )}
        />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    webview: {
        flex: 1,
        borderRadius: 8,
        overflow: 'hidden',
    },
    loadingContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background,
    },
});

export default WebViewScreen;