import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import LoginScreen from '../View/login/LoginScreen2';
import RegisterScreen from '../View/register/Register';
import AppScreen from '../View/App/AppScreen';
import SettingScreen from '../View/Setting/SettingScreen';
import SplashScreen from '../View/Splash/SplashScreen';
import NoticeScreen from '../View/Notice/noticeScreen';
import Colors from '../Config/Colors';

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

const Drawer = createDrawerNavigator();
const DrawerScreen = () => {
  return (
    <Drawer.Navigator drawerStyle={{backgroundColor: 'transparent'}}>
      <Drawer.Screen
        name="App"
        component={AppScreen}
        options={{
          title: 'Home',
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
        component={SettingScreen}
        options={{title: 'Turismo'}}
      />

      <Drawer.Screen
        name="Setting"
        component={SettingScreen}
        options={{title: 'Settings'}}
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

export default mainNavigator;
