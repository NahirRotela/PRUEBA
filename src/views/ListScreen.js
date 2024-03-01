import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert, TextInput } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { obtenerElementos, eliminarElemento } from '../helpers/api';
import ElementoLista from '../components/ElementoLista';

const ListScreen = () => {
  const [elementos, setElementos] = useState([]);
  const [filteredElements, setFilteredElements] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const obtenerDatos = async () => {
    try {
      const datos = await obtenerElementos();
      setElementos(datos.results);
      setFilteredElements(datos.results);
    } catch (error) {
      Alert.alert('Error', 'No se pudo obtener la lista de elementos.');
    }
  };

  useEffect(() => {
    obtenerDatos();
  }, []);

  const handleEliminarElemento = async (id) => {
    console.log(id);
    try {
      // await eliminarElemento(id);
      const nuevosDatos = elementos.filter((elem) => elem.id !== id);
      setFilteredElements(nuevosDatos);
      Alert.alert('Éxito', 'Elemento eliminado correctamente.');
    } catch (error) {
      Alert.alert('Error', 'No se pudo eliminar el elemento.');
    }
  };

  const buscar = (search) => {
    setSearchTerm(search);

    const filteredElements = elementos.filter((elemento) =>
      elemento.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredElements(filteredElements);
  };

  const handleMostrarId = (id) => {
    Alert.alert('ID del elemento', `El ID del elemento es: ${id}`);
  };

  return (
    <View style={{ flex: 1, paddingHorizontal: 20, paddingTop: 20 }}>
      <TextInput
        style={{
          height: moderateScale(40),
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: moderateScale(10),
          paddingHorizontal: moderateScale(10),
        }}
        placeholder="Buscar"
        value={searchTerm}
        onChangeText={buscar}
      />
      <FlatList
        data={filteredElements}
        renderItem={({ item }) => (
          <ElementoLista item={item} onDelete={handleEliminarElemento} onMostrarId={handleMostrarId} />
        )}
      />
    </View>
  );
};

export default ListScreen;
