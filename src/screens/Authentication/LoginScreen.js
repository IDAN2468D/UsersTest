import React, { useState, useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ActivityIndicator, Dimensions, KeyboardAvoidingView, Platform } from 'react-native';
import { AuthContext } from '../../Context/AuthContext';
import { useNavigation } from '@react-navigation/native'
import FormInput from '../../Components/FormInput';
import { utils } from '../../utils';
import Button from '../../Components/Button';
import Icon from 'react-native-vector-icons/FontAwesome';
import SvgObject from "../../Components/SvgObject";
import LinearGradient from 'react-native-linear-gradient';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const LoginScreen = () => {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [showPss, setShowPss] = useState(false)
    const { login, isLoading } = useContext(AuthContext);
    const navigation = useNavigation();

    function isEnableSignInEmail() {
        return email != "" && emailError == "" && password != "" && passwordError == ""
    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "android" ? "padding" : "height"} style={styles.container}>
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.LinearGradient} />
            <View style={{ alignItems: 'center' }}>
                <SvgObject />
            </View>
            <View style={{ justifyContent: 'center', alignItems: "center" }}>
                <Text style={{ color: "black", fontSize: 30, fontWeight: 'bold', }}>Welcome Back</Text>
                <Text style={{ textAlign: "center", maxWidth: 300, color: "black", fontSize: 15, }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam maecenas mi non sed ut odio. Non, justo, sed facilisi et.
                </Text>
            </View>
            <View style={styles.wrapper}>
                <FormInput
                    placeholder="Username , Email"
                    autoCompleteType='email'
                    onChange={(value) => {
                        utils.validateEmail(value, setEmailError)
                        setEmail(value)
                    }}
                    inputStyle={{
                        fontWeight: 'bold',
                        textDecorationLine: "none"
                    }}
                    errorMsg={emailError}
                    appendComponent={
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                        >
                            <View style={{ marginHorizontal: 20 }}>
                                <Icon name="user" size={30} color="#22C7A9" />
                            </View>
                        </View>
                    }
                />
                <FormInput
                    placeholder="Password"
                    autoCompleteType="password"
                    secureTextEntry={showPss}
                    onChange={(value) => {
                        utils.validatePassword(value, setPasswordError)
                        setPassword(value)
                    }}
                    errorMsg={passwordError}
                    inputStyle={{
                        fontWeight: 'bold',
                        textDecorationLine: "none"
                    }}
                    prependComponent={
                        <TouchableOpacity onPress={() => setShowPss((prve) => !prve)} style={styles.showPss}>
                            <Icon name={showPss ? "eye-slash" : "eye"} size={30} color="black" />
                        </TouchableOpacity>
                    }
                    appendComponent={
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: 'center',
                            }}
                        >
                            <View style={{ marginHorizontal: 20 }}>
                                <Icon name="lock" size={30} color="#22C7A9" />
                            </View>
                        </View>
                    }
                />
                <View style={styles.TextInput}>
                    <TouchableOpacity onPress={() => navigation.navigate("ForgetPassword")}>
                        <Text style={{ fontSize: 15, color: "black", fontWeight: 'bold' }}>Forger Password?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                        <Text style={{ fontSize: 15, color: "white", fontWeight: 'bold' }}>Register</Text>
                    </TouchableOpacity>
                </View>
                <Button
                    buttonText="Login"
                    disabled={isEnableSignInEmail() ? false : true}
                    StyleText={{
                        fontSize: 15,
                    }}
                    containerStyle={{
                        paddingVertical: 20,
                        marginHorizontal: 60,
                        alignItems: "center",
                        marginTop: 30,
                        borderRadius: 30,
                        elevation: 8,
                        backgroundColor: isEnableSignInEmail() ? "#DFB497" : "blue",
                    }}
                    onPress={() => login(email, password)}
                />

            </View>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    TextInput: {
        flexDirection: 'row',
        justifyContent: "space-between",
        marginHorizontal: 40,
        marginTop: 20,
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
    LinearGradient: {
        position: "absolute",
        width: windowWidth,
        height: windowHeight,
    },
    showPss: {
        marginHorizontal: 5,
        justifyContent: 'center',
    }
})