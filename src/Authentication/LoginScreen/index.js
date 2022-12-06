import React, { useState, useContext } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import Button from '../../Components/Button'
import { AuthContext } from '../../Context/AuthContext';
import { colors, fonts } from '../../StyleGuide';
import LayoutScreen from '../LayoutScreen';

const LoginScreen = ({ navigation }) => {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const { login, isLoading } = useContext(AuthContext);

    return (
        <LayoutScreen label="Welcome Back!" Sub_label="Please, Log In.">
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

                    <Button
                        buttonText='Continue'
                        onPress={() => login(email, password)}
                        containerStyle={{
                            flexDirection: "row",
                            backgroundColor: "#78258B",
                            paddingHorizontal: 30,
                            paddingVertical: 20,
                            borderRadius: 30,
                        }}
                        StyleText={{
                            flex: 1,
                            color: "white",
                            fontSize: 16,
                            fontWeight: 'bold',
                        }}
                    />

                    <View style={styles.TextInput}>
                        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                            <Text style={styles.link}>Register</Text>
                        </TouchableOpacity>
                        <Text style={{ fontFamily: fonts.NablaRegularVariableFont, color: colors.Orenge }}>Don't have an account? </Text>
                    </View>
                </View>
            </View>
        </LayoutScreen>
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
        borderRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 22,
        backgroundColor: "white",
    },
    link: {
        color: "blue",
        fontWeight: "bold"
    },
    ActivityIndicator: {
        marginVertical: 20,
        justifyContent: "center",
    },
})