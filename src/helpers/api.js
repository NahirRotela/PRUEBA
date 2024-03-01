import axios from 'axios';

export const obtenerElementos = async () => {
  try {
    const response = await axios.get('https://rickandmortyapi.com/api/character');
    return response.data;
  } catch (error) {
    throw new Error('Error al obtener los elementos');
  }
};

export const eliminarElemento = async (id) => {
  try {
    await axios.delete(`https://rickandmortyapi.com/api/character/${id}`);
  } catch (error) {
    throw new Error('Error al eliminar el elemento');
  }
};

export const agregarElemento = async (nuevoElemento) => {
  try {
    const response = await axios.post(nuevoElemento);
    return response.data;
  } catch (error) {
    throw new Error('Error al agregar el elemento');
  }
};

export const editarElemento = async (id, elementoEditado) => {
  try {
    const response = await axios.put(`https://rickandmortyapi.com/api/character/${id}`, elementoEditado);
    return response.data;
  } catch (error) {
    throw new Error('Error al editar el elemento');
  }
};

