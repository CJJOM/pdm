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
    ADD_APPID: 'Enter AppId',
    ADD_EMAIL_BUTTON: 'ADD',
    REVIEW_EMAIL: 'Please review email data',
    REVIEW_NEWS_CONTENT: 'Please review News Content',
    ENTER_EMAIL: 'Enter email',
    REGISTER_FORM: 'Register Form',
    ADD_NAMEAPP: 'Enter NameApp',
    ADD_USERID: 'Enter UserId',
    MAINTITLE: 'Cochabamba',
    MAINTITLE2: 'TIERRA QUE NUTRE',
    MI: 'Misión',
    VI: 'Visión',
    DES1H: 'Se tiene como misión fundamental el \n brindar información confiable y actualizada, \n de manera concisa e inmediata.',
    DES2H: 'Se tiene como visión construir una ciudad \n informativa. Debemos ser líderes en el \n desarrollo departamental, siendo una ciudad \n reconocida por nuestras costumbres.',
    TITUTRA: 'La llajta, \n la tierra \n que nutre',
    ADD_TITLE: 'Ingresa Titulo',
    ADD__NEWS_CONTENT: 'Ingresa Contenido',
    ADD_IMAGE_NEWS: 'Ingresa Imagen',
    ADD_DATE_NEWS: 'Ingresa Fecha',
    ADD_SCHEDULE: 'Ingres Horario',
    ADD_PHONE: 'Ingresa Telefono',
    ADD_PRICE: 'Ingresa Precio',
    ADD_DESC: 'Ingresa Descripción',
    ADD_LOCAT: 'Ingresa Localización'

};

export default {
    CONFIG: config,
    STRING: strings,
}