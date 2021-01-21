import React from 'react';
import { Text, View } from 'react-native';
import styles from './Stylesheet';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Policy extends React.Component {

  state = {
    access_token: "",
    policy: "",
    car: "",
    policyRef: "",
    address: {}
  }
  
  componentDidMount = async () => {
      const value = await AsyncStorage.getItem('@storage_Key')
      this.setState({ access_token: value });
      try {
        let response = await fetch(
          "https://api.bybits.co.uk/policys/details", {
      method: "GET",
      headers: {
        'environment': 'mock',
        'Authorization': this.state.access_token,
        'Content-Type': 'application/json'
      }
    }) 
    let json = await response.json();
    this.setState({ policy: json.policy });
    this.setState({ car: json.vehicle });
    this.setState({address: this.state.policy.address})
    const myPolicyRef = (this.state.policy.policy_ref).replace(/[^\w\s]/gi, ' ')
    this.setState({ policyRef: myPolicyRef})
    console.log(this.state.car)
    console.log(json)
    console.log(this.state.policy.address)
    } catch (e) {
      // saving error
    }
  }
  
  render() {
    
    return (
      <View style={styles.container}>
        <Text style={styles.title}>My Policy</Text>

        <Text style={styles.policyText}>Policy reference:</Text>
        <Text style={styles.policyRef}>{this.state.policyRef}</Text>

        <Text style={styles.policyText}>Cover type</Text>
        <Text style={styles.policyResults}>{this.state.policy.cover}</Text>

        <Text style={styles.policyText}>Car</Text>
        <Text style={styles.policyResults}>{this.state.car.make} {this.state.car.model} {this.state.car.colour}-{this.state.car.reg}</Text>

        <Text style={styles.policyText}>Address</Text>
        <Text style={styles.policyResults}>{this.state.address.line_1}, {this.state.address.line_2}, {this.state.address.postcode}</Text>
      </View>
    )
  }
}