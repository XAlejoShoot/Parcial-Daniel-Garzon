import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { colors } from '../styles/globalStyles';

interface InfoCardProps {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
  websiteUrl: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ id, title, imageUrl, description }) => {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description} numberOfLines={3}>
          {description}
        </Text>
        <View style={styles.footer}>
          <Text style={styles.readMore}>Leer más</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.cardBg,
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  imageContainer: {
    height: 140,
    backgroundColor: colors.primary,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: colors.text,
    lineHeight: 20,
    marginBottom: 12,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  readMore: {
    color: colors.accent,
    fontWeight: '600',
  },
});

export default InfoCard;