import React from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import styles from './Stylesheet';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Login extends React.Component {
  state = {
    username:"",
    password:"",
    errorMessage: null,
    USER_PASSWORD_AUTH: "USER_PASSWORD_AUTH",
    data: ""
  }

  handleLogin = async () => {
    var email = this.state.username
    var password = this.state.password
    var USER_PASSWORD_AUTH = this.state.USER_PASSWORD_AUTH
    if (email && password) { 
        try {
              let response = await fetch(
                "https://api.bybits.co.uk/auth/token", {
            method: "POST",
            headers: {
              'environment': 'mock',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              username: email,
              password: password,
              type: USER_PASSWORD_AUTH
            })
          }) 
          let json = await response.json();
          this.setState({ data: json.access_token });
          console.log(this.state.data)
          try {
            await AsyncStorage.setItem('@storage_Key', json.access_token)
          } catch (e) {
            // saving error
          }
          this.props.navigation.navigate('Policy')
      } catch (error) {
        this.setState({errorMessage: error.message})
      }
      
    } else {
      this.setState({errorMessage: 'Fields cannot be blank'}) 
    }
  }
  
  render() {
    return (
    
      <View style={styles.container}>
        <Text style={styles.title}>Sign In</Text>
          {this.state.errorMessage &&
            <Text style={{ color: 'red'}}>
              {this.state.errorMessage}
        </Text>}
        <View style={styles.inputView}>
            <TextInput
              id="username"
              placeholder = "User Name"
              onChangeText={username => this.setState({ username })} 
              value={this.state.username}
            />
        </View>

        <View style={styles.inputView}>
            <TextInput
              id="password"
              placeholder = "Password"
              onChangeText={password => this.setState({ password })} 
              value={this.state.password}
            />
        </View>

        <TouchableOpacity style={styles.loginBtn}>
            <Text 
            style={styles.loginText}
            onPress={
              this.handleLogin}>Log in</Text>
        </TouchableOpacity>

      </View>
      
    );
  };
};