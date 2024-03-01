
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/views/Home'
import ListScreen from './src/views/ListScreen';
import Buscador from './src/components/Buscador';

const Stack = createNativeStackNavigator();

function App (){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Lista" component={ListScreen} />
                <Stack.Screen name="Buscador" component={Buscador} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App