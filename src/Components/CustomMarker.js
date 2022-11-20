import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../StyleGuide'


const CustomMarker = ({ color }) => {
    return (
        <View>
            <MaterialCommunityIcons name="battery-charging-70" size={30} color={color ? colors.GuidePink : colors.Blue} />
        </View>
    )
}

export default CustomMarker