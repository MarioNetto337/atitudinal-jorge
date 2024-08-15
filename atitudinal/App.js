import React from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar 
        barStyle="dark-content"
        backgroundColor="#FFFFFF"
      />
      <Text style={styles.text}>Texto Centralizado</Text>

      <View style={styles.buttonContainer}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text style={styles.buttonText}>Botão 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text style={styles.buttonText}>Botão 2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text style={styles.buttonText}>Botão 3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text style={styles.buttonText}>Botão 4</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text style={styles.buttonText}>Botão 5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text style={styles.buttonText}>Botão 6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text style={styles.buttonText}>Botão 7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {}}>
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
