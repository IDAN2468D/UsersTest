import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, AboutScreen, Notifications } from '../Screens/index';
import LoginScreen from '../Screens/Authentication/LoginScreen';
import RegisterScreen from '../Screens/Authentication/RegisterScreen';
import { AuthContext } from '../Context/AuthContext';
import SplashScreen from '../Screens/Authentication/SplashScreen';
import ForgetPassword from '../Screens/Authentication/ForgetPassword';
import TabBarScreen from '../Components/TabBarScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Navigation = () => {
    const { userInfo, splashLoading } = useContext(AuthContext);

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {userInfo.token ? (
                    <Stack.Screen
                        name="Home"
                        component={MyTabs}
                        options={{ headerShown: false }}
                    />
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

function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName="home"
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarStyle: {
                    height: 80,
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30
                }
            }}
        >
            <Tab.Screen
                name="home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused, color, size, icons }) => (
                        <TabBarScreen focused={focused} color={color} size={size} icons="home" />
                    )
                }} />
            <Tab.Screen
                name="aboutScreen"
                component={AboutScreen}
                options={{
                    tabBarIcon: ({ focused, color, size, icons }) => (
                        <TabBarScreen focused={focused} color={color} size={size} icons="user" />
                    )
                }}
            />
            <Tab.Screen
                name="Notifications"
                component={Notifications}
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        <TabBarScreen focused={focused} color={color} size={size} icons="bells" />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}










export default Navigation;
