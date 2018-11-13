import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Dimensions,TouchableHighlight,Alert} from 'react-native';
import MapView from 'react-native-maps';
import LocalImage from './LocalImage';
import ImageZoom from 'react-native-image-pan-zoom';

import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
const win = Dimensions.get('window');

const ratio = win.width/569;
const SCREEN_HEIGHT = win.height
const SCREEN_WIDTH = win.width
const ASPECT_RATIO = SCREEN_WIDTH/SCREEN_HEIGHT
const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = 0.0421

export default class DisplayMap extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
        initialPosition: {
            latitude: 26.187347,
            longitude: 91.691529,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        },
        markerPosition: {
            latitude: 26.187347,
            longitude: 91.691529,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta : LONGITUDE_DELTA,
        }
    }
  }

  watchID = null;

  componentDidMount(){
      navigator.geolocation.getCurrentPosition((position) =>{
        var lat = parseFloat(position.coords.latitude)
        var long = parseFloat(position.coords.longitude)

        var initialRegion = {
            latitude: lat,
            longitude: long,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta : LONGITUDE_DELTA,
        }

        this.setState({initialPosition: initialRegion})
        this.setState({markerPosition: initialRegion})
      },
      (error) => console.log(error),
      {enableHighAccuracy: false, timeout:20000, maximumAge: 1000})

      this.watchID = navigator.geolocation.watchPosition((position) =>{
        var lat = parseFloat(position.coords.latitude)
        var long = parseFloat(position.coords.longitude)

        var lastRegion = {
            latitude: lat,
            longitude: long,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta : LONGITUDE_DELTA,
        }

        this.setState({initialPosition: lastRegion})
        this.setState({markerPosition: lastRegion})
      });

  }

  componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchID)
    }

  render() {
        return (
        <View style= {styles.container}>
            <MapView style={styles.map}
                region={this.state.initialPosition}>
            
                <MapView.Marker 
                    coordinate = {this.state.markerPosition}>
                    <View style={styles.radius}>
                        <View style = {styles.marker}>
                        </View>
                    </View>
                </MapView.Marker>
            </MapView>
        </View>
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
  radius: {
    height: 50,
    width: 50,
    borderRadius: 50/2,
    overflow: 'hidden',
    backgroundColor: 'rgba(0,122,255,0.1)',
    borderWidth: 1,
    borderColor: 'rgba(0,112,255,0.3)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  marker: {
      height: 20,
      width: 20,
      borderWidth: 3,
      borderColor: 'white',
      borderRadius: 20/2,
      overflow: 'hidden',
      backgroundColor: '#007AFF'
  }
});

