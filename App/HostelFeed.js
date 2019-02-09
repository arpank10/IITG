import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

import { Container, Content, Button } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import FIcons from 'react-native-vector-icons/FontAwesome';
import CustomHeader from "./CustomHeader";

export default class HostelFeed extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: "Hostel ",
        headerLeft: <Icon name="ios-menu" style={{ paddingLeft: 10 }} onPress={() => navigation.navigate('DrawerOpen')} />,
        drawerLabel: 'Hostel ',
        drawerIcon:
            <FIcons
                size={26}
                name={"building-o"}
                style={[styles.icon]}
            />

    });

    print = () =>{
        console.log(this.props.navigation)
    };


    render() {
        return (

            <Container>

                <CustomHeader
                    title="Hostel Feed"
                    drawerOpen={() => this.props.navigation.openDrawer()}

                />
                <Content contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10 }}>
                    <Text>
                        This will contain the hostel feed!
                    </Text>
                </Content>
            </Container>
        )
    }

}


const styles = StyleSheet.create({
    icon: {
        height: 26,
        width: 26
    }
});