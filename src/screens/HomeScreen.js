import React, { useContext } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, Button } from 'react-native';
import { AuthContext } from '../Context/AuthContext';

const HomeScreen = () => {
    const { userInfo, isLoading, logout } = useContext(AuthContext);
    return (
        <View style={styles.container}>
            <ActivityIndicator animating={isLoading} size="large" />
            <Text style={styles.welcome}>Welcome{userInfo.name}</Text>
            <Button title='Logout' color="red" onPress={logout} />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    welcome: {
        fontSize: 18,
        marginBottom: 8,
    },
})