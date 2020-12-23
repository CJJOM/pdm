import React from 'react';
import { StyleSheet, Image, TouchableOpacity, View, Text} from 'react-native';
import Colors from '../Config/Colors';
import Images from '../Config/Images';
import Constants from '../Config/Constants';

const Sectionone = () =>{
    return(
        <View style={styles.container}>
            <Image 
                style={styles.traza}
                source={Images.TRAZADO}
            ></Image>
            <Text style={styles.parrafo}>{Constants.STRING.TITUTRA}</Text>
        </View>
    )
    
}

const styles = StyleSheet.create({ 
        container: {
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
            marginTop: 80
        },
        traza:{
            width: 190,
            height: 190,
            position: 'absolute',
        },
        parrafo: {
            position: 'absolute',
            paddingTop: 35,
            color: '#E7BE8B',
            textAlign: 'center',
            fontSize: 25,
            fontFamily: 'TofinoPersonal-Black'
            
        }
}); 

export default Sectionone;