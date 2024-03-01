import React from 'react';
import { TextInput } from 'react-native';

const Buscador = ({ searchTerm, onSearchTermChange }) => {
    return (
        <TextInput
            style={{
                borderWidth: 1,
                borderColor: 'gray',
                padding: 10,
                marginBottom: 10,
                width: 200,
            }}
            placeholder="Buscar elementos"
            value={searchTerm}
            onChangeText={onSearchTermChange}
        />
    );
};

export default Buscador;
