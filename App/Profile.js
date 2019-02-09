import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
// import { RNCamera as Camera } from "react-native-camera";
// import {AzureInstance, AzureLoginView} from 'react-native-azure-ad-2';

import FIcons from "react-native-vector-icons/FontAwesome";
import Icon from 'react-native-vector-icons/Ionicons';
import {
    // AsyncStorage,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import {Container} from "native-base";
import CustomHeader from "./CustomHeader";

export default class Profile extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: "Profile ",
        headerLeft: <Icon name="ios-menu" style={{ paddingLeft: 10 }} onPress={() => navigation.navigate('DrawerOpen')} />,
        drawerLabel: 'Profile ',
        drawerIcon:
            <FIcons
                size={26}
                name={"user"}
                style={[styles.icon]}
            />

    });
    constructor(props) {
        super(props);
        this.state = {
            userName : "",
            userRollno : "",
            userMail : "",
            userStream : ""
        };
        this._userInfoAsync();
    }
   
    // Fetch the token from storage then navigate to our appropriate place
    _userInfoAsync = async () => {
        const userNameval = await AsyncStorage.getItem('name');
        // console.log(userName)
        this.setState({userName: userNameval});
        // console.log(this.state.userName)
        const userRollnoval = await AsyncStorage.getItem('rollno');
        this.setState({userRollno: userRollnoval});
        // console.log(userRollno)
        const userMailval = await AsyncStorage.getItem('mail');
        this.setState({userMail: userMailval});
        // console.log(userMail)
        const userStreamval = await AsyncStorage.getItem('stream');
        this.setState({userStream: userStreamval});
        // console.log(userStream)
        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
    };

  render() {
    return (
              <View style={styles.container}>
                  <View style={styles.header}></View>
                  {/* <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/> */}
                  <Image style={styles.avatar} source={require('./../images/avatar6.png')}/>
                  <View style={styles.body}>
                    <View style={styles.bodyContent}>
                      <Text style={styles.name}>{this.state.userName}</Text>
                      <Text style={styles.roll}>{this.state.userRollno}</Text>
                      <Text style={styles.stream}>{this.state.userStream}</Text>
                      <Text style={styles.mail}>{this.state.userMail}</Text>

                      <TouchableOpacity style={styles.buttonContainer}>
                        <Text>View ID Card</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.buttonContainer}>
                        <Text>Upload ID Card</Text>
                      </TouchableOpacity>
                    </View>
                </View>
              </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#00BFFF",
    height:200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
/*  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },*/
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    textAlign: 'center',
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  mail:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10
  },
  roll:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  stream:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
});
