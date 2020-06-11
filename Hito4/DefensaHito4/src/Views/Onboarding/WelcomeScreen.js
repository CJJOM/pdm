import React from 'react';
import { StyleSheet, View } from 'react-native';
import Constants from '../../Config/Constants';
import Images from '../../Config/Images';

import OnboardingFactory from '../../Components/Onboarding/OnboardingFactory';


const WelcomeScreen = ({navigation}) => {
    return(
        <OnboardingFactory
        imagenes={Images.FPDM}
        title1={Constants.STRING.TITLE_PDM}
        des1={Constants.STRING.DESC1}
        onPressn={()=>{navigation.navigate('TaskScreen');}}
        onPressp={()=>{navigation.navigate('WelcomeScreen');}}
        >
        </OnboardingFactory>
    );
};

export default WelcomeScreen;