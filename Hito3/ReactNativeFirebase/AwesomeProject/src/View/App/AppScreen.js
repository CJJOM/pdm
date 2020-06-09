import React, {useLayoutEffect, useState, useEffect} from 'react';
import {StyleSheet, Text, View, Alert } from 'react-native';
import Colors from '../../Config/Colors';
import ButtonIcon from '../../Components/ButtonIcon';
import Images from '../../Config/Images';
import FirebasePlugin from '../../plugins/firebase/Firebase';

const AppScreen = ({navigation}) => {
    const onPressSetting = () => {
        navigation.navigate('Setting');
    }

    
    const onPressLogout = () => {
        try{
            FirebasePlugin.auth().signOut()
            .then(()=>{
                Alert.alert('Logout App', 'Successfully Logout', [{
                    text: 'Login App', onPress: () => {navigation.navigate('Login')}
                }])
            });
        } catch (e) {
            Alert.alert('Contact admin', e.message);
        }
    }


    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <ButtonIcon imageSrc={Images.SETTING} onPressButton={onPressSetting} ></ButtonIcon>
            ),
            headerRight: () => (
                <ButtonIcon imageSrc={Images.LOGOUT} onPressButton={onPressLogout}></ButtonIcon>
            ),
        })
    });

    return(
        <View style={styles.container}>
            <Text>App Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: Colors.blue,
        alignItems: 'center'
    }
});

export default AppScreen;