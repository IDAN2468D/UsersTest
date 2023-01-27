import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SaleYellowScreen from '../screens/SaleYellowScreen/SaleYellowScreen';
import MyCouponsScreen from '../screens/MyCouponsScreen/MyCouponsScreen';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarIndicatorStyle: { backgroundColor: "red" },
                tabBarLabelStyle: { fontSize: 12, backgroundColor: "white", paddingHorizontal: 30, paddingVertical: 10, borderRadius: 30, },
                tabBarStyle: { backgroundColor: "green" },
            }}
        >
            <Tab.Screen name="Home" component={SaleYellowScreen} />
            <Tab.Screen name="Settings" component={MyCouponsScreen} />
        </Tab.Navigator>
    );
}

export default MyTabs;
