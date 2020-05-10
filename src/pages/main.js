import React, { useEffect, useState }  from 'react';
import { View, Text, FlatList, SafeAreaView, StyleSheet, Image } from 'react-native';
import axios from 'axios';

export default function Main() {
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
                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                      }}
                    />
                  </View>
                  <View style={styles.subShare}>
                    <Text style={styles.text}>{item.immobiles_address} - {item.immobiles_district}</Text> 
                    <Text>R$: {item.immobiles_rental_price} - Código: {item.immobiles_code}</Text>
                    <Text>{item.immobiles_property_title}</Text>
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
    //width: '10%',
    // color: '#666666',
     borderWidth: 1,
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