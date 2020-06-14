import * as  React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../Views/Login/LoginScreen';

/*DEFENSA HITO 4*/
import WelcomScreen from '../Views/Onboarding/WelcomeScreen';
import TasScreen from '../Views/Onboarding/TaskScreen';


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