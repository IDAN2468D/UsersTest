import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import { image } from '../../StyleGuide';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function Dots({ selected }) {
    let backgroundColor;

    backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';

    return (
        <View
            style={{
                width: 6,
                height: 6,
                marginHorizontal: 3,
                backgroundColor
            }}
        />
    )
}

function Skip({ ...props }) {
    return (
        <TouchableOpacity style={{ marginHorizontal: 10, }} {...props}>
            <Text style={{ fontSize: 16 }}>Skip</Text>
        </TouchableOpacity>
    )
}

function Next({ ...props }) {
    return (
        <TouchableOpacity style={{ marginHorizontal: 10, }} {...props}>
            <Text style={{ fontSize: 16 }}>Next</Text>
        </TouchableOpacity>
    )
}

function Done({ ...props }) {
    return (
        <TouchableOpacity style={{ marginHorizontal: 10, }} {...props}>
            <Text style={{ fontSize: 16 }}>Done</Text>
        </TouchableOpacity>
    )
}

const onboarding = ({ navigation }) => {
    return (
        <Onboarding
            style={styles.container}
            SkipButtonComponent={Skip}
            NextButtonComponent={Next}
            DoneButtonComponent={Done}
            onSkip={() => navigation.navigate("Login")}
            onDone={() => navigation.navigate("Login")}
            DotComponent={Dots}
            pages={[
                {
                    backgroundColor: "#fff",
                    image: <Image source={image.ManLogo} resizeMode="contain" style={{ width: windowWidth }} />,
                    title: 'Connect to the World',
                    subtitle: 'A New with React Native Onboarding Swiper',
                },
                {
                    backgroundColor: "red",
                    image: <Image source={image.ManLogo} resizeMode="contain" style={{ width: windowWidth }} />,
                    title: 'Share Your Favorites',
                    subtitle: 'Share Your Thoughts With Similar Kind of People',
                },
                {
                    backgroundColor: "red",
                    image: <Image source={image.ManLogo} resizeMode="contain" style={{ width: windowWidth }} />,
                    title: 'Become The Star',
                    subtitle: 'Let The Spot Light Capture You',
                }
            ]}

        />
    )
}

export default onboarding

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})