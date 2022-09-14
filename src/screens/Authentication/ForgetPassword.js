import React from 'react';
import { StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native';

const ForgetPassword = ({ navigation }) => {
    return (
        <TouchableNativeFeedback onPress={() => navigation.goBack("ForgetPassword")}>
            <View style={styles.ForgetPassword}>
                <Text style={{ fontSize: 30, }}>ForgetPassword</Text>
            </View>
        </TouchableNativeFeedback>
    )
}

export default ForgetPassword

const styles = StyleSheet.create({
    ForgetPassword: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})