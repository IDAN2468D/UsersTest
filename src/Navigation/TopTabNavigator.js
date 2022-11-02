import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SaleYellowScreen from '../screens/SaleYellowScreen';
import MyCouponsScreen from '../screens/MyCouponsScreen';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                },
            }}
        >
            <Tab.Screen name="Home" component={SaleYellowScreen} />
            <Tab.Screen name="Settings" component={MyCouponsScreen} />
        </Tab.Navigator>
    );
}

export default MyTabs;
