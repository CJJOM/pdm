import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContent,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer';

import Container from '../View/login/Container';
import LoginScreen from '../View/login/LoginScreen2';
import RegisterScreen from '../View/register/Register';
import AppScreen from '../View/App/AppScreen';
import SettingScreen from '../View/Setting/SettingScreen';
import SplashScreen from '../View/Splash/SplashScreen';
import NoticeScreen from '../View/Notice/noticeScreen';
import TurismScreen from '../View/Turismo/turismScreen';
import Colors from '../Config/Colors';
import {View, Image, StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import MapaScreen from '../View/Map/mapScreen';
import Ruta from '../View/Map/ruta';

const Stack = createStackNavigator();
const StackScreen = ({route}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        initialParams={{route}}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          title: 'Register Form',
          headerStyle: {
            backgroundColor: Colors.appPrimary,
          },
          headerTintColor: Colors.white,
          headerTitleStyle: {
            fontWeight: 'bold',
            color: Colors.white,
          },
        }}
      />
    </Stack.Navigator>
  );
};

function Menu(props) {
  return (
    <Container>
      <View style={styles.container}>
        <View style={styles.bgContainer}>
          <TouchableOpacity>
            <View style={styles.userContainer}>
              <Image
                style={styles.userImagen}
                source={require('../../assets/fondo.png')}></Image>
            </View>
            <View style={styles.userNombre}>
              <Text style={styles.userTitulo}>Cochabamba</Text>
              <Text style={styles.userSubTitulo}>La tierra que nutre</Text>
            </View>
          </TouchableOpacity>
        </View>
        <DrawerItemList {...props}></DrawerItemList>
      </View>
    </Container>
  );
}

const Drawer = createDrawerNavigator();
const DrawerScreen = () => {
  return (
    <Drawer.Navigator 
      drawerStyle={{backgroundColor: 'transparent'}}
      drawerContent={(props) => <Menu {...props}></Menu>}>
      <Drawer.Screen
        name="App"
        component={AppScreen}
        options={{
          title: 'Nosotros',
          headerStyle: {
            backgroundColor: Colors.white,
          },
          headerTintColor: Colors.white,
          headerTitleStyle: {
            fontWeight: 'bold',
            color: Colors.white,
            fontSize: 25,
          },
        }}
      />

      <Drawer.Screen
        name="Noticias"
        component={NoticeScreen}
        options={{title: 'Noticias'}}
      />

      <Drawer.Screen
        name="Turismo"
        component={TurismScreen}
        options={{title: 'Turismo'}}
      />

      <Drawer.Screen
        name="Mapa"
        component={MapaScreen}
        options={{title: 'Mapa'}}
      />
    </Drawer.Navigator>
  );
};

const MainStack = createStackNavigator();
const MainStackScreen = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [isLogged, setIsLogged] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <MainStack.Navigator headerMode="none">
      {isLoading ? (
        <MainStack.Screen
          name="Loading"
          component={SplashScreen}></MainStack.Screen>
      ) : isLogged ? (
        <MainStack.Screen
          name="DrawerNavigation"
          component={DrawerScreen}></MainStack.Screen>
      ) : (
        <MainStack.Screen
          name="LoginRegister"
          component={StackScreen}
          initialParams={{setIsLogged}}></MainStack.Screen>
      )}
    </MainStack.Navigator>
  );
};

const mainNavigator = () => {
  return (
    <NavigationContainer>
      <MainStackScreen></MainStackScreen>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  bgContainer: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#A0A0A0',
  },

  userContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },

  userImagen: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },

  camaraContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  camaraIcon: {
    width: 20,
    height: 20,
    position: 'absolute',
    left: 15,
    bottom: 3,
  },
  userNombre: {
    marginVertical: 10,
  },

  userTitulo: {
    textAlign: 'center',
    fontSize: 25,
    color: Colors.white,
    fontFamily: 'Hangbird',
  },

  userSubTitulo: {
    textAlign: 'center',
    fontSize: 11,
    color: '#E7BE8B',
    paddingVertical: 5,
    fontFamily: 'TofinoPersonal-Book',
    lineHeight: 10,
  },
});

export default mainNavigator;
