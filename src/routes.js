import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Main from './pages/main';

function HomeScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        </View>
    );
}

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen 
            name="Espíndola Imobiliária" 
            component={Main}
            options={{
                headerShown: true,
                headerTintColor: '#FFF',
                headerStyle: {
                    backgroundColor: '#002963',
                    elevation: 0,
                    shadowOpacity: 0
                }
            }}
            />
        </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App
