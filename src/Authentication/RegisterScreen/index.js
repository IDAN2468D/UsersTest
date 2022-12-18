import React, { useState, useContext } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import { AuthContext } from '../../Context/AuthContext';
import Button from '../../Components/Button'
import { LayoutScreen } from '../index';
import FormInput from '../../Components/FormInput';
import Icon from 'react-native-vector-icons/Feather';
import { colors, fonts } from '../../StyleGuide';
import { utils } from '../../utils';



const RegisterScreen = ({ navigation }) => {

    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [nameError, setNameError] = useState("");
    const [pass, setPass] = useState(null);
    const [emailError, setEmailError] = useState("");
    const [showPss, setShowPss] = useState(false)
    const [passwordError, setPasswordError] = useState("");
    const { register } = useContext(AuthContext);

    function isEnableSignInEmail() {
        return email != "" && emailError == "" && name != "" && nameError == "" && pass != "" && passwordError == ""
    }


    return (
        <LayoutScreen label="Create your Account" SwipeUp="LogIn" onPress={() => navigation.navigate("Login")}>
            <View style={styles.container}>
                <FormInput
                    value={email}
                    errorMsg={emailError}
                    placeholder='Enter email'
                    onChangeText={text => setEmail(text)}
                    onChange={(value) => {
                        utils.validateEmail(value, setEmailError)
                        setEmail(value)
                    }}
                    inputStyle={{
                        fontWeight: 'bold',
                        textDecorationLine: "none"
                    }}
                    appendComponent={
                        <Text style={{ fontSize: 14 }}>Email Address</Text>
                    }
                />
                <FormInput
                    value={name}
                    errorMsg={nameError}
                    placeholder='Enter Name'
                    onChangeText={text => setName(text)}
                    onChange={(value) => {
                        utils.validateName(value, setNameError)
                        setName(value)
                    }}
                    inputStyle={{
                        fontWeight: 'bold',
                        textDecorationLine: "none"
                    }}
                    appendComponent={
                        <Text style={{ fontSize: 14 }}>User Name</Text>
                    }
                />

                <FormInput
                    value={pass}
                    placeholder='Enter password'
                    secureTextEntry={!showPss}
                    errorMsg={passwordError}
                    onChangeText={text => setPass(text)}
                    onChange={(value) => {
                        utils.validatePassword(value, setPasswordError)
                        setPass(value)
                    }}
                    inputStyle={{
                        fontWeight: 'bold',
                        textDecorationLine: "none"
                    }}
                    appendComponent={
                        <Text style={{ fontSize: 14 }}>Password</Text>
                    }
                    prependComponent={
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: 'center',
                            }}
                        >
                            <TouchableOpacity onPress={() => setShowPss(!showPss)} style={{ justifyContent: 'center', }}>
                                <Icon name={showPss === false ? "eye-off" : "eye"} size={26} color={colors.Blue} />
                            </TouchableOpacity>
                        </View>
                    }
                />
                <Button
                    buttonText='SingUp'
                    onPress={() => register(name, email, pass)}
                    disabled={isEnableSignInEmail() ? false : true}
                    containerStyle={{
                        flexDirection: "row",
                        marginVertical: 25,
                        paddingHorizontal: 40,
                        paddingVertical: 20,
                        borderRadius: 20,
                        backgroundColor: isEnableSignInEmail() ? colors.Blue : colors.GuidePink,
                    }}
                    StyleText={{
                        color: "white",
                        fontSize: 16,
                        fontWeight: 'bold',
                        marginHorizontal: 75,
                    }}
                />
            </View>
        </LayoutScreen>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 30,
    },
    TextInput: {
        flexDirection: 'row',
        justifyContent: "flex-start",
        marginHorizontal: 10,
        marginVertical: 10,
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