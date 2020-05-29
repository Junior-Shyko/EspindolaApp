import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './pages/immobile';
import Imoveis from './pages/immobile/imoveis';
import Detail from './pages/immobile/detail';
import Search from './pages/immobile/search.js';
import Main from './pages/main';

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Imoveis')}
      />
    </View>
  );
}

function ProfileScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
      <Button
        title="BOtão do profile"
        onPress={() => navigation.navigate('Imoveis')}
      />
    </View>
  );
}

const FeedStack = createStackNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{ backgroundColor: '#694fad' }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const icons = {
            Home: 'home',
            Proposta: 'playlist-edit',
            Pesquisar: 'map-search-outline',
          };
          return (
            <Icon
              name={icons[route.name]}
              color={color}
              size={20}
            />
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Pesquisar" component={Search} />
      <Tab.Screen name="Proposta" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ 
          headerStyle: { 
            backgroundColor: '#1E3B70' 
          },
          headerTintColor: '#fff',
        }}
      >
        <Stack.Screen
          name="Espíndola Imobiliária"
          component={HomeTabs} 
        />
        <Stack.Screen name="Imoveis" component={Main} />
        <Stack.Screen name="Detalhes" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;