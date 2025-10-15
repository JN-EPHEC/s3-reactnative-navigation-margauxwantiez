import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  FlatList, 
  TouchableOpacity 
} from 'react-native';
import { Link } from 'expo-router';

const COURSES = [
  {
    id: '1',
    title: 'Intro to React Native',
    description: 'Learn the fundamentals of React Native development'
  },
  {
    id: '2', 
    title: 'Advanced JavaScript',
    description: 'Master advanced JavaScript concepts and patterns'
  },
  {
    id: '3',
    title: 'UI/UX for Developers',
    description: 'Design principles and best practices for mobile apps'
  },
  {
    id: '4',
    title: 'State Management',
    description: 'Learn Redux, Context API and other state solutions'
  }
];

export default function CourseListScreen() {
  const renderCourseItem = ({ item }: { item: typeof COURSES[0] }) => (
    <Link
      href={{
        pathname: "/(courses)/course-detail",
        params: {
          courseId: item.id,
          title: item.title, 
          description: item.description
        }
      }} asChild
    >
      <TouchableOpacity style={styles.courseItem}>
        <Text style={styles.courseTitle}>{item.title}</Text>
        <Text style={styles.courseDescription}>{item.description}</Text>
      </TouchableOpacity>
    </Link>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={COURSES}
        renderItem={renderCourseItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  listContent: {
    padding: 16,
  },
  courseItem: {
    backgroundColor: 'white',
    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  courseDescription: {
    fontSize: 14,
    color: '#666',
  },
});