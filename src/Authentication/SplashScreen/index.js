import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { DotIndicator } from 'react-native-indicators';

const SplashScreen = () => {
    return (

        <DotIndicator style={styles.container} animating={true} hidesWhenStopped={false} />

    )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#06bcee",
    }
})