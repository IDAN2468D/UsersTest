import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DetailsScreen, SvgMax, Welcome, Onboarding } from '../screens/index';
import { LoginScreen, SplashScreen, RegisterScreen } from '../Authentication/index';
import { AuthContext } from '../Context/AuthContext';
import DetailsScreen_2 from '../screens/DetailsScreen_2';
import TabBarButton from '../Components/TabBarButton'
import Icon from '../StyleGuide/Icons';
import { TabArr } from '../Data/TabArr'


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
                                headerShown: false,
                                headerShadowVisible: false,
                                headerBackVisible: false,
                            }}
                        />
                        <Stack.Screen
                            name='DetailsScreen_2'
                            component={DetailsScreen_2}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name='DetailsScreen'
                            component={DetailsScreen}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name='SvgMax'
                            component={SvgMax}
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
                            name="welcome"
                            component={Welcome}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen name='Onboarding'
                            component={Onboarding}
                            options={{ headerShown: false }}
                        />

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
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    position: "absolute",
                    height: 60,
                    bottom: 16,
                    right: 16,
                    left: 16,
                    elevation: 10,
                    borderRadius: 16,
                }
            }}>
            {TabArr.map((item, index) => {
                return (
                    <Tab.Screen key={index} name={item.route} component={item.component}
                        options={{
                            tabBarShowLabel: false,
                            tabBarIcon: ({ focused, index }) => (
                                <Icon key={index} type={item.type} name={focused ? item.activeIcon : item.inActiveIcon} />
                            ),
                            tabBarButton: (props) => <TabBarButton {...props} item={item} />
                        }}
                    />
                )
            })}
        </Tab.Navigator>
    );
}

export default Navigation;
