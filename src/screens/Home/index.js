import React from 'react';
import { StyleSheet, View } from 'react-native';
import AnimatedLoader from '../../Components/AnimatedLoader/index'


const HomeScreen = () => {

    return (
        <View style={styles.container}>
            <AnimatedLoader />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})