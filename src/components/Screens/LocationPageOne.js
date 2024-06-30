import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker, UrlTile } from 'react-native-maps';
import BookingScreen from '../components/BookingScreen';

const LocationPageOne = () => {
  const initialRegion = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  };

  const markers = [
    {
      key: 'bike',
      title: 'Bike Booking',
      description: 'Book a bike ride',
      coordinate: {
        latitude: 37.78825,
        longitude: -122.4324,
      },
    },
    {
      key: 'auto',
      title: 'Auto Booking',
      description: 'Book an auto ride',
      coordinate: {
        latitude: 37.78925,
        longitude: -122.4334,
      },
    },
  ];

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={initialRegion}
      >
        <UrlTile
          urlTemplate="http://c.tile.openstreetmap.org/{z}/{x}/{y}.png"
          maximumZ={19}
        />
        {markers.map((marker) => (
          <Marker
            key={marker.key}
            title={marker.title}
            description={marker.description}
            coordinate={marker.coordinate}
          />
        ))}
      </MapView>
      <BookingScreen/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default LocationPageOne;
