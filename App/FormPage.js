import React, { Component } from 'react';
import { View, StyleSheet, Button } from 'react-native';

import { AsyncStorage } from 'react-native';

import t from 'tcomb-form-native';
import {urls} from "./Constants";

const Form = t.form.Form;

var Department = t.enums({
  CSE: 'Computer Science and Engineering',
  ME : 'Mechanical Engineering',
  BT : 'Biotechnology',
  ChE :'Chemical Engineering',
  CST : 'Chemical Science and Technology',
  CE : 'Civil Engineering',
  ECE: 'Electronics and Communication Engineering',
  EE : 'Electronics and Electrical Engineering',
  EP : 'Engineering Physics',
  MnC:'Mathematics and Computing',
  DE : 'Design'
});

var Hostel = t.enums({
    Barak: 'Barak',
    Brahmaputra: 'Brahmaputra',
    Dibang: 'Dibang',
    Dihing: 'Dihing',
    Dhansiri: 'Dhansiri',
    Kameng: 'Kameng',
    Kapili: 'Kapili',
    Lohit: 'Lohit',
    Manas:'Manas',
    Married_Scholars: 'Married Scholars',
    Siang: 'Siang',
    Umiam:'Umiam'
});

var Stream = t.enums({
    Btech : 'BTech',
    BDes : 'BDes',
    MTech : 'Mtech',
    PhD : 'PhD'
  });

const User = t.struct({
//   name: t.String,
//   rollNo: t.String,
//   year: t.String,
  hostel: Hostel ,
  department : Department
//   stream : Stream,
//   terms: t.Boolean
});

const formStyles = {
  ...Form.stylesheet,
  formGroup: {
    normal: {
      marginBottom: 10
    },
  },
  controlLabel: {
    normal: {
      color: 'blue',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600'
    },
    // the style applied when a validation error occours
    error: {
      color: 'red',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600'
    }
  }
}

const options = {
  fields: {
    email: {
      error: 'Without an email address how are you going to reset your password when you forget it?'
    },
    password: {
      error: 'Choose something you use on a dozen other sites or something you won\'t remember'
    },
    terms: {
      label: 'Agree to Terms',
    },
  },
  stylesheet: formStyles,
};


export default class FormPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName : "",
            userRollno : "",
            userMail : "",
            userStream : "",
            userDepartment : "",
            userHostel : "",
            userYear: ""
        };
        this._userInfoAsync();
    }
   
    // Fetch the token from storage then navigate to our appropriate place
    _userInfoAsync = async () => {
        const userNameval = await AsyncStorage.getItem('name');
        // console.log(userName)
        this.setState({userName: userNameval});
        // console.log(this.state.userName)
        const userRollnoval = await AsyncStorage.getItem('rollno');
        this.setState({userRollno: userRollnoval});
        // console.log(userRollno)
        const userMailval = await AsyncStorage.getItem('mail');
        this.setState({userMail: userMailval});
        // console.log(userMail)
        const userStreamval = await AsyncStorage.getItem('stream');
        this.setState({userStream: userStreamval});
        // console.log(userStream)
        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
    };

  handleSubmit = async () => {
    const value = this._form.getValue();
    console.log('value: ', value);
    const departmentval = value.department;
    console.log(departmentval);
    this.setState({userDepartment : departmentval});
    const hostelval = value.hostel;
    console.log(hostelval);
    this.setState({userHostel : hostelval});
    console.log('hostel', value.hostel);
    console.log('name',this.state.userName);
    console.log('roll',this.state.userRollno);
    const yearval = "20"+this.state.userRollno[0]+this.state.userRollno[1];
    console.log('year',yearval);
    // console.log('department', userDepartment);
    // console.log(userHostel);
    fetch(urls.profileUrl, {
      method: 'POST',
      headers: {
        'Accept' : 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "Name" : this.state.userName,
        "HostelName" : hostelval,
        "DepartmentName" : departmentval,
        "RollNumber" : this.state.userRollno,
        "Stream": this.state.userStream,
        "Year": yearval
      })
})
    .then((response) => response.json())
    .then((responseJson) => {
      this.props.navigation.navigate('App');
    })
    .catch((error) => {
      console.error(error);
    });
  };
  
  render() {
    return (
      <View style={styles.container}>
        <Form 
          ref={c => this._form = c}
          type={User} 
          options={options}
        />
        <Button
          title="Enter Details"
          onPress={this.handleSubmit}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
});
