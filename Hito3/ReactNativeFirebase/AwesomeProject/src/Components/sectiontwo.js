import React from 'react';
import { StyleSheet, Image, TouchableOpacity, View, Text} from 'react-native';
import Colors from '../Config/Colors';
import Images from '../Config/Images';

const Sectiontwo = () =>{
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Misión</Text>
            <Text style={styles.parrafo}>Somos una empresa</Text>
            <Text style={styles.titulo}>Visión</Text>
            <Text style={styles.parrafo}>Queremos emprender para la mejora</Text>
        </View>
    )
    
}

const styles = StyleSheet.create({ 
        container: {
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative'
        },
        parrafo: {
            color: Colors.white,
            fontFamily: 'TofinoPersonal-Regular'
        },
        titulo: {
            color: '#E7BE8B',
            fontFamily: 'Hangbird',
            fontSize: 30

        }
}); 

export default Sectiontwo;