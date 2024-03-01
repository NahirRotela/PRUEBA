import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/FontAwesome';

const ElementoLista = ({ item, onDelete, posicion }) => {
  const [species, setSpecies] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    obtenerDatosAdicionales();
  }, []);

  const obtenerDatosAdicionales = async () => {
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character/${item.id}`);
      const data = await response.json();
      setSpecies(data.species);
      setImage(data.image);
    } catch (error) {
      console.log('Error al obtener datos adicionales:', error);
    }
  };

  return (
    <View
      style={{
        width: moderateScale(200),
        height: moderateScale(150),
        backgroundColor: 'white',
        marginVertical: moderateScale(5),
        padding: moderateScale(10),
      }}
    >
      <Image source={{ uri: image }} style={{ width: '100%', height: '70%' }} />
      <Text>{item.name}</Text>
      <Text>{species}</Text>
      <TouchableOpacity onPress={() => onDelete(item.id)}>
        <Text style={{ color: 'red' }}>Eliminar</Text>
        <Icon name="trash" size={10} color="red" />
      </TouchableOpacity>
    </View>
  );
};

export default ElementoLista;
