import React, { useEffect, useState }  from 'react';
import { View, Text, FlatList, SafeAreaView, StyleSheet, Image} from 'react-native';
import { Button } from 'react-native-paper';
import axios from 'axios';
import Detail from './immobile/detail';
import { useNavigation } from '@react-navigation/native';

export default function Main({ navigation }) {
    const [data, setData] = useState([]);
    
    useEffect(() => {
      axios.get('http://192.168.11.7:3000/api/featuredPhotoImmobile')
      .then((response) => { 
        //console.log(response.data)
        setData(response.data)
       })
      .catch((error) => console.error(error));
    }, []);
    // const { params } = navigation.state;
    // const itemId = params ? params.itemId : null;
    // console.log(itemId);
    return (
      <View style={{ flex: 1, padding: 2 }}>
        <SafeAreaView>
          <FlatList
            data={data}
            keyExtractor={item => item.immobiles_id.toString()}
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
                    />
                  </View>
                  <View style={styles.subShare} >
                    
                    <Text onPress={() => {
                      /* 1. Navigate to the Details route with params */
                      //const {itemId} = navigation.route
                      navigation.navigate('Detalhes', { itemId: item.immobiles_code },
                      );
                      //alert('oi');
                    }}
                      style={{
                        backgroundColor: '#606fc7',
                        borderRadius: 5,
                        color: '#fff',
                        marginLeft: 10,
                        fontSize: 15,
                        marginTop: 5,
                        minWidth: 20,
                        padding: 3,
                        position: 'absolute',
                        textAlign: 'center',
                        fontWeight: 'bold'
                      }}
                    > R$: {item.immobiles_rental_price}</Text>
                    <View  style={{
                      flexDirection: 'row'
                    }}>
                      <Text style={styles.textTitle}>
                        {item.immobiles_property_title}
                      </Text>
                    </View>
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
    marginLeft: 10
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
    marginLeft: 5,
    fontSize: 16
  },
  textTitle: {
    color: "#333333",
    marginTop: 35,
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