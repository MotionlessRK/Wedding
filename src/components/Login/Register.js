import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, StatusBar } from 'react-native';

export default class Register extends Component {
  constructor(){
    super();

    this.state={
      name:"",
      email:"",
      password:"",
      password_confirmation:"",
      errors:[]
    }
  }

  render() {
    return(
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          />
          <TextInput
            placeholder="Full Name"
            placeholderTextcolor="rgba(255,255,255,0.7)"
            returnKeyType="next"
            onSubmitEditing={() => this.passwordInput.focus()}
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
            />
        <TextInput
          placeholder="Email"
          placeholderTextcolor="rgba(255,255,255,0.7)"
          returnKeyType="next"
          onSubmitEditing={() => this.passwordInput.focus()}
          keyBoardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
          //ref={(emailInput)}=> this.
          />
        <TextInput
          placeholder="Password"
          returnKeyType="go"
          secureTextEntry
          placeholderTextcolor="rgba(255,255,255,0.7)"
          style={styles.input}
          ref={(input)=> this.passwordInput = input}
          />
          <TextInput
            placeholder="Retype Password"
            returnKeyType="go"
            secureTextEntry
            placeholderTextcolor="rgba(255,255,255,0.7)"
            style={styles.input}
            ref={(input)=> this.passwordInput = input}
            />



          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>REGISTER</Text>
          </TouchableOpacity>

      </View>

    )
  }
}

const styles = StyleSheet.create({
  container:{
    padding:20,
    backgroundColor:'#e74c3c',
    flex:1
  },

  buttonContainer:{
    backgroundColor:'#e74c3c',
    paddingVertical:15,
    marginBottom:10
  },

  buttonText:{
    textAlign:'center',
    color:'#FFFFFF',
    fontWeight:'700'
  },

  input:{
    height:40,
    backgroundColor:'rgba(255,255,255,0.2)',
    marginBottom:10,
    color:'#FFF',
    paddingHorizontal: 10
  }
});
