import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
import SplashScreen from 'react-native-splash-screen';

import Feed from './feed';

import AzureAuth from './login';

export default class App extends React.Component {
  render() {
    return <MyNavigator />;
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    justifyContent: 'center',
  },
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

