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
        width: 320,
        justifyContent: 'center',
        backgroundColor: 'transparent',
        marginBottom: 12,
        paddingVertical: 12,
        borderRadius: 50,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: 'rgba(255,255,255,0.7)'
    },
    text: {
        color: Colors.white,
        textAlign: 'center',
        height: 20,
    },
});

