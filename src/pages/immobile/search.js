import * as React from 'react';
import { View, Text, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import SearchRent from './forms/search'
import { TabView, SceneMap } from 'react-native-tab-view';

const FirstRoute = () => (
    <SearchRent />
);
  
  const SecondRoute = () => (
    <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
  );
  
  const initialLayout = { width: Dimensions.get('window').width };
  
  export default function TabViewExample() {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: 'first', title: 'Alugar' },
      { key: 'second', title: 'Comprar' },
    ]);
  
    const renderScene = SceneMap({
      first: FirstRoute,
      second: SecondRoute,
    });

    return (
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        tabStyle={{
            backgroundColor: 'green'
        }}
        style={{
            backgroundColor: 'white'
        }}
      />
    );
  }
  
  const styles = StyleSheet.create({
    scene: {
      flex: 1,
    },
  });