import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CategoryText = ({ item }) => {
    return (
        <View>
            <Text>{item.home}</Text>
        </View>
    )
}

export default CategoryText

const styles = StyleSheet.create({})