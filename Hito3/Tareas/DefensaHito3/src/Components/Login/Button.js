import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Colors from '../../Config/Colors';


export default class button extends Component {

    constructor(prop) {
        super(prop);
    }



    render() {
        return (
            <View style={stylesButton.container}>
                <TouchableOpacity
                    style={stylesButton.button}
                    onPress={this.props.onPress}
                >
                    <Text
                        style={stylesButton.text}>{this.props.titleButton}

                    </Text>

                </TouchableOpacity>
            </View>
        );
    }
}

const stylesButton = StyleSheet.create({
    container: {
        width: 140,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor: 'transparent',
        marginBottom: 12,
        paddingVertical: 12,
        borderRadius: 50,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: Colors.white,
        height: 35,
        borderWidth: 1,
    },
    text: {
        color: Colors.white,
        textAlign: 'center',
        height: 20,
        fontWeight: 'bold'
    },
});

