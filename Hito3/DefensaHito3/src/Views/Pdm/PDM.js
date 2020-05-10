import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, KeyboardAvoidingView, Alert, Text, Image} from 'react-native';

import Button_pn from '../../Components/Login/Button';
import TextInputLogin from '../../Components/Login/TextInput';
import LogoLogin from '../../Components/Login/Logo';
import EmailTextField from '../../Components/Login/EmailTextField';
import DismissKeyboard from '../../Components/Login/DismissKeyboard';
import FirebasePlugin from '../../Plugins/firebase/Firebase';

import Utils from '../../Utils/utils';
import Images from '../../Config/Images';
import Constants from '../../Config/Constants';
import Colors from '../../Config/Colors';

const PdmScreen = ({navigation}) => {
    const _onPressn = () => {
        navigation.navigate('DEFENSAHITO3');
      };

      return (
        <View style={styles.container}>
            <Image
            style={styles.imagen}
            source={Images.FPDM}
            ></Image>
            <Text style={styles.text1}>{Constants.STRING.TITLE_PDM}</Text>
            <Text style={styles.text}>Programación de Dispositivos Moviles - Unifranz</Text>
            <View style={styles.containerbutton}>
                <Button_pn
                    titleButton={Constants.STRING.BUTTON_P}
                >
                </Button_pn>
                <Button_pn
                  onPress={_onPressn}
                    titleButton={Constants.STRING.BUTTON_N}
                >    
                </Button_pn>
            </View>
            </View>
      );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: Colors.green,
      },
      text:{
        color: Colors.white,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 30,
        paddingBottom: 270
      },
      text1:{
          textAlign:'center',
        paddingBottom: 20,
        color: Colors.white,
        fontSize: 30,
        fontWeight: 'bold',
        paddingBottom: 20
      },
      containerbutton: {
          flex: 0,
          justifyContent: 'space-between',
          flexDirection: 'row',
          paddingRight: 10,
          paddingLeft: 10          
      },
      imagen: {
        width: '100%',
        height: 450,
        marginTop: -70,
        marginLeft: 100
      }
});

export default PdmScreen;