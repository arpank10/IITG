import React from 'react';
import {
    ActivityIndicator,
    AsyncStorage,
    StatusBar,
    StyleSheet,
    View,
    Image
} from 'react-native';

import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
import Feed from './feed';
import AzureAuth from './login';

export default class App extends React.Component {
    render() {
        return <SplashNavigator />;
    }
}

class AuthLoadingScreen extends React.Component {
    constructor(props) {
        super(props);
        this._bootstrapAsync();
    }

    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem('userToken');
        console.log(userToken)
        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        this.props.navigation.navigate(userToken ? 'App' : 'Auth');
    };

    // Render any loading content that you like here
    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        );
    }
}

class SplashPage extends React.Component {
    constructor(props){
        super(props);
    }

    componentWillMount () {
        var navigator = this.props.navigation;
        setTimeout (() => {
            navigator.navigate('MainScreenNavigator');
            // navigator.replace({
            //   id: 'MainView',
            // });
        }, 2000);
    }
    render () {
        return (
            // <View style={{flex: 1, backgroundColor: 'red', alignItems: 'center', justifyContent: 'center'}}>
            <Image style={styles.backgroundImage} source={require('./images/launch_screen.png')}></Image>
            // </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        justifyContent: 'center',
    },
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    }
});




// Implementation of HomeScreen, OtherScreen, SignInScreen, AuthLoadingScreen
// goes here.

const AppStack = createStackNavigator(
    { Feed : Feed },
    {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
    });
const AuthStack = createStackNavigator(
    { AzureAuth : AzureAuth},
    {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
    });

const MyNavigator =  createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        App: AppStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'AuthLoading',
    }
);

const SplashNavigator = createSwitchNavigator(
    {
        SplashScreen: SplashPage,
        App: AppStack,
        Auth: AuthStack,
        MainScreenNavigator: MyNavigator,
    },
    {
        initialRouteName: 'SplashScreen',
    }
);
