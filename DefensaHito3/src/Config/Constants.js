import { Dimensions } from 'react-native';

const config = {
    SCREEN_WIDTH: Dimensions.get('window').width,
    SCREEN_HEIGHT: Dimensions.get('window').height,
    HEADER_HEIGHT: Dimensions.get('window').height,

};

const strings = {
    PASSWORD: 'password',
    USERNAME: 'Username',
    TITLE_BUTTON: 'LOG IN',
    REGISTER: 'Register',
    EMAIL: 'Email',
    EMAIL_ERROR: 'Email Incorrecto!!!',
    PASSWORD_ERROR: 'Password invalido!!!',
    EMAIL_ERROR: 'Email invalid!',
    PASSWORD_ERROR: 'Password invalid!',
    EMPTY_TITLE: 'Review Email/Password values',
    EMPTY_VALUES: 'Empty values detected',
    TITLE_PDM: 'PDM',
    DESC1: 'Programación de Dispositivos Moviles - Unifranz',
    DEF_H3: 'DEFENSA HITO 3',
    DESC2: 'Univ: Jomar Camacho Gestion 2020',
    FIRE: 'FIREBASE',
    DESC3: 'Integración de React Native con Firebase',
    BUTTON_P: 'Prev',
    BUTTON_N: 'Next',
   

};

export default {
    CONFIG: config,
    STRING: strings,
}
