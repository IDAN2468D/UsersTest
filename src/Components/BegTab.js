import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SvgBag from '../Components/SvgBag';

const BegTab = () => {
    return (
        <View style={styles.Svg}>
            <SvgBag />
        </View>
    )
}

export default BegTab

const styles = StyleSheet.create({
    Svg: {
        position: "absolute",
        bottom: 1,
        paddingHorizontal: 25,
        paddingVertical: 25,
        borderRadius: 40,
        backgroundColor: "#E94B64",
    }
})