import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const TabBarScreen = ({ focused, size, icons }) => {
    return (
        <View>
            <Icon name={icons} size={size} focused={focused} color={focused ? "red" : "grey"} />
        </View>
    )
}

export default TabBarScreen