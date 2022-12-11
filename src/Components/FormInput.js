import { StyleSheet, Text, View } from 'react-native';
import React from 'react'
import { TextInput } from 'react-native-gesture-handler';

const FormInput = ({
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
        <>
            <View style={styles.ErorrText}>
                <Text style={styles.Text}>{errorMsg}</Text>
                {appendComponent}
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
            </View>
        </>
    )
}

export default FormInput

const styles = StyleSheet.create({
    ErorrText: {
        flexDirection: 'row',
        justifyContent: "space-between",
        marginVertical: 10,
        marginHorizontal: 10,
    },
    Text: {
        fontSize: 12,
        color: "red",
        fontWeight: "bold"
    },
    TextInput: {
        flexDirection: "row",
        paddingVertical: 5,
        marginTop: 5,
        opacity: 0.4,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 20,
        paddingHorizontal: 20
    }
})