
//import the component into your project
import React from 'react';
import { AsyncStorage } from 'react-native'
import {AzureInstance, AzureLoginView} from 'react-native-azure-ad-2'
import {urls} from "./Constants";

//create an AzureInstance object with your Microsoft Azure credentials
var credentials = {
    client_id: '3c2cd304-b203-4622-ae54-9328d3c6a5ad',
    client_secret: 'qvewXI500+]:dwcLWPEA06(',
    scope: 'User.Read offline_access' //access scope for login - see http://bit.ly/2gtQe9W for more info
};

//create a component for Azure Authentication
export default class AzureAuth extends React.Component {
    constructor(props){
        super(props);

        //instantiate azure objects with your azure credentials
        this.azureInstance = new AzureInstance(credentials);

        //bind the login success function
        this._onLoginSuccess = this._onLoginSuccess.bind(this);
    }
    _signInAsync = async () => {
        console.log("Hello");
        await AsyncStorage.setItem('userToken', 'abc');
        AsyncStorage.setItem('name',result.displayName);
        AsyncStorage.setItem('rollno',result.surname);
        AsyncStorage.setItem('stream',result.jobTitle);
        AsyncStorage.setItem('mail',result.mail);
        //     fetch('http://5e2908c3.ngrok.io/api/profile/RollNumber', {
        //     method: 'GET',
        //     headers: {
        //         'Accept' : 'application/json',
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         "RollNumber" : result.surname
        //     })
        // })
        //     .then((response) => response.json())
        //     .then(data => {
        //         if(data){
        //             this.props.navigation.navigate('Form');
        //         }
        //         else
        //         {
        //             this.props.navigation.navigate('App');
        //         }

        //     })
        //     .catch((error) => {
        //     console.error(error);
        //     });



        this.props.navigation.navigate('App');
    };
    // function to be called after login is successful
    _onLoginSuccess = async () => {
        var userEmail = "";
        this.azureInstance.getUserInfo().then(result => {
            console.log(result.mail);
            userEmail = result.mail;
            if (String(userEmail).endsWith('@iitg.ac.in')) {
                console.log("iitg vaala");
                AsyncStorage.setItem('userToken', 'abc');
                AsyncStorage.setItem('name',result.displayName);
                AsyncStorage.setItem('rollno',result.surname);
                AsyncStorage.setItem('stream',result.jobTitle);
                AsyncStorage.setItem('mail',result.mail);
                console.log(result.surname);
                fetch(urls.baseUrl + 'profile/rollno/' + result.surname, {
                    method: 'GET',
                    headers: {
                        'Accept' : 'application/json',
                        'Content-Type': 'application/json',
                    },
                    // params: {
                    //     'RollNumber' : '160101005'
                    // }

                })
                    .then((response) => response.json())
                    .then(value => {
                        console.log(value);
                        if(value.data){
                            this.props.navigation.navigate('App');
                        }
                        else
                        {
                            this.props.navigation.navigate('Form');
                        }

                    })
                    .catch((error) => {
                        console.error(error);
                    });
                // this.props.navigation.navigate('Form');

                //   this.props.navigation.navigate('App');
            }
            else{
                console.log("bahar vaala");
            }
        }).catch(err => {
            console.log(err);
        })


    };

    // pass the azureInstance and Login Success function to the AzureLoginView that will display
    // the authentication screen
    render() {
        return (
            <AzureLoginView
                azureInstance={this.azureInstance}
                loadingMessage="Requesting access token"
                onSuccess={this._onLoginSuccess}
            />
        );
    }
}
