import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.dummyText}>This is text1</Text>
      <Text style={styles.dummyText}>Open up App</Text>
      <Button title='Tab me'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dummyText:{
      margin:16, 
      borderWidth:2, 
      borderColor:'blue', 
      padding:10,
  },
});
