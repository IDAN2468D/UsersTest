import React, { useState, useEffect } from 'react';
import { StyleSheet, ActivityIndicator, LogBox, Text, Dimensions, View, Modal, Button, Pressable } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Callout, Circle } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_API_KEY } from '../../../environments';
import MyCustomMarkerView from '../../Components/MyCustomMarkerView';
import { locations } from '../../Data/Data';
import CustomMarker from '../../Components/CustomMarker';


LogBox.ignoreLogs(['new NativeEventEmitter']);
LogBox.ignoreAllLogs();

const initialState = {
    latitude: null,
    longitude: null,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.421
}

const homePlace = {
    description: 'Home',
    geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
};

const workPlace = {
    description: 'Work',
    geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
};

const BagScreen = () => {
    const [curentPosition, setCurentPosition] = useState(initialState);

    useEffect(() => {
        Geolocation.getCurrentPosition(position => {
            const { longitude, latitude } = position.coords;
            setCurentPosition({
                ...curentPosition,
                latitude,
                longitude
            })

        },
            error => alert(error.message),
            { timeout: 2000, maximumAge: 1000 }
        )
    }, [])

    const [pin, setPin] = useState({
        latitude: 37.78825,
        longitude: -122.4324
    })
    const [region, setRegion] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    })


    return curentPosition.latitude ? (
        <View>
            <GooglePlacesAutocomplete
                placeholder='Search'
                fetchDetails={true}
                GooglePlacesSearchQuery={{
                    rankby: "distance"
                }}
                onPress={(data, details = null) => {
                    console.log(data, details);
                    setRegion({
                        latitude: details.geometry.location.lat,
                        longitude: details.geometry.location.lng,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421
                    })
                }}
                textInputProps={{

                    leftIcon: { type: 'font-awesome', name: 'chevron-left' },
                    errorStyle: { color: 'red' },
                }}
                query={{
                    key: GOOGLE_API_KEY,
                    language: 'en',
                    location: `${region.latitude},${region.longitude}`
                }}
                autoFocus={false}
                returnKeyType={'default'}
                minLength={2}
                styles={{
                    container: { position: "absolute", width: 350, zIndex: 1, marginHorizontal: 30, marginVertical: 60 },
                    listView: { backgroundColor: "white" },
                    textInput: {
                        height: 38,
                        color: '#5d5d5d',
                        fontSize: 16,
                    },
                    predefinedPlacesDescription: {
                        color: '#1faadb',
                    },
                }}
                currentLocation={true}
                currentLocationLabel='Current location'
                predefinedPlaces={[homePlace, workPlace]}
            />
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                initialRegion={curentPosition}
                showsUserLocation
            >
                <Marker coordinate={{ latitude: region.latitude, longitude: region.longitude }}></Marker>
                <Marker
                    coordinate={pin}
                    pinColor="black"
                    draggable={true}
                    onDragEnd={(e) => {
                        setPin({
                            latitude: e.nativeEvent.coordinate.latitude,
                            longitude: e.nativeEvent.coordinate.longitude
                        })
                    }}

                >
                    <Callout>
                        <MyCustomMarkerView {...region} />
                    </Callout>
                </Marker>
                {locations.map(marker => (
                    <Marker
                        coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
                        title={marker.title}
                    >
                        <CustomMarker item={marker} />
                    </Marker>
                ))}
                <Circle
                    center={pin}
                    radius={2000}
                />
            </MapView>
        </View>
    ) : <ActivityIndicator style={{ flex: 1 }} animating size="large" />
}


export default BagScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
    }
})