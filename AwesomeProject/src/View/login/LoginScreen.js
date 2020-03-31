import React, {Component} from 'react';
import {StyleSheet, View, Text } from 'react-native';

import ButtonLogin from '../../Components/login/Button';
import TextInputLogin from '../../Components/TextInput';
import LogoLogin from '../../Components/login/Logo';

import imgUsername from '../../images/username.png';
import imgPassword from '../../images/pass.png';

import Constants from '../../Config/Constants';
import Colors from '../../Config/Colors';


export default class LoginScreen extends Component {
    constructor(props){
        super(props);

        this.state = {
            username: '',
            password: ''
        }
        this._onPress = this._onPress.bind(this);
        this._onChangeTextUsername = this._onChangeTextUsername.bind(this);
        this._onChangeTextPassword = this._onChangeTextPassword.bind(this);
    }

    _onPress(){
        console.log('Button pressed!!');
        console.log(this.state.username);
        console.log(this.state.password);
    }

    _onChangeTextUsername(username){
        this.setState({
            username: username
        });
    }

    _onChangeTextPassword(password){
        this.setState({
            password: password
        });
    }

    render(){
        return(
            <View style={stylesLoginScreen.container}>
                <LogoLogin style={stylesLoginScreen.logo}></LogoLogin>
            <View style={stylesLoginScreen.form}>
                <TextInputLogin
                    onChangeText={this._onChangeTextUsername}
                    source={imgUsername}
                    placeholder={Constants.USERNAME}
                    securetextEntry={false}
                    autoCorrect={false}
                >
                </TextInputLogin>
                <TextInputLogin
                    onChangeText={this._onChangeTextPassword}
                    source={imgPassword}
                    placeholder={Constants.PASSWORD}
                    securetextEntry={true}
                    autoCorrect={false}
                >
                </TextInputLogin>
                <ButtonLogin
                    onPress={this._onPress}
                    titleButton={Constants.TITLE_BUTTON}
                >
                </ButtonLogin>
            </View>
                
            </View>
        );
    }
}

const stylesLoginScreen = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.dark,
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    logo: {
      flex: 1,
      width: '100%',
      resizeMode: 'contain',
      alignSelf: 'center',
    },
    form: {
      flex: 1,
      justifyContent: 'center',
      width: '80%',
    },
  });
  