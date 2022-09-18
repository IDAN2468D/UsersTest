import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const TabBarScreen = ({ focused, size, icons }) => {
    return (
        <View style={[styles.Icon, { borderBottomWidth: focused ? 4 : 0, borderColor: focused ? "red" : "blue", }]}>
            <Icon name={icons} size={size} focused={focused} color={focused ? "red" : "blue"} />
        </View>
    )
}

export default TabBarScreen

const styles = StyleSheet.create({
    Icon: {
        paddingHorizontal: 10,
        paddingVertical: 10,

    }
})