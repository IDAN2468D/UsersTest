import React from 'react';
import { View, Text, TouchableNativeFeedback } from 'react-native';

function Button({ buttonText, onPress, containerStyle, StyleText, disabled }) {
    return (
        <TouchableNativeFeedback onPress={onPress} disabled={disabled}>
            <View
                style={{ ...containerStyle }}>
                <Text style={{ ...StyleText }}>{buttonText}</Text>
            </View>
        </TouchableNativeFeedback>
    )
}

export default Button
