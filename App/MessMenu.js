


import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Picker, Image} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import FIcons from "react-native-vector-icons/FontAwesome";
export default class MessMenu extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: "Mess Menu ",
        headerLeft: <Icon name="ios-menu" style={{ paddingLeft: 10 }} onPress={() => navigation.navigate('DrawerOpen')} />,
        drawerLabel: 'Mess Menu ',
        drawerIcon:
            <FIcons
                size={26}
                name={"user"}
                style={[styles.icon]}
            />

    });
    state = {hostel : 'url_lohit', pickerValue : 'lohit'}
    componentDidMount(){
/*        return fetch('http://www.json-generator.com/api/json/get/bUiimXujIi?indent=2')
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                this.setState({
                    dataSource: responseJson,
                }, function(){

                });

            })
            .catch((error) =>{
                console.error(error);
            });*/
    }
    render() {
        return (
            <View>
                <Picker
                    selectedValue={this.state.pickerValue}
                    onValueChange={(value) => {
                        this.setState({pickerValue : value})
                        this.setState({hostel: this.state.dataSource[value]});
                    }}>
                    <Picker.Item label="Lohit" value="lohit" />
                    <Picker.Item label="Manas" value="manas" />
                </Picker>
                <Text style = {styles.text}>{this.state.hostel}</Text>
                {/* replace uri of image with {this.state.hostel} */}
                {/* <Image
          style={{width: 50, height: 50}}
          source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
        /> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
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
    text: {
        fontSize: 30,
        alignSelf: 'center',
        color: 'red'
    }
});

//JSON file format
/*
{
  "lohit": "url_lohit",
  "manas": "url_manas"
}
*/
