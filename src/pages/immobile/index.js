import React, { Component }  from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';


export default class App extends Component {

  constructor(props) {
      console.log(props)
    super(props);
    this.state = {
      images: [
        "http://lh3.googleusercontent.com/EF-qECMIj9hTsrzbERx3cSCWo7abFAPPJ2erN1Qw1GW644HRvN3e2czP9_-gnSNOYjzMuwRyZludbrBfRi3ShqiwgVCr5366zM8=w1024-h768",
        "http://lh3.googleusercontent.com/gV8NU1pMQReEb60UXMLHnDoBVLYsuOThjJIJ3gVKis_mxr79jaH0o_Dyb8owAJ1DwQm-bWIk5BwB1sK3v_SJob-Z4_m0RyQmaA=w1024-h768",
        "http://lh3.googleusercontent.com/kCu6-SKjCy-me2XZphvpgkuNPnsm3QffkBKLtuA_w91Oc6xc9gdHgTXeK7F7HcRgo-z4dYzEEgcX_1BVdonO0vG5l4ddHZBO=w1024-h768",
        "http://lh3.googleusercontent.com/Zq5zik_m1NFDcx-UAfIoZzDhYuuxxkst-sbA34EBuK-otEAiAaZ0r7gtz0FdajMvyf2RGvd_4ggr_c694622takjQh7ihtqY=w1024-h768", // Network image
        require('../../assets/images/ap0268capa.jpg'),          // Local image
      ]
    };
  }
  
  // other component code ...
  render() {
     const { navigation } = this.props; 
    return (
        // <View>
        //     <View style={{height: 50, backgroundColor: 'blue'}}>
        //         <Button
        //             title="Voltar"
        //             color="#841584"
        //             onPress={() => navigation.goBack() }
        //         >
        //         </Button>
        //     </View>
            
        // </View>
        <View style={styles.container} onLayout={this.onLayout}>
            <Button
                title="Voltar"
                color="#002963"
                onPress={() => navigation.goBack()}
            >
            </Button>
            <SliderBox
                images={this.state.images}
                sliderBoxHeight={300}
                onCurrentImagePressed={index =>
                    console.warn(`image ${index} pressed`)
                }
                parentWidth={this.state.width}
            />
            <View style={styles.caracContainer}>
                <Text style={styles.caracText}>Caracteristicas</Text>
            </View>
        </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#EBF1F5'
    },
    caracContainer:{
        height: 30,
        backgroundColor: '#ffffff',
        alignItems: 'center'
    },
    caracText:{
        color: '#535456',
        fontSize: 20,
        fontWeight: 'bold'
    }
  });