import React, { Component }  from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, Image, Linking } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import { Paragraph, Button, Card, Title, List } from 'react-native-paper';
import axios from 'axios';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import { directive } from '@babel/types';

var { height } = Dimensions.get('window');
var { width } = Dimensions.get('window');
var box_count = 3;
var box_height = height / box_count;
var box_width = width / 4;
export default class App extends Component {

  constructor(props) {
    console.log(props)
    super(props);
    //const { itemId } = props.route.params;
   //  console.log('itemId' , itemId);
    this.state = {
      images: [
         require('../../assets/images/ap0268capa.jpg'),// Local image
      ],
      data: []
    };
  }
  componentDidMount() {
    const code = this.props.route.params.itemId;
    axios.get('http://192.168.11.7:3000/api/immobileCode/'+code)
    .then((response) => {
      //console.log(response.data);
      var allData = response.data;
      var img = [];
      allData.forEach(function(item) {          
          img.push(item.photo_immobiles_url);
          //console.log(img);          
      });
      this.setState({ images: img });
      this.setState({ data: response.data[0] });
      //console.log(this.state.data);
    })
    .catch((error) => console.error(error));
  }
  
  formatReal( int )
  {
    if(int == undefined ) {
      return '0,00'
    }
    var tmp = int+'00'+'';
    tmp = tmp.replace(/([0-9]{2})$/g, ",$1");
    if( tmp.length > 6 )
            tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
    if(tmp == '') {
      return 0
    }
    return tmp;
  }
  // other component code ...
  retInfoImovel(indice, icon) {
    const infoImmobile = this.state.data;
    for (var prop in infoImmobile) { 
      return (
        <View style={{width: box_width, height: 70, backgroundColor: '#3f6fb5', alignItems: 'center', borderRightColor: "#fff", borderWidth: 1}} 
        >
          <Icon name={icon} size={30} color="#daddf2" style={{marginTop: 4}} />
          <Text style={{
            color: "#daddf2",
            fontSize: 25
          }}>
            {infoImmobile[indice]}
          </Text>
        </View>
      )
    }
  }

  infoDescription(indice) {
    const infoImmobile = this.state.data;
    for (var prop in infoImmobile) {
      console.log("obj." + prop + " = " + infoImmobile[prop]);
      var getIndice = '';
      var getValue = '';
      switch (indice) {
        case 'immobiles_code':
          getIndice = 'Código Imóvel:';
          getValue = infoImmobile[indice];
          break;
        case 'immobiles_name_condo':
          getIndice = 'Nome Cond:';
          getValue = infoImmobile[indice];
          break;
        case 'immobiles_type_immobiles':
          getIndice = 'Tipo:';
          getValue = infoImmobile[indice];
          break;
        case 'immobiles_iptu_price':
          getIndice = 'Valor IPTU:';
          getValue = infoImmobile[indice];
          break;
        // case 'immobiles_code':
        //   getIndice = 'Código Imóvel:';
        //   getValue = infoImmobile[prop];
        //   break;
      }
      return (
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <View style={styles.cardContentWiewLeft} >
            <Text style={{
              fontSize: 15
            }}>
              {getIndice}
            </Text>
          </View>
          <View style={styles.cardContentViewRight} >
            <Text style={styles.textContentViewRight}>
              {getValue}
            </Text>
          </View>
        </View>
      )
    }
  }

  infoRent(state) {
    const infoImmobile = this.state.data[0];    
    for (var prop in infoImmobile) {
      console.log("infoRent." + prop + " = " + infoImmobile[prop]);
      if(prop == 'immobiles_rental_price' && infoImmobile[prop] > 0){
        return(
          <View>
            <Title style={styles.cardContentTitle}>Locação: {infoImmobile[prop]}</Title>
          </View>
        )
      }
      if(prop == 'immobiles_condominium_price' && infoImmobile[prop] > 0){        
        return (
          <Text style={styles.cardContentParagrafy}>Valor Cond. 800</Text>
        )
      }
    }
  }

  infoAddress() {
    const infoImmobile = this.state.data;
    for (var prop in infoImmobile) {
      return (
        <View>
            <Text style={styles.address}>
            {infoImmobile['immobiles_address']} , Nº: { infoImmobile['immobiles_number']} , Comp. {infoImmobile['immobiles_complement']} , Bairro: {infoImmobile['immobiles_district']} , Cidade: {infoImmobile['immobiles_city']} , CE: {infoImmobile['immobiles_state']}
            </Text>
        </View>
      )
    }
  };

  render() {
    console.log(this.state.data);
    return (
      <ScrollView>
          <SliderBox
              images={this.state.images}
              sliderBoxHeight={250}
              onCurrentImagePressed={index =>
                  console.warn(`image ${index} pressed`)
              }
              dotColor="#F5B406"
              inactiveDotColor="#daddf2"
              dotStyle={{
                width: 15,
                height: 15,
                borderRadius: 15
              }}
              // autoplay
              circleLoop
              imageLoadingColor="#3f47b5"
              parentWidth={this.state.width}
          />
          <View style={styles.box2}>
          
            {this.retInfoImovel('immobiles_qtd_toilet', 'toilet')}
            {this.retInfoImovel('immobiles_qtd_dormitory', 'bed-empty')}
            {this.retInfoImovel('immobiles_total_area', 'diameter-outline')}
            {this.retInfoImovel('immobiles_qtd_uncovered_jobs', 'car-back')}
         
          </View>
          <View style={styles.boxIndo}>
            <Card>
              <Card.Content style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              {
                this.state.data.immobiles_rental_price > 0 ?
                <View>
                  <Title style={styles.cardContentTitle}>
                  Locação: {this.formatReal(this.state.data.immobiles_rental_price)}</Title>
                </View>
                : 
                <View>
                  <Title style={styles.cardContentTitle}>
                  Venda: {this.formatReal(this.state.data.immobiles_selling_price)}</Title>
                </View>
              }
              {
                this.state.data.immobiles_condominium_price > 0 ?
                <View>
                  <Title style={styles.cardContentParagrafy}>
                  Valor Cond. {this.formatReal(this.state.data.immobiles_condominium_price)}
                  </Title>
                </View>
                : 
                false
              }
              </Card.Content>
              <Card.Content>
                {this.infoDescription('immobiles_code')}
              </Card.Content>
              <Card.Content>
              {this.infoDescription('immobiles_name_condo')}
              </Card.Content>
              <Card.Content>
              {this.infoDescription('immobiles_type_immobiles')}
              </Card.Content>
              <Card.Content>
              {this.infoDescription('immobiles_iptu_price')}
              </Card.Content>
            </Card>
          </View>
          <View style={styles.boxIndo}>
              <Card>
                <Card.Content>
                  <Title>
                    <Icon name="map-marker" size={20} />
                  Endereço do Imóvel</Title>
                  {this.infoAddress()}
                </Card.Content>
              </Card>
          </View>
          <View style={styles.boxIndo}>
              <Card>
                <Card.Content>
                  <Title>Descrição</Title>
                  <Paragraph style={styles.cardContentParagrafy}>
                    {this.state.data.immobiles_ps}
                  </Paragraph>
                </Card.Content>
              </Card>
              <Button 
              mode="contained"
              onPress={() => Linking.openURL('https://grautour.com/public/plugins/1705191495196031/ver-360.php?id=AP0262')}
              color="#f5b406"
              style={{
                margin: 15
              }}
            >
              <IconFontAwesome name="street-view" size={18} color="black" />
              Tour Virtual
            </Button>
          </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'row',
  },
  box: {
    height: box_height
  },
  box1: {
    backgroundColor: '#ffffff'
  },
  box2: {
    backgroundColor: '#EEEEEE',
    borderBottomColor: 'red',
    borderStyle: 'solid',
    width: box_width,
    flex: 1,
    flexDirection: 'row'
  },
  boxIndo: {
    backgroundColor: '#EEEEEE',
    borderBottomColor: 'red',
    borderStyle: 'solid',    
    flex: 1,
    margin: 20
    //flexDirection: 'row'
  },
  box3: {
    backgroundColor: '#e3aa1a'
  },
  caracContainer:{     
      backgroundColor: '#ffffff',
      alignItems: 'center'      
  },
  caracText:{
      color: '#535456',
      fontSize: 20,
      fontWeight: 'bold'
  },
  ps: {
    margin: 10,
    fontSize: 15
  },
  cardContentTitle: {
    color: '#4d5ec1',
    fontWeight: 'bold',
    fontSize: 25
  },
  cardContentParagrafy: {
    color: '#6e7286',
    fontSize: 15,
  },
  cardContentWiewLeft: {
    width: box_width,
    height: 50,
    alignItems: 'flex-end',
    borderBottomColor: '#daddf2',
    borderBottomWidth: 1,
    justifyContent: 'center'
  },
  cardContentViewRight: {
    width: box_width,
    height: 50,
    alignItems: 'flex-start',
    borderBottomColor: '#daddf2',
    borderBottomWidth: 1,
    justifyContent: 'center'
  },
  textContentViewRight: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  address: {
    fontSize: 20,
    color: '#6e7286',
  }
});