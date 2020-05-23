import * as React from 'react';
import { View, Text, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import Main from '../main';
import Immobile from '../immobile';
import { NavigationContainer, useNavigation } from '@react-navigation/native';


var { height } = Dimensions.get('window');
var { width } = Dimensions.get('window');
// console.log(Dimensions.get('window').width);
var box_count = 3;
var box_height = height / box_count;
var box_width = width / 2;
// console.log({box_height});
// console.log({box_width});

const Home = ({ navigation }) =>{
    <View style={styles.container}>
        <View style={[styles.box, styles.box1]}>
            <Card style={[styles.box, styles.boxCard]}>
                <Card.Content>
                    <Title>Apartamento</Title>
                </Card.Content>
                <Card.Cover 
                source={{ uri: 'https://image.freepik.com/vetores-gratis/hotel-isometrico-de-vetor-apartamento-escola-ou-predio-arranha-ceu_78072-254.jpg' }}
                style={{
                height: '50%'
                }} />
                <Button
                    mode="contained"
                    color="#32408f"
                    compact={false}
                    onPress={() => navigation.navigate('Imoveis') }
                    >Ver todos
                </Button>
                <Card.Actions>
                </Card.Actions>
            </Card>
            <Card style={[styles.box, styles.boxCard]}>
                <Card.Content>
                    <Title>Loja</Title>
                </Card.Content>
                <Card.Cover 
                source={{ uri: 'https://image.freepik.com/vetores-gratis/construcao-de-loja-vector-icon-ilustracao-edificio-e-marco-icone-conceito_138676-428.jpg' }}
                style={{
                height: '50%'
                }} />
                <Button
                    mode="contained"
                    color="#32408f"
                    compact={false}
                    >Ver todos
                </Button>
                <Card.Actions>
                </Card.Actions>
            </Card>
        </View>
        <View style={[styles.box, styles.box1]}>
            <Card style={[styles.box, styles.boxCard]}>
                <Card.Content>
                    <Title>Casa</Title>
                </Card.Content>
                <Card.Cover 
                source={{ uri: 'https://image.freepik.com/vetores-gratis/icone-do-vetor-de-casa_22350-18.jpg' }}
                style={{
                height: '50%'
                }} />
                <Button
                    mode="contained"
                    color="#32408f"
                    compact={false}
                    >Ver todos
                </Button>
                <Card.Actions>
                </Card.Actions>
            </Card>
            <Card style={[styles.box, styles.boxCard]}>
                <Card.Content>
                    <Title>Sala Comercial</Title>
                </Card.Content>
                <Card.Cover 
                source={{ uri: 'https://image.freepik.com/vetores-gratis/icone-do-vetor-de-casa_22350-18.jpg' }}
                style={{
                height: '50%'
                }} />
                <Button
                    mode="contained"
                    color="#32408f"
                    compact={false}
                    >Ver todos
                </Button>
                <Card.Actions>
                </Card.Actions>
            </Card>
        </View>
    </View>
}
const styles = StyleSheet.create({
container: {
    flex: 1,
    flexDirection: 'row',
    //justifyContent: 'center', 
    //alignItems: 'center'
},
box: {
    height: box_height
},
box1: {
//
    width: box_width,
//backgroundColor: '#ffffff'
},
boxCard: {
//
    width: (box_width - 20),
    backgroundColor: '#ffffff',
    margin: 10,
    height: '90%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
    width: 0,
    height: 3
},
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6
},
box2: {
backgroundColor: '#8BC34A'
},
box3: {
backgroundColor: '#e3aa1a'
}
});

Home.navigationOptions = {
    title: 'Home',
}
  
export default Home;