import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TabBarText = ({ focused, size, TextItem }) => {
    return (
        <View >
            <Text focused={focused} size={size} style={{ color: focused ? "#E94B64" : "grey" }}>{TextItem}</Text>
        </View>
    )
}

export default TabBarText