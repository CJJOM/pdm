import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import Boton from '../Onboarding/Button';
import Constants from '../../Config/Constants';

const ButtonsFooter = ({onPressp, onPressn }) => {

    

      
    return(
        <View style={stylesButtonsFooter.containerbutton}>
            <Boton
                onPress={onPressp}
                titleButton={Constants.STRING.BUTTON_P}
            >
            </Boton>
            <Boton 
                onPress={onPressn}
                titleButton={Constants.STRING.BUTTON_N}
            >
            </Boton>
        </View>
    );
};

const stylesButtonsFooter = StyleSheet.create({
    containerbutton: {
        position: 'absolute',
        width: '100%',
        flex: 0,
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingRight: 10,
        paddingLeft: 10,
    }
});

export default ButtonsFooter;