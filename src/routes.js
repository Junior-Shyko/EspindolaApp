import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/main';
import Immobile from './pages/immobile';


function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          onPress={() => navigation.navigate('Immobile')}
          title="Go to notifications"
        />
      </View>
    );
  }

  function NotificationsScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button onPress={() => navigation.goBack()} title="Go back home" />
      </View>
    );
  }
  
//const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function App() {
    return (
        <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen 
                name="Home" 
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
                onPress={() => navigation.navigate('Immobile')}
                />
            <Drawer.Screen name="Immobile" component={Immobile} />
            <Drawer.Screen name="Venda" component={NotificationsScreen} />
            <Drawer.Screen name="Alugar" component={Immobile} />
            <Drawer.Screen name="Reserva de chaves" component={Immobile} />
            <Drawer.Screen name="Fazer proposta" component={Immobile} />
            <Drawer.Screen name="Sobre" component={Immobile} />
        </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default App
