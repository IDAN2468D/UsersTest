import React from 'react';
import {
    StyleSheet,
    Text,
    SafeAreaView,
    TouchableWithoutFeedback,
    useWindowDimensions
} from 'react-native';
import images from '../../StyleGuide/Image';
import { MotiView, MotiImage } from 'moti';


const Welcome = ({ navigation }) => {
    const { width } = useWindowDimensions();
    return (
        <SafeAreaView style={styles.container}>
            <MotiImage
                source={images.icBike}
                style={{ width: width * 0.8, height: width * 0.8 }}
                from={{ opacity: 0, translateY: 50, scale: 0 }}
                animate={{ opacity: 1, translateY: 0, scale: 1 }}
                transition={{ delay: 100, type: "timing" }}
            />
            <MotiView
                from={{ opacity: 0, translateY: 50 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ delay: 200, type: "timing" }}
            >
                <Text style={styles.title}>Taskstream-TK20</Text>
                <Text style={styles.text}>
                    In 2017, LiveText joined forces with Taskstream-Tk20.
                    The Companies are now united under a new name: Watermark.
                    Learn about Watermark's mission to empower educators and students
                    with better data for learning.
                </Text>
            </MotiView>
            <TouchableWithoutFeedback onPress={() => navigation.navigate("SvgMax")}>
                <MotiView
                    from={{ opacity: 0, translateY: 50 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    transition={{ delay: 300, type: "timing" }}
                    style={[styles.button, { width: width * 0.8 }]}>
                    <Text onPress={() => navigation.navigate("Onboarding")} style={styles.textButton}>Get Started</Text>
                </MotiView>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    )
}

export default Welcome

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-around",
        alignItems: 'center',
        backgroundColor: "#F8E9B0",
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
        backgroundColor: "#FEC520",
        padding: 20,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textButton: {
        fontSize: 16,
        fontWeight: '600',
        color: "black"
    }
})