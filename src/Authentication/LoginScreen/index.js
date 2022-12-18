import React, { useState, useContext } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, ActivityIndicator, ScrollView } from 'react-native';
import Button from '../../Components/Button';
import { utils } from '../../utils';
import { AuthContext } from '../../Context/AuthContext';
import { colors, fonts } from '../../StyleGuide';
import LayoutScreen from '../LayoutScreen';
import FormInput from '../../Components/FormInput';
import Icon from 'react-native-vector-icons/Feather'

const LoginScreen = ({ navigation }) => {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [showPss, setShowPss] = useState(false)
    const { login, isLoading } = useContext(AuthContext);

    function isEnableSignInEmail() {
        return email != "" && emailError == "" && password != "" && passwordError == ""
    }

    return (
        <LayoutScreen label="Log In to your Account." SwipeUp="Swipe Up" onPress={() => navigation.navigate("Register")}>
            <View style={styles.container}>
                <FormInput
                    value={email}
                    errorMsg={emailError}
                    placeholder='Enter email'
                    onChangeText={(text) => setEmail(text)}
                    onChange={(value) => {
                        utils.validateEmail(value, setEmailError)
                        setEmail(value)
                    }}
                    inputStyle={{
                        fontWeight: 'bold',
                        textDecorationLine: "none"
                    }}
                    appendComponent={
                        <Text style={{ fontSize: 14 }}>Email OR UserName</Text>
                    }
                />
                <FormInput
                    value={password}
                    placeholder='Enter password'
                    secureTextEntry={!showPss}
                    errorMsg={passwordError}
                    onChangeText={(text) => setPassword(text)}
                    onChange={(value) => {
                        utils.validatePassword(value, setPasswordError)
                        setPassword(value)
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
                <View style={styles.TextInput}>
                    <TouchableOpacity onPress={() => console.log("Recover_Password?")}>
                        <Text style={{ fontFamily: fonts.ReenieBeanieRegular, color: colors.Blue }}>
                            Recover Password?
                        </Text>
                    </TouchableOpacity>
                </View>
                <Button
                    buttonText='Login'
                    onPress={() => login(email, password)}
                    disabled={isEnableSignInEmail() ? false : true}
                    containerStyle={{
                        flexDirection: "row",
                        justifyContent: 'center',
                        paddingVertical: 20,
                        borderRadius: 20,
                        backgroundColor: isEnableSignInEmail() ? colors.Blue : colors.GuidePink,
                    }}
                    StyleText={{
                        color: "white",
                        fontSize: 16,
                        fontWeight: 'bold',
                    }}
                />
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <ActivityIndicator animating={isLoading} size="large" />
                </View>
            </View>
        </LayoutScreen>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 36,
    },
    TextInput: {
        flexDirection: 'row',
        justifyContent: "flex-start",
        marginHorizontal: 10,
        marginVertical: 10,
    },
})