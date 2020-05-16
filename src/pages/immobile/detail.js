import React, { Component }  from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, Linking } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import { Paragraph, Button, Card, Title, List } from 'react-native-paper';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';
import { directive } from '@babel/types';

export default class App extends Component {

  constructor(props) {
    console.log(props)
    super(props);
        
    this.state = {
      images: [
         require('../../assets/images/ap0268capa.jpg'),          // Local image
      ],
      dataImo: [],
      data: [],
      ps: ''
    };
  }
  componentDidMount() {
    console.log(this.props.navigation.state.params.itemId)
    const code = this.props.navigation.state.params.itemId;
    axios.get('https://espindolaimobiliaria.com.br/api/immobileCode/'+code)
    .then((response) => {
      //console.log(response.data);
      var allData = response.data;
      var img = [];
      allData.forEach(function(item) {          
          img.push(item.photo_immobiles_url);
          //console.log(img);          
      });
      this.setState({ images: img });
      this.setState({ data: response.data });
      console.log(this.state.data);
    })
    .catch((error) => console.error(error));
  }
  // other component code ...
  render() {
    return (
      <ScrollView style={styles.container}>
          <View style={[styles.box, styles.box1]}>
            <SliderBox
                  images={this.state.images}
                  sliderBoxHeight={300}
                  onCurrentImagePressed={index =>
                      console.warn(`image ${index} pressed`)
                  }
                  parentWidth={this.state.width}
            />
          </View>
          <View style={[styles.box,styles.box2]}>
            <View>
            <Card>
            <Card.Content>
              <Title>Característica</Title>
              <Paragraph>
              Lorem ipsum porta nisl praesent auctor mi hac vulputate risus, curabitur amet fermentum consectetur convallis turpis non elit vel arcu, quam orci vitae in torquent habitasse potenti tortor. 
              </Paragraph>
              
            </Card.Content>
            <Card.Actions>
              <View style={{flex: 1,flexDirection: 'row'}}>
              <Button>
                <Icon name="check" size={18} color="#999" /> Piscina
              </Button>
              <Button>
                <Icon name="check" size={18} color="#999" /> Portão Eletrico
              </Button>
              </View>
            </Card.Actions>
            <Card.Actions>
              <View style={{flex: 1,flexDirection: 'row'}}>
              <Button>
                <Icon name="check" size={18} color="#999" /> Salão de festas
              </Button>
              <Button>
                <Icon name="check" size={18} color="#999" /> Academia
              </Button>
              </View>
            </Card.Actions>            
          </Card>
            </View>
          </View>
          <View style={[styles.box, styles.box2]}>
            <View style={{flexDirection: 'row'}}>
              
              <Card style={{margin: 5}}>
                <Card.Content>
                  <Button>
                    Aluguel R$: 1.600
                  </Button>
                </Card.Content>
            </Card>
              <Card style={{margin: 5}}>
                <Card.Content>
                  <Button>
                    Cond. R$: 800
                  </Button>
                </Card.Content>
            </Card>
            </View>
          <Button 
            mode="contained"
            onPress={() => Linking.openURL('https://grautour.com/public/plugins/1705191495196031/ver-360.php?id=AP0262')}
            color="#f5b406"
            style={{
              margin:10
            }}
          >
          <Icon name="street-view" size={18} color="black" />
           Tour Virtual
          </Button>
          </View>
      </ScrollView>
    );
  }
}
var { height } = Dimensions.get('window');
var { width } = Dimensions.get('window');
var box_count = 3;
var box_height = height / box_count;
var box_width = width / 1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
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
    width: box_width
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
  }
});