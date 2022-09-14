import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screens/HomeScreen';
import LoginScreen from '../Screens/Authentication/LoginScreen';
import RegisterScreen from '../Screens/Authentication/RegisterScreen';
import { AuthContext } from '../Context/AuthContext';
import SplashScreen from '../Screens/Authentication/SplashScreen';
import ForgetPassword from '../Screens/Authentication/ForgetPassword';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    const { userInfo, splashLoading } = useContext(AuthContext);

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {userInfo.token ? (
                    <Stack.Screen name="Home" component={HomeScreen} />
                ) : splashLoading ? (
                    <Stack.Screen
                        name="Splash Screen"
                        component={SplashScreen}
                        options={{ headerShown: false }}
                    />
                ) : (
                    <>
                        <Stack.Screen
                            name="Login"
                            component={LoginScreen}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="Register"
                            component={RegisterScreen}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name='ForgetPassword'
                            component={ForgetPassword}
                            options={{ headerShown: false }}
                        />
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};











export default Navigation;
