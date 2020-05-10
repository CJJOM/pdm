import * as  React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../Views/Login/LoginScreen';
import MiappScreen from '../Views/Miapp/MIAPP';
import PdmScreen from '../Views/Pdm/PDM';
import Defensah3Screen from '../Views/Defensahito3/DEFENSAHITO3';
import FirebaseScreen from '../Views/Firebase/FIREBASE';

/*DEFENSA HITO 3*/
import WelcomScreen from '../Views/Onboarding/WelcomeScreen';
import TasScreen from '../Views/Onboarding/TaskScreen';
import AboutScreen from '../Views/Onboarding/AboutScreen';

const Stack = createStackNavigator();

function mainNavigator() {
    return(
        <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
                name="WelcomeScreen"
                component={WelcomScreen}
                options={{headerShown: false}}
            >
            </Stack.Screen>
            <Stack.Screen
                name="TaskScreen"
                component={TasScreen}
                options={{headerShown: false}}
            >
            </Stack.Screen>
            <Stack.Screen
                name="AboutScreen"
                component={AboutScreen}
                options={{headerShown: false}}
            >
            </Stack.Screen>
            <Stack.Screen
                name="PDMScreen"
                component={PdmScreen}
                options={{headerShown: false}}
            >
            </Stack.Screen>
            <Stack.Screen
                name="Miapp"
                component={MiappScreen}
                options={{title: 'Miapp Form '}}
            >
            </Stack.Screen>
            <Stack.Screen
                name="DEFENSAHITO3"
                component={Defensah3Screen}
                options={{headerShown: false}}
            >
            </Stack.Screen>
            <Stack.Screen
                name="FIREBASE"
                component={FirebaseScreen}
                options={{headerShown: false}}
            >
            </Stack.Screen>
            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{title: 'Login Form APP'}}
            >
            </Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
    );
    
}

export default mainNavigator;