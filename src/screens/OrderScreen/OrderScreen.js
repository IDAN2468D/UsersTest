import React, { useState } from 'react';
import MapView, { PROVIDER_GOOGLE, Polyline, Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, Platform, Pressable, Animated, Image, Modal } from 'react-native';
import { GOOGLE_API_KEY } from '../../../environments';
import CustomMarker from '../../Components/CustomMarker';
import { locations } from '../../Data/Data';


export default function App() {


    const [origen, setOrigen] = useState({
        latitude: 33.640411,
        longitude: -84.419853,
    })

    const [destination, setDestination] = useState({
        latitude: 33.753746,
        longitude: -84.386330,
    })

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: origen.latitude,
                    longitude: origen.longitude,
                    latitudeDelta: 0.09,
                    longitudeDelta: 0.04
                }}
            >
                <Marker
                    draggable
                    coordinate={origen}
                    onDragEnd={(directims) => setOrigen(directims.nativeEvent.coordinate)}
                />
                <Marker
                    draggable
                    coordinate={destination}
                    onDragEnd={(direction) => setDestination(direction.nativeEvent.coordinate)}
                />
                {locations.map(marker => (
                    <Marker
                        coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
                        title={marker.title}
                    >
                        <CustomMarker item={marker} color={marker.color} />
                    </Marker>
                ))}
            </MapView>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});