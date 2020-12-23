import React from 'react';
import { SafeAreaView, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Container = ({children}) => {
    return (
    <LinearGradient 
        colors={['#4c669f', '#3b5998','#192f6a']}
        style={styles.gradient}>
        <SafeAreaView 
            style={styles.container}>
                {children}
        </SafeAreaView>
    </LinearGradient>
    );
}

const styles = StyleSheet.create({
    gradient:{
        flex: 1
    },
    container:{
        flex: 1,
        marginHorizontal: 15,
    },
})

export default Container;