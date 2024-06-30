import React, { useRef, useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, Button, ScrollView, Dimensions } from 'react-native';
import BottomSheet from 'react-native-simple-bottom-sheet';
import MapView from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome';


const { width } = Dimensions.get('window');

const BookingScreen = ({navigation}) => {
  const bottomSheetRef = useRef(null);
 
  const handleMenuPress = () => {
    navigation.navigate('MenuPage')
  }
  return (
    <View style={styles.container}>
       <View style={styles.header}>
        <TouchableOpacity style={styles.menuIconContainer}
          onPress={handleMenuPress}>
          <Icon name="bars" size={20} color="#000" />
        </TouchableOpacity>
        <View style={styles.locationContainer}>
          <TextInput
            style={styles.locationInput}
            placeholder="Your Current location"
            placeholderTextColor="grey"
          />
          <TouchableOpacity style={styles.heartIconContainer}>
            <Icon name="heart-o" size={20} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 26.8467,
          longitude: 80.9462,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {/* Add markers or other map elements here */}
      </MapView>

      <BottomSheet
        ref={bottomSheetRef}
        isOpen={true} // Open the bottom sheet by default
        sliderMinHeight={0}
        sliderMaxHeight={'47%'} // Adjust the maximum height as needed
      >
        <ScrollView contentContainerStyle={styles.sheetContent}>
          {/* Search Bar */}
          <View style={styles.searchBar}>
            <Image
              source={require('../assets/Images/Search.gif.png')}
              style={styles.searchIcon}
            />
            <TextInput style={styles.searchInput} placeholder="Where you want to go?" />
          </View>



          {/* Transport Options */}
          {/* <View style={styles.transportOptions}>
            <TouchableOpacity style={styles.transportOption}>
              <Image source={require('../assets/Images/Bike.png')} style={styles.transportIcon} />
              <Text style={styles.transportText}>Bike</Text>
              <Text style={styles.priceRange}>₹ 80 - ₹ 100</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.transportOption}>
              <Image source={require('../assets/Images/AutoRickshaw.png')} style={styles.transportIcon} />
              <Text style={styles.transportText}>Auto</Text>
              <Text style={styles.priceRange}>₹ 100 - ₹ 150</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.transportOption}>
              <Image source={require('../assets/Images/CarCab.png')} style={styles.transportIcon} />
              <Text style={styles.transportText}>Cab</Text>
              <Text style={styles.priceRange}>₹ 200 - ₹ 350</Text>
            </TouchableOpacity>
          </View> */}
          <Button title="Confirm Booking" />
        </ScrollView>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  menuIconContainer: {
    paddingHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 30,
    padding: 7,
    borderColor: 'lightgrey',
    borderWidth: 1,

  },
  locationContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 33,
    marginLeft: 16,
    paddingHorizontal: 15,
    borderColor: 'lightgrey',
    borderWidth: 1,
  },
  locationInput: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  heartIconContainer: {
    padding: 8,
  },
  sheetContent: {
    padding: 16,
  },
  sheetTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  searchBar: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexDirection: 'row',
    marginBottom: 16,
  },
  searchInput: {
    fontSize: 16,
  },
  searchIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  suggestions: {
    marginBottom: 16,
  },
  suggestionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  suggestionText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subText: {
    color: '#888',
  },
  icon: {
    width: 24,
    height: 24,
  },
  transportOptions: {
    marginBottom: 16,
  },
  transportOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    marginBottom: 8,
  },
  transportIcon: {
    width: 40,
    height: 40,
  },
  transportText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  priceRange: {
    fontSize: 16,
    color: '#888',
  },
});

export default BookingScreen;



// export default BookingScreen;
// import  React from 'react';
// import { StyleSheet, Text, View, Button } from 'react-native';
// import Animated from 'react-native-reanimated';
// import BottomSheet from 'reanimated-bottom-sheet';
 
// export default function App() {
//   const renderContent = () => (
//     <View
//       style={{
//         backgroundColor: 'white',
//         padding: 16,
//         height: 450,
//       }}
//     >
//       <Text>Swipe down to close</Text>
//     </View>
//   );
 
//   const sheetRef = React.useRef(null);
 
//   return (
//     <>
//       <View
//         style={{
//           flex: 1,
//           backgroundColor: 'papayawhip',
//           alignItems: 'center',
//           justifyContent: 'center',
//         }}
//       >
//         <Button
//           title="Open Bottom Sheet"
//           onPress={() => sheetRef.current.snapTo(0)}
//         />
//       </View>
//       <BottomSheet
//         ref={sheetRef}
//         snapPoints={[450, 300, 0]}
//         borderRadius={10}
//         renderContent={renderContent}
//       />
//     </>
//   );
// }
