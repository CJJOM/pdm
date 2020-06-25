import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../../Config/Colors';

const SplashScreen = () => {
    return(
        <View style={styles.container}>
            <Text>Loading Screen!!!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.blue,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default SplashScreen;