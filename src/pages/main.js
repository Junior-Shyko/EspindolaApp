import React, { useEffect, useState }  from 'react';
import { View, Text, FlatList, SafeAreaView, StyleSheet, Image, Badge, Linking } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

export default function Main({ navigation }) {
    const [data, setData] = useState([]);
    
    useEffect(() => {
      axios.get('http://192.168.11.5:3000/api/featuredPhotoImmobile')
      .then((response) => { 
        //console.log(response.data)
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
                  <Text style={styles.textType}>
                    {item.immobiles_type_immobiles} - {item.immobiles_district} - {item.immobiles_city}
                  </Text>
                <View style={styles.sub}>
                  <View style={styles.subText}>
                    <Image
                      style={styles.tinyLogo}
                      source={{
                        uri: item.photo_immobiles_url,
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
                    }>{item.immobiles_code}
                    </Text> 
                    
                    <Text onPress={() => alert('foi')}> - Código: {item.immobiles_code}</Text>
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
    height: 150
  },
  text: {
    color: "#333333",
    fontWeight: 'bold',
    marginTop: 8,
    marginLeft: 5
  },
  sub: {
    flexDirection: 'row',
    margin: 1,
    justifyContent: 'space-between',
    //marginTop: 12
  },
  subText: {
    width: 80,
    // color: '#666666',
    // borderWidth: 1,
    // borderColor: "#bfc9d8",
    // borderRadius: 6,
    // marginRight: 0,
    // marginLeft: 0
  },
  textType: {
    color: "#333333",
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 10
  },
  subShare: {
    width: 300,
    backgroundColor: "#ffffff"
    // marginRight: 20,
    //marginTop: 8,
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
    marginTop: 2,
    width: 110,
    height: 110,
    backgroundColor: "#ffffff"
  },
});