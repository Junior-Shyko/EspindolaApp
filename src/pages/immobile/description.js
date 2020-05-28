import React, { useEffect, useState }  from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, FlatList, ActivityIndicator } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import { Paragraph, Button, Card, Title, List } from 'react-native-paper';
import axios from 'axios';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

export default function Description(props) {
    console.log(props);
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        //fetch('http://192.168.11.7:3000/api/immobileCode/AP0267')
        axios.get(`http://192.168.11.7:3000/api/immobileCode/AP0267`)
        .then(res => {
          console.log(res.data[0]);
          const response = res.data[0];
          setData(response);
        })
      }, []);

    return (
    <View style={{ flex: 1, padding: 24 }}>
         <Text>{data.immobiles_condominium_price}</Text>
    </View>
    )
}
