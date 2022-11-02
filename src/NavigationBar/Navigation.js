import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, BagScreen, OrderScreen, ChatScreen, ProfileScreen, DetailsScreen } from '../screens/index';
import { LoginScreen, SplashScreen, RegisterScreen } from '../Authentication/index';
import { AuthContext } from '../Context/AuthContext';
import TabBarScreen from '../Components/TabBarScreen';
import TabBarText from '../Components/TabBarText';
import BegTab from '../Components/BegTab';
import LogoTitle from '../Components/LogoTitle';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Navigation = () => {

    const { userInfo, splashLoading } = useContext(AuthContext);

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {userInfo.token ? (
                    <>
                        <Stack.Screen
                            name="Home"
                            component={MyTabs}
                            options={{
                                headerShown: true,
                                headerShadowVisible: false,
                                headerBackVisible: false,
                                headerTitle: (props) => (<LogoTitle name="Category" {...props} />),
                                headerStyle: {
                                    backgroundColor: "#FFE500",
                                }
                            }}
                        />
                        <Stack.Screen
                            name='DetailsScreen'
                            component={DetailsScreen}
                            options={{ headerShown: false }}
                        />
                    </>
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
                tabBarShowLabel: true,
                headerShown: false,
                tabBarStyle: {
                    height: 60,
                    paddingBottom: 10,
                    paddingBottom: 5,
                }
            }}
        >
            <Tab.Screen
                name='ProfileScreen'
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        <TabBarScreen focused={focused} color={color} size={size} icons="user" />
                    ),
                    tabBarLabel: ({ focused, size, color }) => (
                        <TabBarText focused={focused} color={color} size={size} TextItem="Profile" />
                    ),
                }}
            />
            <Tab.Screen
                name='ChatScreen'
                component={ChatScreen}
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        <TabBarScreen focused={focused} color={color} size={size} icons="wechat" />
                    ),
                    tabBarLabel: ({ focused, size, color }) => (
                        <TabBarText focused={focused} color={color} size={size} TextItem="Chat" />
                    ),
                }}
            />
            <Tab.Screen
                name="BagScreen"
                component={BagScreen}
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        <BegTab focused={focused} color={color} size={size} />
                    ),
                    tabBarLabel: ({ focused, size, color }) => (
                        <TabBarText focused={focused} color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="OrderScreen"
                component={OrderScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <TabBarScreen focused={focused} color={color} size={size} icons="filetext1" />
                    ),
                    tabBarLabel: ({ focused, size, color }) => (
                        <TabBarText focused={focused} color={color} size={size} TextItem="Order" />
                    ),
                }}
            />
            <Tab.Screen
                name="home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <TabBarScreen focused={focused} color={color} size={size} icons="home" />
                    ),
                    tabBarLabel: ({ focused, size, color }) => (
                        <TabBarText focused={focused} color={color} size={size} TextItem="Home" />
                    ),
                }} />
        </Tab.Navigator>
    );
}










export default Navigation;
