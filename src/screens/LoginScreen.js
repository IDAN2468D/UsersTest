import React, { useState, useContext } from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View, ActivityIndicator } from 'react-native'
import { AuthContext } from '../Context/AuthContext';

const LoginScreen = ({ navigation }) => {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const { login, isLoading } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <View style={styles.ActivityIndicator}>
                <ActivityIndicator animating={isLoading} size="large" />
            </View>
            <View style={styles.wrapper}>
                <TextInput
                    style={styles.input}
                    value={email}
                    placeholder='Enter email'
                    onChangeText={(text) => setEmail(text)}
                />

                <TextInput
                    style={styles.input}
                    value={password}
                    placeholder='Enter password'
                    secureTextEntry
                    onChangeText={(text) => setPassword(text)}
                />

                <Button title='Login' onPress={() => login(email, password)} />

                <View style={styles.TextInput}>
                    <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                        <Text style={styles.link}>Register</Text>
                    </TouchableOpacity>
                    <Text>Don't have an account? </Text>
                </View>
            </View>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    TextInput: {
        flexDirection: 'row',
        justifyContent: "flex-end",
        marginTop: 20,
    },
    wrapper: {
        width: "80%",
    },
    input: {
        marginBottom: 12,
        borderWidth: 1,
        borderColor: "#bbb",
        borderRadius: 5,
        paddingHorizontal: 14,
    },
    link: {
        color: "blue",
    },
    ActivityIndicator: {
        marginVertical: 20,
        justifyContent: "center",
    },
})