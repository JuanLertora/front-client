import React from 'react'
import { StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';

function Map(params) {
    return (
        <View>
            <MapView style={styles.map}
                region={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: '100%'
    }
})

export default Map