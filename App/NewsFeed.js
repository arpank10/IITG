import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

import { Icon, Button, Container, Header, Content, Left } from 'native-base';

//custom components imports
import CustomHeader from "./CustomHeader";
import FIcons from "react-native-vector-icons/FontAwesome";


export default class NewsFeed extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: "Home ",
        headerLeft: <Icon name="ios-menu" style={{ paddingLeft: 10 }} onPress={() => navigation.navigate('DrawerOpen')} />,
        drawerLabel: 'News ',
        drawerIcon: ({ tintColor }) => (
            <FIcons
                size={26}
                name={"newspaper-o"}
                style={[styles.icon]}
            />
        ),
    });


    render() {
        return (

            <Container>

                <CustomHeader title="All news" drawerOpen={() => this.props.navigation.navigate('DrawerOpen')} />

                <Content
                    contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10 }}>
                    <Text>
                        This will contain the campus feed!
                    </Text>
                </Content>

            </Container>

        )
    }

}



const styles = StyleSheet.create({
    icon: {
        width: 30,
        height: 26,
    },
});