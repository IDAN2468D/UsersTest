import React from 'react';
import {
    StyleSheet,
    Text,
    SafeAreaView,
    TouchableWithoutFeedback,

    Dimensions
} from 'react-native';
import images from '../../StyleGuide/Image';
import { MotiView, MotiImage, View } from 'moti';
import LinearGradient from 'react-native-linear-gradient';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;


const Welcome = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.container}>
            <LinearGradient start={{ x: 5, y: 1 }} end={{ x: 5, y: 0 }} colors={['#00F5FF', '#0EFF79']} style={styles.linearGradient} />
            <MotiImage
                source={images.Shape}
                resizeMode="contain"
                style={{ width: windowWidth * 0.5, height: windowHeight * 0.5 }}
                from={{ opacity: 0, translateY: 50, scale: 0 }}
                animate={{ opacity: 1, translateY: 0, scale: 1 }}
                transition={{ delay: 200, type: "timing" }}
            />
            <TouchableWithoutFeedback onPress={() => navigation.navigate("SvgMax")}>
                <MotiView
                    from={{ opacity: 0, translateY: 50 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    transition={{ delay: 300, type: "timing" }}
                    style={[styles.button, { width: windowWidth * 0.8 }]}>
                    <Text onPress={() => navigation.navigate("Onboarding")} style={styles.textButton}>Get Started</Text>
                </MotiView>
            </TouchableWithoutFeedback>
            <View style={{ flexDirection: 'row', marginTop: 20, }}>
                <Text onPress={() => navigation.navigate("Login")}>Login</Text>
                <Text style={{ fontSize: 14 }}>Already have an account? </Text>
            </View>
        </SafeAreaView>
    )
}

export default Welcome

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
    },
    title: {
        textAlign: "center",
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
        color: "black"
    },
    text: {
        textAlign: "center",
        marginHorizontal: 35,
        color: "black",
        lineHeight: 20
    },
    button: {
        backgroundColor: "#FEFF",
        padding: 20,
        borderRadius: 30,
        alignItems: 'center',
    },
    textButton: {
        fontSize: 16,
        fontWeight: '600',
        color: "black"
    },
    linearGradient: {
        position: "absolute",
        width: windowWidth,
        height: windowHeight,
    }
})