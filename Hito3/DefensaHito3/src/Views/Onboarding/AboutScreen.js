import React from 'react';
import { StyleSheet, View } from 'react-native';
import Constants from '../../Config/Constants';
import Images from '../../Config/Images';

import OnboardingFactory from '../../Components/Onboarding/OnboardingFactory';
import Colors from '../../Config/Colors';


const AboutScreen = ({navigation}) => {
    return(
        <OnboardingFactory 
        imagenes={Images.FFIRE}
        title1={Constants.STRING.FIRE}
        des1={Constants.STRING.DESC3}
        onPressn={()=>{navigation.navigate('Login');}}
        onPressp={()=>{navigation.navigate('TaskScreen');}}
        >
        </OnboardingFactory>
    );
};

export default AboutScreen;