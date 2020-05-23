import React, { Component } from 'react'
//import react in our code.
import { View, Image, TouchableOpacity } from 'react-native';
import Home from './pages/immobile';
import Imoveis from './pages/immobile/imoveis';
import Detail from './pages/immobile/detail';
import Main from './pages/main';
import Icon from 'react-native-vector-icons/FontAwesome';
import './config/statusBarConfig';
//Import React Navigation
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';

class NavigationDrawerStructure extends Component {
  //Structure for the navigatin Drawer
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{ flexDirection: 'row'}}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          {/*Donute Button Image */}
          <Icon
            name="bars"
            size={25}
            color="#fff"
            style={{
              marginLeft: 10
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const HomeStackNavigator = createStackNavigator({
  //All the screen from the Screen1 will be indexed here
  First: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: 'Espíndola Imobiliária',
      headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#1E3B70',
      },
      headerTintColor: '#fff',
    }),
  },
});

const AllImmobileStackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  Second: {
    screen: Main,
    navigationOptions: ({ navigation }) => ({
      title: 'Todos os Imóveis',
      headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#1E3B70',
      },
      headerTintColor: '#fff',
    }),
  },
});
//Immóveis a venda
const SaleImmobileStackNavigator = createStackNavigator({  
  SaleImmobile: {
    screen: Imoveis,
    navigationOptions: ({ navigation }) => ({
      title: 'Imóveis a Venda',
      headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#1E3B70',
      },
      headerTintColor: '#fff',
    }),
  },
});
//Immóveis para locação
const RentImmobileStackNavigator = createStackNavigator({
  RentImmobile: {
    screen: Imoveis,
    navigationOptions: ({ navigation }) => ({
      title: 'Imóveis a Venda',
      headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#1E3B70',
      },
      headerTintColor: '#fff',
    }),
  },
});
//Reserva de Chaves
const ReserveKeyStackNavigator = createStackNavigator({
  ReserveKey: {
    screen: Imoveis,
    navigationOptions: ({ navigation }) => ({
      title: 'Reserva de Chave',
      headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#1E3B70',
      },
      headerTintColor: '#fff',
    }),
  },
});
//Fazer proposta
const ProposalStackNavigator = createStackNavigator({
  Proposal: {
    screen: Detail,
    params: { 'itemId' : 'AP0267' },
    navigationOptions: ({ navigation }) => ({
      title: 'Detalhes',
      headerLeft: ()=> {
        return (
          <TouchableOpacity onPress={ () => navigation.navigate('Screen2') }>
          {/*Donute Button Image */}
          <Icon
            name="arrow-left"
            size={23}
            color="#fff"
            style={{
              marginLeft: 10
            }}
          />
        </TouchableOpacity>
        )
      } ,
      headerStyle: {
        backgroundColor: '#1E3B70',
      },
      headerTintColor: '#fff',
    }),
  },
});

const AboutStackNavigator = createStackNavigator({
  //All the screen from the Screen3 will be indexed here
  About: {
    screen: Imoveis,
    navigationOptions: ({ navigation }) => ({
      title: 'Sobre a Espíndola',
      headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#1E3B70',
      },
      headerTintColor: '#fff',
    }),
  },
});

const DrawerNavigator = createDrawerNavigator({
  //Drawer Optons and indexing
  Screen1: {
    screen: HomeStackNavigator,
    navigationOptions: {
      drawerLabel: 'Home',
    },
  },
  Screen2: {
    screen: AllImmobileStackNavigator,
    navigationOptions: {
      drawerLabel: 'Todos os imóveis',
    },
  },
  SaleImmobile: {
    screen: SaleImmobileStackNavigator,
    navigationOptions: {
      drawerLabel: 'Imóveis a Venda',
    },
  },
  RentImmobile: {
    screen: RentImmobileStackNavigator,
    navigationOptions: {
      drawerLabel: 'Imóveis para Locação',
    },
  },
  ReserveKey: {
    screen: ReserveKeyStackNavigator,
    navigationOptions: {
      drawerLabel: 'Reserva de chaves',
    },
  },
  Proposal: {
    screen: ProposalStackNavigator,
    navigationOptions: {
      drawerLabel: 'Fazer proposta',
    },
  },
  About: {
    //Title
    screen: AboutStackNavigator,
    navigationOptions: {
      drawerLabel: 'Sobre a Espíndola',
    },
  },
});

export default createAppContainer(DrawerNavigator);