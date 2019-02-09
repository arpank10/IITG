//This is an example of Card View// 
import React from 'react';
//import react in our code. 
import { Text, View, StyleSheet, Dimensions , Image,TouchableOpacity, ScrollView} from 'react-native';
//import all the components we are going to use.
// import { Card } from 'react-native-elements';
//import Card
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
 


const screenWidth = Dimensions.get('window').width;
const ratio = screenWidth/569;
export default class Post extends React.Component {
  render() {
    return (
      
      <ScrollView style={styles.container}>
        <TouchableOpacity style= {styles.card}>
          <View style = {styles.cardHeading}><Text style={styles.heading}>Coding Club</Text></View>
          <View style={{borderBottomColor: 'black',borderBottomWidth:4}}></View>
          <Image style={styles.cardImage} source = {require('./../images/iitg.png')}></Image>
          <View style={{borderBottomColor: 'black',borderBottomWidth:4}}></View>
          <View ><Text style={styles.content}>Post content goes here</Text></View>
         
        </TouchableOpacity>

        <TouchableOpacity style= {styles.card}>
          <View style = {styles.cardHeading}><Text style={styles.heading}>Coding Club</Text></View>
          <View style={{borderBottomColor: 'black',borderBottomWidth:4}}></View>
          <Image style={styles.cardImage} source = {require('./../images/campus_map.png')}></Image>
          <View style={{borderBottomColor: 'black',borderBottomWidth:4}}></View>
          <View ><Text style={styles.content}>Post content goes here</Text></View>
         
        </TouchableOpacity>

        <TouchableOpacity style= {styles.card}>
          <View style = {styles.cardHeading}><Text style={styles.heading}>Coding Club</Text></View>
          <View style={{borderBottomColor: 'black',borderBottomWidth:4}}></View>
          <Image style={styles.cardImage} source = {require('./../images/launch_screen.png')}></Image>
          <View style={{borderBottomColor: 'black',borderBottomWidth:4}}></View>
          <View ><Text style={styles.content}>Post content goes here</Text></View>
         
        </TouchableOpacity>

        <TouchableOpacity style= {styles.card}>
          <View style = {styles.cardHeading}><Text style={styles.heading}>Coding Club</Text></View>
          <View style={{borderBottomColor: 'black',borderBottomWidth:4}}></View>
          <Image style={styles.cardImage} source = {require('./../images/splash.jpg')}></Image>
          <View style={{borderBottomColor: 'black',borderBottomWidth:4}}></View>
          <View ><Text style={styles.content}>Post content goes here</Text></View>
         
        </TouchableOpacity>

      </ScrollView>


    );
  }
}
 
const styles = StyleSheet.create({
  container:{
    marginTop:20,
    backgroundColor: '#D3D3D3',

  },
  card: {
    backgroundColor: '#FFFFFF',
    marginBottom: 10,
    marginLeft:'2%',
    width:'96%',
    borderRadius:15,
    borderWidth: 1,
    borderColor: '#fff',
  },
  cardImage:{
    marginTop:10,
    width:'100%',
    height:200,
    resizeMode:'contain'
  },
  cardHeading:{
    flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
  },
  heading:{
    padding:5,
    fontSize:20,
    color:'black',
    fontWeight:'bold'
  },
  content:{
    fontSize:14,
    marginTop:2,
    marginLeft:10,
    padding:5
  }
});

/*

    borderBottomColor:'black',
    borderBottomWidth:1,
    borderLeftColor:'black',
    borderLeftWidth:1,
    borderTopColor:'black',
    borderTopWidth:1,
    borderRightColor:'black',
    borderRightWidth:1,*/