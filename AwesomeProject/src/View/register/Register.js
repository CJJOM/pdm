import React from 'react';
import {StyleSheet,  View, TextInput, TouchableOpacity} from 'react-native';

import Constants from '../../Config/Constants';
import Images from '../../Config/Images';
import Colors from '../../Config/Colors';

const RegisterScreen = ({onChangeTextEmail, onChangeTextPassword, onPressRegister}) => {
    return(
        <View style={styles.container}>
            <Text>Register Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    }
});

export default RegisterScreen;