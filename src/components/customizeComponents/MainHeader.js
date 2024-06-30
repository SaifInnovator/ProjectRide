import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { flingGestureHandlerProps } from 'react-native-gesture-handler/lib/typescript/handlers/FlingGestureHandler';
import Icon from 'react-native-vector-icons/FontAwesome';
import MenuPage from '../Screens/MenuPage';

const { width } = Dimensions.get('window');
const MainHeader = ({ navigation }) => {


  const handleMenuPress = () => {
    navigation.navigate('MenuPage')
  }
  return (
    <View Style={{ flex: 1 }}>
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
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default MainHeader;