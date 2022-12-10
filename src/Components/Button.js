import React from 'react';
import { View, Text, TouchableNativeFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

function Button({ buttonText, onPress, containerStyle, StyleText, disabled }) {
    return (
        <TouchableNativeFeedback onPress={onPress} disabled={disabled}>
            <View style={{ ...containerStyle }}>
                <Icon name='sc-telegram' size={30} color="white" />
                <Text style={{ ...StyleText }}>{buttonText}</Text>
            </View>
        </TouchableNativeFeedback>
    )
}

export default Button
