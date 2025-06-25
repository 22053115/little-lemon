import { StyleSheet, Text, useColorScheme, View } from 'react-native';

export default function HomeScreen() {
  const colorScheme = useColorScheme(); // 'dark' or 'light'

  const isDark = colorScheme === 'dark';

  return (
    <View style={[styles.container, { backgroundColor: isDark ? '#000' : '#fff' }]}>
      <Text style={[styles.heading, { color: isDark ? '#fff' : '#000' }]}>🍋 Welcome to Little Lemon!</Text>
      <Text style={[styles.text, { color: isDark ? '#ccc' : '#333' }]}>Your reservation assistant app</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    padding: 20
  },
  heading: {
    fontSize: 24, 
    fontWeight: 'bold',
    marginBottom: 10
  },
  text: {
    fontSize: 16,
    textAlign: 'center'
  }
});
