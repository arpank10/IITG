import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

import { Container, Content, Icon, Button } from 'native-base'
import CustomHeader from "./CustomHeader";
import MIcons from "react-native-vector-icons/MaterialIcons";


export default class DepartmentFeed extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: "Department ",
        headerLeft: <Icon name="ios-menu" style={{ paddingLeft: 10 }} onPress={() => navigation.navigate('DrawerOpen')} />,
        drawerLabel: 'Department  ',
        drawerIcon:
            <MIcons
                size={26}
                name={"personal-video"}
                style={[styles.icon]}
            />

    });

    render() {
        return (

            <Container>
                <CustomHeader
                    title="Department Feed"
                    drawerOpen={() => this.props.navigation.openDrawer()}
                />
                <Content contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10 }}>
                    <Text>
                        This will contain the departmental feed!
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