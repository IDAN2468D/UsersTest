import React, { useState, useContext } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import { AuthContext } from '../../Context/AuthContext';
import Button from '../../Components/Button'


const RegisterScreen = ({ navigation }) => {

    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const { isLoading, register } = useContext(AuthContext);


    return (
        <View style={[styles.container, { backgroundColor: isLoading ? "rgba(0,0,0,0.2)" : "white" }]}>
            <View style={styles.ActivityIndicator}>
                <ActivityIndicator animating={isLoading} size="large" />
            </View>
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
            <Button buttonText='Register'
                onPress={() => {
                    register(name, email, password);
                }}
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
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                    <Text style={styles.link}>Login</Text>
                </TouchableOpacity>
                <Text>Don't have an account? </Text>
            </View>
        </View>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 30,
        justifyContent: 'center',
    },
    TextInput: {
        flexDirection: 'row',
        justifyContent: "flex-end",
        marginTop: 20,
        marginHorizontal: 15,
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
    },
    ActivityIndicator: {
        marginVertical: 20,
        justifyContent: "center",
    },
})