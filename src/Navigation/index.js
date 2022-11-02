import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home';
import AboutScreen from '../screens/About';
import LoginScreen from '../Authentication/LoginScreen';
import RegisterScreen from '../Authentication/RegisterScreen';
import { AuthContext } from '../Context/AuthContext';
import SplashScreen from '../Authentication/SplashScreen';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function TabScreen() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: "blue",
                    height: 80,
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30
                },
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="home" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name='About'
                component={AboutScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <AntDesign name='book' color={color} size={26} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

const Navigation = () => {
    const { userInfo, splashLoading } = useContext(AuthContext);

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {userInfo.token ? (
                    <Stack.Screen name="home" component={TabScreen} options={{ headerShown: false }} />
                ) : splashLoading ? (
                    <Stack.Screen
                        name="Splash Screen"
                        component={SplashScreen}
                        options={{ headerShown: false }}
                    />
                ) : (

                    <>
                        <Stack.Screen
                            name="login"
                            component={LoginScreen}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="Register"
                            component={RegisterScreen}
                            options={{ headerShown: false }}
                        />
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};











export default Navigation;
