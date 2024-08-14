import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [count, setCount] = useState(false)
  const onPress = () => setCount(prevCount => prevCount + 1)

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
          
      <View style={styles.showDiceContainer}>
        <Text style={styles.text}>Teste de texto</Text>
      </View>

      <View style={styles.diceContainer}>
        <TouchableOpacity style={styles.TouchableOpacity}>
          <Text style={styles.text}>2</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.TouchableOpacity}>
          <Text style={styles.text}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.TouchableOpacity}>
          <Text style={styles.text}>8</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  text: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
  },
  TouchableOpacity: {
    width: '20%',
    height: 100,
    backgroundColor: '#f9f2',
    fontFamily: 'nunito',
  },
  showDiceContainer: {
    width: '100%',
    height: 200,
  },
  diceContainer: {
    width: '100%',
  },
});
