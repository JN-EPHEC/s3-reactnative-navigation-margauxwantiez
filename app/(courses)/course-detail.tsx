import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';

export default function CourseDetailScreen() {
  const params = useLocalSearchParams();
  
  // Assurez-vous que les paramètres sont bien récupérés
  const courseId = params.courseId as string;
  const title = params.title as string;
  const description = params.description as string;

  console.log('Params received:', params); // Pour debuguer

  return (
    <>
      <Stack.Screen options={{ title: title || 'Course Details' }} />
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>{title || 'Course Title'}</Text>
          <Text style={styles.courseId}>Course ID: {courseId || 'N/A'}</Text>
        </View>
        
        <View style={styles.content}>
          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.description}>
            {description || 'No description available'}
          </Text>
          
          <View style={styles.details}>
            <Text style={styles.sectionTitle}>Course Details</Text>
            <Text style={styles.detailItem}>• Duration: 8 weeks</Text>
            <Text style={styles.detailItem}>• Level: Beginner to Advanced</Text>
            <Text style={styles.detailItem}>• Instructor: John Doe</Text>
            <Text style={styles.detailItem}>• Rating: 4.8/5</Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: 'white',
    padding: 20,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  courseId: {
    fontSize: 14,
    color: '#666',
  },
  content: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: '#444',
    lineHeight: 24,
    marginBottom: 24,
  },
  details: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
  },
  detailItem: {
    fontSize: 16,
    color: '#444',
    marginBottom: 8,
  },
});