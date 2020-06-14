import React from 'react';
import { StyleSheet, View } from 'react-native';
import Constants from '../../Config/Constants';
import Images from '../../Config/Images';

import OnboardingFactory from '../../Components/Onboarding/OnboardingFactory';


const TaskScreen = ({navigation}) => {
    return(
        <OnboardingFactory
        imagenes={Images.FDEFH3}
        title1={Constants.STRING.DEF_H4}
        des1={Constants.STRING.DESC2}
        onPressn={()=>{navigation.navigate('Login');}}
        onPressp={()=>{navigation.navigate('WelcomeScreen');}}
        >
        </OnboardingFactory>
    );
};

export default TaskScreen;