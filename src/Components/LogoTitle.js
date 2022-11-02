import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const LogoTitle = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.Text}>מבצעים וקופונים</Text>
        </View>
    )
}

export default LogoTitle

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginVertical: 20,
    },
    Text: {
        fontSize: 20,
        color: "black",
        fontWeight: 'bold'
    }
})