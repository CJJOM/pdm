import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import ButtonsFooter from '../Onboarding/ButtonsFooter';
import Description from '../Onboarding/Description';


const OnboardingFactory = ({imagenes, title1, des1,onPressp,onPressn}) => {


    return (
        <View style={styleOnboardFacto.container}>
            <Description
                imagenes={imagenes}
                title1={title1}
                desc1={des1}
            ></Description>
            <ButtonsFooter
            onPressp={onPressp}
            onPressn={onPressn}
            ></ButtonsFooter>
        </View>
    );

};

const styleOnboardFacto = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end'
    }
});
export default OnboardingFactory;