import React, { useState } from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';

export default function App() {
  const [selectedNumber, setSelectedNumber] = useState('Texto Centralizado');

  const arrays = {
    1: [1, 2],
    2: [1, 2, 3, 4],
    3: [1, 2, 3, 4, 5, 6],
    4: [1, 2, 3, 4, 5, 6, 7, 8],
    5: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    6: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    7: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    8: Array.from({ length: 100 }, (_, i) => i + 1), // Array de 1 a 100
  };

  const handleButtonPress = (buttonIndex) => {
    const array = arrays[buttonIndex];
    const randomIndex = Math.floor(Math.random() * array.length);
    const randomNumber = array[randomIndex];
    setSelectedNumber(randomNumber);
  };

  return (
    <View style={styles.container}>
      <StatusBar 
        barStyle="dark-content"
        backgroundColor="#FFFFFF"
      />
      <Text style={styles.text}>{selectedNumber}</Text>

      <View style={styles.buttonContainer}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress(1)}>
            <Text style={styles.buttonText}>Botão 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress(2)}>
            <Text style={styles.buttonText}>Botão 2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress(3)}>
            <Text style={styles.buttonText}>Botão 3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress(4)}>
            <Text style={styles.buttonText}>Botão 4</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress(5)}>
            <Text style={styles.buttonText}>Botão 5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress(6)}>
            <Text style={styles.buttonText}>Botão 6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress(7)}>
            <Text style={styles.buttonText}>Botão 7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress(8)}>
            <Text style={styles.buttonText}>Botão 8</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000', // Texto em preto
    fontFamily: 'Arial',
    marginBottom: 20, // Espaço entre o texto e os botões
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20, // Posição dos botões na parte inferior
    width: '100%', // Largura para alinhar os botões ao centro
    paddingHorizontal: 10, // Espaçamento lateral
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10, // Espaçamento entre as linhas de botões
  },
  button: {
    backgroundColor: '#000000', // Fundo preto dos botões
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 5, // Espaçamento horizontal entre os botões
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF', // Texto dos botões em branco
    textAlign: 'center',
  },
});
