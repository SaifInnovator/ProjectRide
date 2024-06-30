import React, { useState } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Alert,
  ActivityIndicator,
} from 'react-native';
import BackHeader from '../customizeComponents/BackHeader';
import auth from '@react-native-firebase/auth';

const { width, height } = Dimensions.get('window');

const NumLoginScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loading, setLoading] = useState(false);

  const handlePress = () => {
    navigation.navigate('WelcomeScreen');
  };

  const isValidPhoneNumber = (number) => {
    const phoneRegex = /^[6-9]\d{9}$/;  // Basic Indian mobile number regex
    return phoneRegex.test(number);
  };

  const signInWithPhoneNumber = async (phoneNumber) => {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      navigation.navigate('OTPVerificationScreen', { confirmation });
    } catch (error) {
      Alert.alert('Error', `Failed to sign in: ${error.message}`);
    }
  };

  const handleVerifyOtp = async () => {
    if (isValidPhoneNumber(phoneNumber)) {
      setLoading(true);
      try {
        await signInWithPhoneNumber(`+91${phoneNumber}`);
      } finally {
        setLoading(false);
      }
    } else {
      Alert.alert('Invalid Number', 'Please enter a valid 10-digit phone number');
    }
  };

  return (
    <View style={styles.container}>
      <BackHeader navigation={navigation} onPress={handlePress} />
      <View style={styles.contentContainer}>
        <View style={styles.titleBikeContainer}>
          <Text style={styles.welcomeTitle}>Welcome</Text>
          <Image
            source={require('../assets/Images/Bike.png')}
            style={styles.bikeImage}
          />
        </View>
        <Text style={styles.sloganText}>
          The fastest app to book a bike-taxi online near by you
        </Text>
        <Text style={styles.titleNumber}>Enter phone number</Text>
        <TextInput
          placeholder='Phone Number'
          placeholderTextColor={'grey'}
          maxLength={10}
          keyboardType='numeric'
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          style={styles.textInput}
        />
      </View>
      <View style={styles.buttonContainer}>
        {loading ? (
          <ActivityIndicator size="large" color="#ff9900" />
        ) : (
          <TouchableOpacity
            style={styles.touchableContainerStyle}
            onPress={handleVerifyOtp}
          >
            <Text style={styles.otpButtonText}>Verify OTP</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  contentContainer: {
    marginHorizontal: 28,
    marginVertical: 17
  },
  titleBikeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12
  },
  welcomeTitle: {
    fontStyle: 'italic',
    fontWeight: '200',
    fontSize: 22,
    marginRight: 6
  },
  bikeImage: {
    height: height * 0.047,
    width: width * 0.1
  },
  sloganText: {
    color: 'darkgrey',
    fontSize: 15,
    marginVertical: 16
  },
  titleNumber: {
    color: 'darkorange',
    fontSize: 16,
    fontWeight: '500',
    marginVertical: 10
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'darkorange',
    padding: 13,
    fontSize: 15,
    borderRadius: 10,
    backgroundColor: '#fff'
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 14
  },
  touchableContainerStyle: {
    paddingHorizontal: 32,
    backgroundColor: '#ff9900',
    borderRadius: 20,
    paddingVertical: 10,
  },
  otpButtonText: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold'
  },
});

export default NumLoginScreen;