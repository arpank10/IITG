import React from 'react';
import {
    ActivityIndicator,
    AsyncStorage,
    StatusBar,
    StyleSheet,
    View,
    Image,
    Dimensions,
} from 'react-native';

import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
import Home from './Home';
import AzureAuth from './login';

// Get screen dimensions
const { width, height } = Dimensions.get('window');

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
            <View style={{flex: 1, justifyContent: 'center'}}>
                <Image style={styles.backgroundImage} source={require('../images/splash.jpg')}></Image>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        justifyContent: 'center',
    },
    backgroundImage: {
        width: width,
        height: width*9/16,
        resizeMode: 'cover'
    }
});




// Implementation of HomeScreen, OtherScreen, SignInScreen, AuthLoadingScreen
// goes here.

const AppStack = createStackNavigator(
    { Home : Home },
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
