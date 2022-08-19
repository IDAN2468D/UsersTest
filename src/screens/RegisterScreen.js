import React, { useState, useContext } from 'react'
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import { AuthContext } from '../Context/AuthContext';

const RegisterScreen = ({ navigation }) => {

    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const { isLoading, register } = useContext(AuthContext);


    return (
        <View style={[styles.container, { backgroundColor: isLoading ? "rgba(0,0,0,0.2)" : "white", }]}>
            <View style={styles.ActivityIndicator}>
                <ActivityIndicator animating={isLoading} size="large" />
            </View>
            <View style={styles.wrapper} size={30}>
                <TextInput
                    style={styles.input}
                    value={name}
                    placeholder="Enter name"
                    onChangeText={text => setName(text)}
                />
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

                <Button title='Register'
                    onPress={() => {
                        register(name, email, password);
                    }}
                />

                <View style={styles.TextInput}>
                    <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                        <Text style={styles.link}>Login</Text>
                    </TouchableOpacity>
                    <Text>Don't have an account? </Text>
                </View>
            </View>
        </View>
    )
}

export default RegisterScreen

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