import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { MotiView } from "moti"

const ProfileScreen = () => {
    return (
        <MotiView
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}
            from={{
                transform: [{ scale: 0 }, { translateX: -10 }, { rotateY: "0deg" }],
            }}
            animate={{
                transform: [{ scale: 2 }, { translateX: 0 }, { rotateY: "360deg" }],
            }}
            transition={{
                loop: true,
                repeatReverse: false,
                type: "timing",
                duration: 8000,
            }}
        >
            <Icon name='settings-sharp' size={100} />
        </MotiView>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({})