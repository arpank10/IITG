import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Dimensions,TouchableHighlight,Alert} from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';

import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
import DisplayMap from './GoogleMap';
import {Container, Icon} from "native-base";
import FIcons from "react-native-vector-icons/FontAwesome";
import CustomHeader from "./CustomHeader";
const win = Dimensions.get('window');

const ratio = win.width/569;


export default class CampusMap extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: "Campus Map ",
        headerLeft: <Icon name="ios-menu" style={{ paddingLeft: 10 }} onPress={() => navigation.navigate('DrawerOpen')} />,
        drawerLabel: 'Campus Map  ',
        drawerIcon:
            <FIcons
                size={24}
                name={"map-o"}
                style={[styles.icon]}
            />

    });

  constructor(props) {
    super(props);
  
    this.state = {
      staticmap : false
    };
  }
  render() {
    return (
        <Container>
            <CustomHeader
                title="Campus Map"
                drawerOpen={() => this.props.navigation.openDrawer()}
            />
            <MapNavigator />
        </Container>
    );
  }
}
class Home extends Component {
  constructor(props) {
    super(props);
  }
  _openGoogleMaps=()=>{
    this.props.navigation.navigate('DisplayGoogleMap');
  };

  
  
  render(){
    return(
      <Container>
             <TouchableHighlight
             style={styles.button}
             onPress = {() => this._openGoogleMaps()}>
                 <Text style={styles.text}>Open Google Maps</Text>
            </TouchableHighlight>
            
        <ImageZoom cropWidth={Dimensions.get('window').width}
        cropHeight={768*ratio}
        imageWidth={win.width}
        imageHeight={768*ratio}
        style = {styles.image}
        >
        <Image style={{alignSelf: 'stretch',
        width: win.width,
        height: 768*ratio}}
            source={require('./../images/campus_map.png')}/>
      </ImageZoom>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  map:{
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  PinContent: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 8,
    paddingRight: 8,
  },
  button: {
    marginTop: 50,
    width: 200,
    height: 40,
    marginRight: 40,
    alignItems: 'center',
    borderColor: 'black',
    backgroundColor: '#00bfff',
    alignSelf: 'flex-end'
  },
  text: {
    color: 'black',
    marginTop: 4,
    fontSize: 20
  },
  image: {
    borderColor: 'black',
    marginTop:70
  },
  icon: {
      height: 26,
      width: 30
  }
});

const MapNavigator =  createStackNavigator(
  {
    DisplayGoogleMap : DisplayMap,
    Home : Home
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
    initialRouteName: 'Home',
  }
);


  