// components/CourseItem.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type Props = {
  title: string;
  description: string;
  onPress: () => void;
};

export default function CourseItem({ title, description, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
      <Text numberOfLines={2} style={styles.desc}>{description}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 14,
    marginHorizontal: 12,
    marginBottom: 12,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  title: { fontSize: 16, fontWeight: '700' },
  desc: { marginTop: 6, color: '#666' },
});
