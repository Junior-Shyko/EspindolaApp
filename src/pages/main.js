import React, { useEffect, useState }  from 'react';
import { View, Text, FlatList, SafeAreaView, StyleSheet, Image, Linking } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

export default function Main({ navigation }) {
    const [data, setData] = useState([]);
    
    console.log('getImmobile');
  
    useEffect(() => {
      axios.get('https://espindolaimobiliaria.com.br/api/immobile-all')
      .then((response) => { 
        console.log(response.data)
        setData(response.data)
       })
      .catch((error) => console.error(error));
    }, []);
    
    return (
      <View style={{ flex: 1, padding: 2 }}>
        <SafeAreaView>
          <FlatList
            data={data}
            keyExtractor={item => item.immobiles_id}
            renderItem={({ item }) => (             
                <View style={styles.item}>
                <View style={styles.sub}>
                  <View style={styles.subText}>
                    <Image
                      style={styles.tinyLogo}
                      source={{
                        uri: 'http://lh3.googleusercontent.com/tRWfgggnB44doWaAP1vUGurajvnzI-W9BZMsRIPYF7we8nQ9EjJRfwgCaBQGRlT65_Gv48c2LuOqEtyodxYD_MPMV38RV9cq=w1024-h768',
                      }}
                      onPress={() => alert('foi')}
                    />
                  </View>
                  <View style={styles.subShare} >
                  <Text style={styles.text} onPress={() => 
                    //console.log(item.immobiles_code);
                    navigation.navigate('Immobile' , { 
                      itemId: item.immobiles_code 
                    } )
                  }>
                      {item.immobiles_address} - {item.immobiles_district}
                    </Text> 
                    <Text onPress={() => alert('foi')}>R$: {item.immobiles_rental_price} - Código: {item.immobiles_code}</Text>
                    <Text onPress={() => alert('foi')}>{item.immobiles_property_title}</Text>
                  </View>
                </View>
              </View>
            )}
          />
        </SafeAreaView>
      </View>
    );
}
const styles = StyleSheet.create({
  item: {
    //alignItems: "center",
    backgroundColor: "#E5E7E9",
    flexGrow: 1,
    marginBottom: 4,
    padding: 15,
    height: 120,
    marginLeft: 0
  },
  text: {
    color: "#333333",
    fontWeight: 'bold'
  },
  sub: {
    flexDirection: 'row',
    margin: 1,
    justifyContent: 'space-between',
    //marginTop: 12
  },
  subText: {
    width: 50,
    // color: '#666666',
    // borderWidth: 1,
    // borderColor: "#bfc9d8",
    // borderRadius: 6,
    marginRight: 10,
    marginLeft: 0
  },
  subShare: {
    width: 300
    // marginRight: 20,
    // marginTop: 12,
    // marginBottom: 12,
    // fontFamily: 'Roboto',
    // fontStyle: 'normal',
    // fontWeight: 'normal',
    // fontSize: 12,
    // lineHeight: 16,
    // letterSpacing: 0.4,
    // color: '#EEEEEE'
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});