import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

import Colors from '../Config/Colors';
import Constants from '../Config/Constants';

const CTextField = ({ value, autoCorrect, placeholder, error, onChange, onValidate }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.error}>{error}</Text>
            <View style={styles.fieldView}>
                <TextInput
                    style={styles.field}
                    value={value}
                    autoCorrect={autoCorrect}
                    placeholder={placeholder}
                    onChangeText={onChange}
                    onEndEditing={onValidate}
                >
                </TextInput>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
   
    error: {
        fontSize: 12,
        color: Colors.red,
        marginBottom: -5,
        marginHorizontal: 20,
    },
    field: {
        fontSize: 14,
        flex: 1,
        paddingLeft: 20,
        marginHorizontal: 20,
        color: Colors.white,
    },
    fieldView: {
        height: Constants.CONFIG.HEADER_HEIGHT * 0.06,
        width: Constants.CONFIG.SCREEN_WIDTH * 0.85,
        borderRadius: 10,
        marginTop: 5,
        marginBottom: 10,
        borderColor: Colors.black2,
        borderWidth: 1,
        justifyContent: 'center',
        backgroundColor: Colors.fieldBackgroud,
    },
});

export default CTextField;