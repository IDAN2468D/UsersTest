import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MyCustomMarkerView = () => {
    return (
        <View style={styles.container}>
            <Text>MyCustomMarkerView</Text>
        </View>
    )
}

export default MyCustomMarkerView

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})