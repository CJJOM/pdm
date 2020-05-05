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
    EMAIL: 'Email',
    EMAIL_ERROR: 'Email Incorrecto!!!',
    PASSWORD_ERROR: 'Password invalido!!!',
};

export default {
    CONFIG: config,
    STRING: strings,
}
