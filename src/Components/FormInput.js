import { StyleSheet, Text, View } from 'react-native';
import React from 'react'
import { TextInput } from 'react-native-gesture-handler';

const FormInput = ({
    containerStyle,
    placeholder,
    inputStyle,
    prependComponent,
    appendComponent,
    onChange,
    secureTextEntry,
    keyboardType = "default",
    autoCompleteType = "off",
    autoCapitalize = "none",
    errorMsg = ""
}) => {
    return (
        <View style={{ ...containerStyle }}>
            <View style={styles.ErorrText}>
                <Text style={styles.Text}>{errorMsg}</Text>
            </View>
            <View style={styles.TextInput}>
                {prependComponent}
                <TextInput
                    style={{
                        flex: 1,
                        ...inputStyle
                    }}
                    placeholder={placeholder}
                    placeholderTextColor="black"
                    secureTextEntry={secureTextEntry}
                    keyboardType={keyboardType}
                    autoCompleteType={autoCompleteType}
                    autoCapitalize={autoCapitalize}
                    onChangeText={(text) => onChange(text)}
                />
                {appendComponent}
            </View>
        </View>
    )
}

export default FormInput

const styles = StyleSheet.create({
    ErorrText: {
        flexDirection: 'row',
        justifyContent: "flex-end",
        marginHorizontal: 40,
        marginVertical: 2,
    },
    Text: {
        color: "red",
        fontWeight: "bold"
    },
    TextInput: {
        flexDirection: "row",
        paddingHorizontal: 10,
        marginHorizontal: 30,
        paddingVertical: 10,
        marginTop: 5,
        borderRadius: 20,
        opacity: 0.4,
        backgroundColor: "#fff",
    }
})