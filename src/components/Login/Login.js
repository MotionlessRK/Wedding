import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, KeyboardAvoidingView} from 'react-native';
import LoginForm from './LoginForm';


export default class Login extends Component {


  render() {
    return(
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
          style={styles.logo}
          source={require('/Users/ramiz/AwesomeProject/src/components/images/WeddingLogo.png')} />

          <Text style={styles.title}>Your personal wedding planner</Text>
        </View>
        <View style ={styles.formContainer}>
          <LoginForm/>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#c0392b'
  },

  logoContainer:{
    alignItems:'center',
    flexGrow: 1,
    justifyContent: 'center'
  },

  logo:{
    width:200,
    height:200
  },

  title:{
    color:'white',
    opacity:0.9
  }
});
