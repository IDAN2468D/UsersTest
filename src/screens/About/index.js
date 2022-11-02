import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const About = () => {
    return (
        <View style={styles.container}>

            <Text style={styles.welcome}>welcome</Text>
            <FontAwesome name="rocket" size={30} color="#900" />
        </View>
    )
}

export default About

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    welcome: {
        fontSize: 18,
        marginBottom: 8,
    },
})