import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Home = ({ navigation }) => {
  const handleGoToList = () => {
    navigation.navigate('Lista');
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('./../../assets/2e1b2f6077763f0bb5c398e376f7e619.jpg')} style={styles.imageBackground}>
        <View style={styles.content}>
          <Text style={styles.title}>Bienvenido a la App</Text>
          <TouchableOpacity onPress={handleGoToList} style={styles.button}>
            <Text style={styles.buttonText}>Ver Listado</Text>
            <Icon name="list" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: 'white',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default Home;

