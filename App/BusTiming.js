import * as React from 'react';
import { Text, View, StyleSheet, Picker } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import FIcons from "react-native-vector-icons/FontAwesome";
import {Container} from "native-base";
import CustomHeader from "./CustomHeader";

export default class BusTiming extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: "Bus Timings ",
        headerLeft: <Icon name="ios-menu" style={{ paddingLeft: 10 }} onPress={() => navigation.navigate('DrawerOpen')} />,
        drawerLabel: 'Bus Timings ',
        drawerIcon:
            <FIcons
                size={26}
                name={"bus"}
                style={[styles.icon]}
            />

    });
  constructor(props){
        super(props);
        this.state = {
            day : "holiday",
            curHour: 0,
            curMinute: 0,
            timeNow: 0,
        };

    }

  componentDidMount() {
    setInterval( () => {
      var d = new Date();
      this.setState({
        curHour:  d.getHours(),
        curMinute: d.getMinutes(),
        timeNow: d.getMinutes() + d.getHours()*100,
      })

    },1000)
  }
  
  render() {
    return (
        <Container>
            <CustomHeader
                title="Bus Timings"
                drawerOpen={() => this.props.navigation.openDrawer()}
            />
          <View style={styles.container}>
            <Text style={styles.heading}>
              IITG Bus Schedule
            </Text>
            <View style={styles.card}>
              <Picker
                selectedValue={this.state.day}
                onValueChange={(value) => {
                  this.setState({day : value})
                }}
                itemStyle={styles.dropdownStyle}
                mode={'dropdown'}
              >
                <Picker.Item label="Working Day" value="weekday" />
                <Picker.Item label="Weekend or Institute Holiday" value="holiday" />
              </Picker>
            </View>

            <View style={styles.card}>
              <Text style={styles.cardHeading}>Buses from IITG</Text>
              {this.state.day == 'weekday' ?
              <View style={styles.schedule}>
                <Text style={[ this.state.timeNow <= 800 || this.state.timeNow > 2135 ? styles.bold : styles.text]}> 08:00 </Text>
                <Text style={[ this.state.timeNow > 800 &&  this.state.timeNow <= 900 ? styles.bold : styles.text]}> 09:00 </Text>
                <Text style={[ this.state.timeNow > 900 &&  this.state.timeNow <= 1000 ? styles.bold : styles.text]}> 10:00 </Text>
                <Text style={[ this.state.timeNow > 1000 &&  this.state.timeNow <= 1200 ? styles.bold : styles.text]}> 12:00 </Text>
                <Text style={[ this.state.timeNow > 1200 &&  this.state.timeNow <= 1300 ? styles.bold : styles.text]}> 13:00 </Text>
                <Text style={[ this.state.timeNow > 1300 &&  this.state.timeNow <= 1400 ? styles.bold : styles.text]}> 14:00 </Text>
                <Text style={[ this.state.timeNow > 1400 &&  this.state.timeNow <= 1500 ? styles.bold : styles.text]}> 15:00 </Text>
                <Text style={[ this.state.timeNow > 1500 &&  this.state.timeNow <= 1700 ? styles.bold : styles.text]}> 17:00 </Text>
                <Text style={[ this.state.timeNow > 1700 &&  this.state.timeNow <= 1715 ? styles.bold : styles.text]}> 17:15 </Text>
                <Text style={[ this.state.timeNow > 1715 &&  this.state.timeNow <= 1740 ? styles.bold : styles.text]}> 17:40 </Text>
                <Text style={[ this.state.timeNow > 1740 &&  this.state.timeNow <= 1845 ? styles.bold : styles.text]}> 18:45 </Text>
                <Text style={[ this.state.timeNow > 1845 &&  this.state.timeNow <= 2000 ? styles.bold : styles.text]}> 20:00 </Text>
                <Text style={[ this.state.timeNow > 2000 &&  this.state.timeNow <= 2040 ? styles.bold : styles.text]}> 20:40 </Text>
                <Text style={[ this.state.timeNow > 2040 &&  this.state.timeNow <= 2100 ? styles.bold : styles.text]}> 21:00 </Text>
                <Text style={[ this.state.timeNow > 2100 &&  this.state.timeNow <= 2115 ? styles.bold : styles.text]}> 21:15 </Text>
                <Text style={[ this.state.timeNow > 2115 &&  this.state.timeNow <= 2130 ? styles.bold : styles.text]}> 21:30 </Text>
                <Text style={[ this.state.timeNow > 2130 &&  this.state.timeNow <= 2135 ? styles.bold : styles.text]}> 21:35 </Text>
              </View>
              :
              <View style={styles.schedule}>
                <Text style={[ this.state.timeNow <= 800 || this.state.timeNow > 2130 ? styles.bold : styles.text]}> 08:00 </Text>
                <Text style={[ this.state.timeNow > 800 &&  this.state.timeNow <= 900 ? styles.bold : styles.text]}> 09:00 </Text>
                <Text style={[ this.state.timeNow > 900 &&  this.state.timeNow <= 1000 ? styles.bold : styles.text]}> 10:00 </Text>
                <Text style={[ this.state.timeNow > 1000 &&  this.state.timeNow <= 1030 ? styles.bold : styles.text]}> 10:30 </Text>
                <Text style={[ this.state.timeNow > 1030 &&  this.state.timeNow <= 1200 ? styles.bold : styles.text]}> 12:00 </Text>
                <Text style={[ this.state.timeNow > 1200 &&  this.state.timeNow <= 1300 ? styles.bold : styles.text]}> 13:00 </Text>
                <Text style={[ this.state.timeNow > 1300 &&  this.state.timeNow <= 1400 ? styles.bold : styles.text]}> 14:00 </Text>
                <Text style={[ this.state.timeNow > 1400 &&  this.state.timeNow <= 1500 ? styles.bold : styles.text]}> 15:00 </Text>
                <Text style={[ this.state.timeNow > 1500 &&  this.state.timeNow <= 1530 ? styles.bold : styles.text]}> 15:30 </Text>
                <Text style={[ this.state.timeNow > 1530 &&  this.state.timeNow <= 1600 ? styles.bold : styles.text]}> 16:00 </Text>
                <Text style={[ this.state.timeNow > 1600 &&  this.state.timeNow <= 1700 ? styles.bold : styles.text]}> 17:00 </Text>
                <Text style={[ this.state.timeNow > 1700 &&  this.state.timeNow <= 1740 ? styles.bold : styles.text]}> 17:40 </Text>
                <Text style={[ this.state.timeNow > 1740 &&  this.state.timeNow <= 1845 ? styles.bold : styles.text]}> 18:45 </Text>
                <Text style={[ this.state.timeNow > 1845 &&  this.state.timeNow <= 2000 ? styles.bold : styles.text]}> 20:00 </Text>
                <Text style={[ this.state.timeNow > 2000 &&  this.state.timeNow <= 2040 ? styles.bold : styles.text]}> 20:40 </Text>
                <Text style={[ this.state.timeNow > 2040 &&  this.state.timeNow <= 2100 ? styles.bold : styles.text]}> 21:00 </Text>
                <Text style={[ this.state.timeNow > 2100 &&  this.state.timeNow <= 2115 ? styles.bold : styles.text]}> 21:15 </Text>
                <Text style={[ this.state.timeNow > 2115 &&  this.state.timeNow <= 2130 ? styles.bold : styles.text]}> 21:30 </Text>

              </View>
              }
            </View>
            <View style={styles.card}>
              <Text style={styles.cardHeading}>Buses from City</Text>
              {this.state.day == 'weekday' ?
              <View style={styles.schedule}>
                <Text style={[ this.state.timeNow <= 645 || this.state.timeNow > 2055 ? styles.bold : styles.text]}> 06:45 </Text>
                <Text style={[ this.state.timeNow > 645 &&  this.state.timeNow <= 815 ? styles.bold : styles.text]}> 08:15 </Text>
                <Text style={[ this.state.timeNow > 815 &&  this.state.timeNow <= 1000 ? styles.bold : styles.text]}> 10:00 </Text>
                <Text style={[ this.state.timeNow > 1000 &&  this.state.timeNow <= 1200 ? styles.bold : styles.text]}> 12:00 </Text>
                <Text style={[ this.state.timeNow > 1200 &&  this.state.timeNow <= 1300 ? styles.bold : styles.text]}> 13:00 </Text>
                <Text style={[ this.state.timeNow > 1300 &&  this.state.timeNow <= 1400 ? styles.bold : styles.text]}> 14:00 </Text>
                <Text style={[ this.state.timeNow > 1400 &&  this.state.timeNow <= 1500 ? styles.bold : styles.text]}> 15:00 </Text>
                <Text style={[ this.state.timeNow > 1500 &&  this.state.timeNow <= 1600 ? styles.bold : styles.text]}> 16:00 </Text>
                <Text style={[ this.state.timeNow > 1600 &&  this.state.timeNow <= 1715 ? styles.bold : styles.text]}> 17:15 </Text>
                <Text style={[ this.state.timeNow > 1715 &&  this.state.timeNow <= 1845 ? styles.bold : styles.text]}> 18:45 </Text>
                <Text style={[ this.state.timeNow > 1845 &&  this.state.timeNow <= 1930 ? styles.bold : styles.text]}> 19:30 </Text>
                <Text style={[ this.state.timeNow > 1930 &&  this.state.timeNow <= 2000 ? styles.bold : styles.text]}> 20:00 </Text>
                <Text style={[ this.state.timeNow > 2000 &&  this.state.timeNow <= 2030 ? styles.bold : styles.text]}> 20:30 </Text>
                <Text style={[ this.state.timeNow > 2030 &&  this.state.timeNow <= 2055 ? styles.bold : styles.text]}> 20:55 </Text>
              </View>
              :
              <View style={styles.schedule}>
                <Text style={[ this.state.timeNow <= 645 || this.state.timeNow > 2055 ? styles.bold : styles.text]}> 06:45 </Text>
                <Text style={[ this.state.timeNow > 645 &&  this.state.timeNow <= 745 ? styles.bold : styles.text]}> 07:45 </Text>
                <Text style={[ this.state.timeNow > 745 &&  this.state.timeNow <= 815 ? styles.bold : styles.text]}> 08:15 </Text>
                <Text style={[ this.state.timeNow > 815 &&  this.state.timeNow <= 1000 ? styles.bold : styles.text]}> 10:00 </Text>
                <Text style={[ this.state.timeNow > 1000 &&  this.state.timeNow <= 1100 ? styles.bold : styles.text]}> 11:00 </Text>
                <Text style={[ this.state.timeNow > 1100 &&  this.state.timeNow <= 1300 ? styles.bold : styles.text]}> 13:00 </Text>
                <Text style={[ this.state.timeNow > 1300 &&  this.state.timeNow <= 1400 ? styles.bold : styles.text]}> 14:00 </Text>
                <Text style={[ this.state.timeNow > 1400 &&  this.state.timeNow <= 1500 ? styles.bold : styles.text]}> 15:00 </Text>
                <Text style={[ this.state.timeNow > 1500 &&  this.state.timeNow <= 1600 ? styles.bold : styles.text]}> 16:00 </Text>
                <Text style={[ this.state.timeNow > 1600 &&  this.state.timeNow <= 1700 ? styles.bold : styles.text]}> 17:00 </Text>
                <Text style={[ this.state.timeNow > 1700 &&  this.state.timeNow <= 1800 ? styles.bold : styles.text]}> 18:00 </Text>
                <Text style={[ this.state.timeNow > 1800 &&  this.state.timeNow <= 1830 ? styles.bold : styles.text]}> 18:30 </Text>
                <Text style={[ this.state.timeNow > 1830 &&  this.state.timeNow <= 1915 ? styles.bold : styles.text]}> 19:15 </Text>
                <Text style={[ this.state.timeNow > 1915 &&  this.state.timeNow <= 2000 ? styles.bold : styles.text]}> 20:00 </Text>
                <Text style={[ this.state.timeNow > 2000 &&  this.state.timeNow <= 2030 ? styles.bold : styles.text]}> 20:30 </Text>
                <Text style={[ this.state.timeNow > 2030 &&  this.state.timeNow <= 2045 ? styles.bold : styles.text]}> 20:45 </Text>
                <Text style={[ this.state.timeNow > 2045 &&  this.state.timeNow <= 2055 ? styles.bold : styles.text]}> 20:55 </Text>
              </View>
              }
            </View>
          </View>
        </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1', //ecf0f1
    padding: 8,
    marginTop: 20,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  heading:{
    margin: 20,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  cardHeading:{
    margin: 2,
    marginTop: 8,
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },
  dropdownStyle:{
    fontSize: 30,
    fontWeight: 'bold',
  },
  card:{
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 5,
  },
  text:{
    fontSize: 25,
    color: '#A9A9A9'
  },
  bold:{
    fontSize: 25,
    fontWeight:'bold'
  },
  schedule:{
    marginTop:10,
    marginBottom:10,
    marginLeft:30, 
    flexDirection:'row',
    flexWrap:'wrap', 
  }
});
