
import React from 'react';
import { View, Button, Text } from 'react-native';

const Imoveis = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>About</Text>
  </View>
);

Imoveis.navigationOptions = {
  title: 'About',
}


export default Imoveis;