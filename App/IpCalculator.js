import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet ,TextInput,Button} from 'react-native'
import Icon from "react-native-vector-icons/Ionicons";
import MIcons from "react-native-vector-icons/MaterialCommunityIcons";
import CustomHeader from "./CustomHeader";
import {Container} from "native-base";

export default class IpCalculator extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: "IP ",
        headerLeft: <Icon name="ios-menu" style={{ paddingLeft: 10 }} onPress={() => navigation.navigate('DrawerOpen')} />,
        drawerLabel: 'IP ',
        drawerIcon:
            <MIcons
                size={26}
                name={"ethernet"}
                style={[styles.icon]}
            />

    });
   state = {
       user: '',
       block_no: '',
       floor_no: '',
       room_no: '',
       bool : false ,
       auto : false,
       IP : '',
       netmask: '',
       gateway: ''

    }
   updateUser = (user) => {
      this.setState({ user: user })
   }
   updateBlockNo = (text) =>{
       this.setState({ block_no:text })
   }
   updateFloorNo = (text) =>{
    this.setState({ floor_no:text })
    }
    updateRoomNo = (text) =>{
        this.setState({ room_no:text })
    }
    _onPress = () =>{
        this.setState({ bool: true});
        this.setState({ auto: false});
        if(this.state.user == "Siang"){
            var temp = "10.3." + this.state.floor_no + "." + this.state.room_no;
            this.setState({ 
                IP : temp,
                netmask: '255.255.252.0',
                gateway: '10.3.0.254' 
            });
        }
        else if(this.state.user == "Kapili"){
            var temp = "10.1." + this.state.floor_no + "." + this.state.room_no;
            this.setState({ 
                IP : temp,
                netmask: '255.255.252.0',
                gateway: '10.1.0.254' 
            });
        }
        else if(this.state.user == "Lohit"){
            this.setState({auto : true})
        }
        else if(this.state.user == "Subansiri"){
            var temp = "10.16." +  (Number(this.state.block_no)%5).toString() + this.state.floor_no + "." + this.state.room_no;
            this.setState({ 
                IP : temp,
                netmask: '255.255.192.0',
                gateway: '10.16.0.254' 
            })             
        }
        else if(this.state.user == "Dhansiri"){
            this.setState({auto : true})            
        }
        else if(this.state.user == "Dibang"){
            var temp1 = this.state.block_no;
            var temp="";
            if(Number(temp1)%3==0 ){
                temp = "10.8." + (Number(this.state.block_no)/3).toString() + this.state.floor_no + "." + this.state.room_no;
            }
            else if(Number(temp1)%3==1){
                temp = "10.8." + (Math.trunc(Number(this.state.block_no)/3)).toString() + this.state.floor_no + "." + (Number(this.state.room_no)+12).toString();
            }
            else if(Number(temp1)%3==2){
                temp = "10.8." + (Math.trunc(Number(this.state.block_no)/3)).toString() + this.state.floor_no + "." + (Number(this.state.room_no)+18).toString();
            }
            this.setState({ 
                IP : temp,
                netmask: '255.255.192.0',
                gateway: '10.8.0.254'
            })  
        }
        else if(this.state.user == "Manas"){
            var temp = "10.4." +  (Number(this.state.block_no)%5).toString() + this.state.floor_no + "." + this.state.room_no;            
            this.setState({ 
                IP : temp,
                netmask: '255.255.192.0',
                gateway: '10.4.0.254' 
            }) 
        }
        else if(this.state.user == "Brahmaputra"){
            var temp1 = this.state.block_no;
            var temp2 = "";
            if(temp1 == "5" || temp1 =="6"){
                temp2 = this.state.room_no;
            }
            else {
                if(this.state.floor_no=="0"){
                    temp2 = (Number(this.state.room_no)-134).toString();
                }
                else if(this.state.floor_no=="1"){
                    temp2 = (Number(this.state.room_no)-119).toString();
                }
                else if(this.state.floor_no=="2"){
                    temp2 = (Number(this.state.room_no)-133).toString();                    
                }
                else if(this.state.floor_no=="3"){
                    temp2 = (Number(this.state.room_no)-131).toString();                    
                }
            }
            var temp = "10.12." +  (Number(this.state.block_no)%5).toString() + this.state.floor_no + "." + temp2;                        
            this.setState({ 
                IP : temp,
                netmask: '255.255.192.0',
                gateway: '10.12.0.254' 
            })                 
        }
        else if(this.state.user == "Umiam"){
            var temp = "10.11." +  (Number(this.state.block_no)%5).toString() + this.state.floor_no + "." + this.state.room_no;                        
            this.setState({ 
                IP : temp,
                netmask: '255.255.192.0',
                gateway: '10.11.0.254' 
            })             
        }
        else if(this.state.user == "Barak"){
            var temp = "10.10." +  (Number(this.state.block_no)%5).toString() + this.state.floor_no + "." + this.state.room_no;                                    
            this.setState({ 
                IP : temp,
                netmask: '255.255.192.0',
                gateway: '10.10.0.254' 
            })            
        }
        else if(this.state.user == "Kameng"){
            var temp = "10.9." +  (Number(this.state.block_no)%5).toString() + this.state.floor_no + "." + this.state.room_no;                                    
            this.setState({ 
                IP : temp,
                netmask: '255.255.192.0',
                gateway: '10.9.0.254' 
            })            
        }
        else if(this.state.user == "Dihing"){
            var temp = "10.0." + this.state.floor_no + "." + this.state.room_no;
            this.setState({ 
                IP : temp,
                netmask: '255.255.252.0',
                gateway: '10.0.0.254' 
            });
        }
        else if(this.state.user == "Married"){
            this.setState({auto : true})            
        }
    }
   render() {
      return (
          <Container>
            <CustomHeader
              title="IP Calculator"
              drawerOpen={() => this.props.navigation.openDrawer()}
            />
         <View>
            <View style={{marginTop:40}}></View>
            <Picker selectedValue = {this.state.user} onValueChange = {this.updateUser}>
               <Picker.Item label = "Choose Hostel" value = "" />
               <Picker.Item label = "Siang" value = "Siang" />
               <Picker.Item label = "Kapili" value = "Kapili" />
               <Picker.Item label = "Lohit" value = "Lohit" />
               <Picker.Item label = "Subansiri" value = "Subansiri" />
               <Picker.Item label = "Dhansiri" value = "Dhansiri" />
               <Picker.Item label = "Dibang" value = "Dibang" />
               <Picker.Item label = "Brahmaputra" value = "Brahmaputra" />
               <Picker.Item label = "Umiam" value = "Umiam" />
               <Picker.Item label = "Barak" value = "Barak" />
               <Picker.Item label = "Kameng" value = "Kameng" />
               <Picker.Item label = "Dihing" value = "Dihing" />
               <Picker.Item label = "Manas" value = "Manas" />
               <Picker.Item label = "Married Scholars" value = "Married" />
            </Picker>
            <View style={{marginTop:10}}></View>
            { this.state.user == "Dibang" ? 

                <Picker selectedValue = {this.state.block_no} onValueChange = {this.updateBlockNo}>
                <Picker.Item label = "Choose Block" value = "" />
                <Picker.Item label = "A" value = "0" />
                <Picker.Item label = "B" value = "1" />
                <Picker.Item label = "C" value = "2" />
                <Picker.Item label = "D" value = "3" />
                <Picker.Item label = "E" value = "4" />
                <Picker.Item label = "F" value = "5" />
                <Picker.Item label = "G" value = "6" />
                <Picker.Item label = "H" value = "7" />
                <Picker.Item label = "I" value = "8" />
                <Picker.Item label = "J" value = "9" />
                <Picker.Item label = "K" value = "10" />
                <Picker.Item label = "L" value = "11" />
                </Picker>
            
            :
            <Picker selectedValue = {this.state.block_no} onValueChange = {this.updateBlockNo}>
                <Picker.Item label = "Choose Block" value = "" />
               <Picker.Item label = "B1" value = "0" />
               <Picker.Item label = "B2" value = "1" />
               <Picker.Item label = "B3" value = "2" />
               <Picker.Item label = "B4" value = "3" />
               <Picker.Item label = "C1" value = "4" />
               <Picker.Item label = "A" value = "5" />
               <Picker.Item label = "B" value = "6" />
               <Picker.Item label = "C" value = "7" />
               <Picker.Item label = "D" value = "8" />
            </Picker>
            }    
            <View style={{marginTop:10}}></View>
             <TextInput
                style={{height: 40,borderBottomWidth:2}}
                placeholder="Enter Floor/1st digit of room no."
                onChangeText={this.updateFloorNo}
            />
            <View style={{marginTop:20}}></View>
             { this.state.user == "Brahmaputra" ? 
                <TextInput
                    style={{height: 40,borderBottomWidth:2}}
                    placeholder="Enter Room No."
                    onChangeText={this.updateRoomNo}
                />
                :
                <TextInput
                    style={{height: 40,borderBottomWidth:2}}
                    placeholder="Enter last two digits of room no."
                    onChangeText={this.updateRoomNo}
                />
            }
            
            <View style  = {{alignItems: 'center', marginTop:40}}>
                <Button
                    onPress = {this._onPress}
                    title = "My Hostel IP"
                    color = "grey"
                />
            </View>

            <View style  = {{marginTop:20 , marginLeft:4}}>
            {   this.state.bool == true ?
                    this.state.auto == true ? 
                        <Text style = {styles.text}>No need to set IP in your hostel.</Text>
                        : 
                        // <Text>Your IP</Text>
                        <View>
                            <Text style = {styles.text}>IP - {this.state.IP}</Text>
                            <Text style = {styles.text}>Netmask - {this.state.netmask}</Text>
                            <Text style = {styles.text}>Gateway - {this.state.gateway}</Text>
                        </View>
                :
                null    
            }
            </View>
         </View>
          </Container>
      )
   }
}


const styles = StyleSheet.create({
   text: {
      fontSize: 18,
      color: 'black',
      padding : 2
   }
});