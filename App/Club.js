import React, { Component } from 'react';
import {
    StyleSheet,
    ScrollView,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

import { Divider, List, ListItem, FlatList } from 'react-native-elements';

export default class Profile extends Component {
    render() {
    return (
            <ScrollView style={styles.container}>
                <Image style={styles.coverImage} source={require('./images/cover.png')}></Image>
                <View style={styles.body}>
                    <View style={styles.bodyContent}>
                        <Text style={styles.name}>Coding Club</Text>
                        <Text style={styles.info}>UX Designer / Mobile developer</Text>
                        <Text style={styles.description}>Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendis, omittam deseruisse consequuntur ius an,</Text>
                    </View>
                </View>
                <Divider style={{ backgroundColor: 'blue' }} />
                <Text style={styles.post}> Recent Posts</Text>
                <TouchableOpacity style={styles.card}>
                    {/* <View style={styles.cardHeading}><Text style={styles.heading}>Coding Club</Text></View> */}
                    {/* <View style={{ borderBottomColor: 'black', borderBottomWidth: 4 }}></View> */}
                    <Image style={styles.cardImage} source={require('./../images/iitg.png')}></Image>
                    <View style={{ borderBottomColor: 'black', borderBottomWidth: 4 }}></View>
                    <View ><Text style={styles.content}>Post content goes here</Text></View>

                </TouchableOpacity>

                <TouchableOpacity style={styles.card}>
                    {/* <View style={styles.cardHeading}><Text style={styles.heading}>Coding Club</Text></View> */}
                    {/* <View style={{ borderBottomColor: 'black', borderBottomWidth: 4 }}></View> */}
                    <Image style={styles.cardImage} source={require('./../images/campus_map.png')}></Image>
                    <View style={{ borderBottomColor: 'black', borderBottomWidth: 4 }}></View>
                    <View ><Text style={styles.content}>Post content goes here</Text></View>

                </TouchableOpacity>

                <TouchableOpacity style={styles.card}>
                    {/* <View style={styles.cardHeading}><Text style={styles.heading}>Coding Club</Text></View> */}
                    {/* <View style={{ borderBottomColor: 'black', borderBottomWidth: 4 }}></View> */}
                    <Image style={styles.cardImage} source={require('./../images/launch_screen.png')}></Image>
                    <View style={{ borderBottomColor: 'black', borderBottomWidth: 4 }}></View>
                    <View ><Text style={styles.content}>Post content goes here</Text></View>

                </TouchableOpacity>

                <TouchableOpacity style={styles.card}>
                    {/* <View style={styles.cardHeading}><Text style={styles.heading}>Coding Club</Text></View> */}
                    {/* <View style={{ borderBottomColor: 'black', borderBottomWidth: 4 }}></View> */}
                    <Image style={styles.cardImage} source={require('./../images/splash.jpg')}></Image>
                    <View style={{ borderBottomColor: 'black', borderBottomWidth: 4 }}></View>
                    <View ><Text style={styles.content}>Post content goes here</Text></View>

                </TouchableOpacity>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // marginTop:20,
        backgroundColor: '#D3D3D3',
    },
    // header: {
    //     backgroundColor: "#00BFFF",
    //     height: 200,
    // },
    //   avatar: {
    //     width: 130,
    //     height: 130,
    //     borderRadius: 63,
    //     borderWidth: 4,
    //     borderColor: "white",
    //     marginBottom:10,
    //     alignSelf:'center',
    //     position: 'absolute',
    //     marginTop:130
    //   },
    // name: {
    //     fontSize: 22,
    //     color: "#000000",
    //     fontWeight: '600',
    // },
    post: {
        padding: 10,
        fontSize: 20,
        color: "#000000",
        fontWeight: '600',
    },
    body: {
        // marginTop: 5,
    },
    bodyContent: {
        flex: 1,
        // alignItems: 'center',
        padding: 10,
    },
    name: {
        fontSize: 28,
        color: "#000000",
        fontWeight: "600"
    },
    info: {
        fontSize: 16,
        color: "#000000",
        marginTop: 10
    },
    description: {
        fontSize: 16,
        color: "#000000",
        marginTop: 10,
        // textAlign: 'left'
    },
    //   buttonContainer: {
    //     marginTop:10,
    //     height:45,
    //     flexDirection: 'row',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     marginBottom:20,
    //     width:250,
    //     borderRadius:30,
    //     backgroundColor: "#00BFFF",
    //   },
    card: {
        backgroundColor: '#FFFFFF',
        marginBottom: 10,
        marginLeft: '2%',
        width: '96%',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#fff',
    },
    coverImage: {
        // marginTop: 10,
        width: '100%',
        height: 200,
        resizeMode: 'cover'
    },
    cardImage: {
        marginTop: 10,
        width: '100%',
        height: 200,
        resizeMode: 'contain'
    },
    cardHeading: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        padding: 5,
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold'
    },
    content: {
        fontSize: 14,
        marginTop: 2,
        marginLeft: 10,
        padding: 5
    }
});