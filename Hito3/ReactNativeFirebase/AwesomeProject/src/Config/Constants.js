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

};

export default {
    CONFIG: config,
    STRING: strings,
}