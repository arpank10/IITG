import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native';
import HostelFeed from "./HostelFeed";
import NewsFeed from "./NewsFeed";
import DepartmentFeed from "./DepartmentFeed";

//library imports
import { Container, Content, Icon, Header, Body } from 'native-base';
import { DrawerNavigator, StackNavigator, DrawerItems, SafeAreaView } from 'react-navigation';
import CampusMap from "./CampusMap";
import Profile from "./Profile";
import MessMenu from './MessMenu';
import BusTiming from './BusTiming';


const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

export default class Home extends Component<Props> {

    render() {
        return (
            <MyHome/>
        )
    }
}

const CustomDrawerContentComponent = (props) => (

    <Container>
        <Header style={styles.drawerHeader}>
            <Body>
            <Image
                style={styles.drawerImage}
                source={require('./../images/iitg.png')} />
            </Body>
        </Header>
        <Content>
            <DrawerItems {...props} />
        </Content>

    </Container>

);

const MyHome = DrawerNavigator({

        // For each screen that you can navigate to, create a new entry like this:
        NewsFeed: {
            screen: NewsFeed,
        },
        HostelFeed: {
            screen: HostelFeed
        },
        DepartmentFeed: {
            screen: DepartmentFeed
        },
        CampusMap: {
            screen: CampusMap
        },
        BusTimings:{
            screen: BusTiming
        },
        MessMenu: {
            screen: MessMenu
        },
        Profile: {
            screen : Profile
        },
    },
    {
        initialRouteName: 'NewsFeed',
        drawerPosition: 'left',
        contentComponent: CustomDrawerContentComponent,
        drawerOpenRoute: 'DrawerOpen',
        drawerCloseRoute: 'DrawerClose',
        drawerToggleRoute: 'DrawerToggle'
    });

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
    drawerHeader: {
        height: 200,
        backgroundColor: 'white'
    },
    drawerImage: {
        height: 150,
        width: 150,
        borderRadius: 75
    }
});
