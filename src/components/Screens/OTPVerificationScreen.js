// import React, { useRef } from 'react';
// import { SafeAreaView, Text, Dimensions, StyleSheet, Image, TouchableOpacity ,View} from 'react-native';
// import OTPTextInput from 'react-native-otp-textinput';
// import BackHeader from '../customizeComponents/BackHeader';

// const { width, height } = Dimensions.get('window');

// const OTPVerificationScreen = ({navigation}) => {
//     const otpInputRef = useRef(null);


//   const handlePress =()=>{
//     navigation.navigate ('NumLoginScreen')
//   }  

//     // const handleNextPress = () => {
//     //     const otp = otpInputRef.current?.getValue();
//     //     console.log('Complete OTP code:', otp);
//     // };

//     return (
//         <SafeAreaView style={styles.MainConatiner}>
//             <BackHeader navigation={navigation} onPress={handlePress}/>
//             <View style={styles.contentContainer}>
//                 <Image source={require('../assets/Images/OTPsecurity.png')} style={styles.otpImage} />
//                 <Text style={styles.otpText}>OTP verification</Text>
//                 <OTPTextInput
//                     ref={otpInputRef}
//                     inputCount={4}
//                     tintColor="darkorange"
//                     offTintColor="gray"
//                     containerStyle={styles.otpContainer}
//                     textInputStyle={styles.otpInput}
//                 />
//                 <TouchableOpacity style={styles.nextButton}>
//                     <Text style={styles.nextButtonText}>Next</Text>
//                 </TouchableOpacity>
//             </View>
//         </SafeAreaView>
//     );
// };

// const styles = StyleSheet.create({
//     MainConatiner: {
//         flex: 1,
//         backgroundColor: '#fff',
//     },
//     contentContainer: {
//         justifyContent: 'center',
//         alignItems: 'center',
//         // padding: 20,
//     },
//     otpImage: {
//         height: height * 0.3,
//         width: width * 0.45,
//         margin: 8,
//     },
//     otpText: {
//         fontWeight: '600',
//         fontSize: 26,
//         color: 'black',
//     },
//     otpContainer: {
//         marginVertical: 20,
//     },
//     otpInput: {
//         borderWidth: 1,
//         borderColor: 'orange',
//         borderRadius: 5,
//         width: 45,
//         height: 45,
//         textAlign: 'center',
//         fontSize: 18,
//         color: '#000',
//     },
//     nextButton: {
//         backgroundColor: 'orange',
//         borderRadius: 19,
//         paddingVertical:5,
//         paddingHorizontal: 27,
//         // marginTop: 20,
//     },
//     nextButtonText: {
//         color: 'white',
//         fontWeight: '600',
//         fontSize: 18,
//     },
// });

// export default OTPVerificationScreen;


// import React, { useRef, useState } from 'react';
// import { SafeAreaView, Text, Dimensions, StyleSheet, Image, TouchableOpacity, View, TextInput, Alert } from 'react-native';
// import OTPTextInput from 'react-native-otp-textinput';
// import BackHeader from '../customizeComponents/BackHeader';

// const { width, height } = Dimensions.get('window');

// const OTPVerificationScreen = ({ navigation,route }) => {
//   const { confirmation } = route.params;
//   const otpInputRef = useRef(null);
//   const [code, setCode] = useState('');

//   const handlePress = () => {
//     navigation.navigate('NumLoginScreen');
//   };

//   const confirmCode = async () => {
//     try {
//       await confirmation.confirm(code);
//       navigation.navigate('SignInScreen');
//     } catch (error) {
//       Alert.alert('Error', 'Invalid code.');
//     }
//   };

//   return (
//     <SafeAreaView style={styles.MainConatiner}>
//       <BackHeader navigation={navigation} onPress={handlePress} />
//       <View style={styles.contentContainer}>
//         <Image source={require('../assets/Images/OTPsecurity.png')} style={styles.otpImage} />
//         <Text style={styles.otpText}>OTP verification</Text>
//         <OTPTextInput
//           ref={otpInputRef}
//           inputCount={6}
//           tintColor="darkorange"
//           offTintColor="gray"
//           containerStyle={styles.otpContainer}
//           textInputStyle={styles.otpInput}
//           handleTextChange={setCode}
//         />
//         <TouchableOpacity style={styles.nextButton} onPress={confirmCode}>
//           <Text style={styles.nextButtonText}>Next</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   MainConatiner: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   contentContainer: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     // padding: 20,
//   },
//   otpImage: {
//     height: height * 0.3,
//     width: width * 0.45,
//     margin: 8,
//   },
//   otpText: {
//     fontWeight: '600',
//     fontSize: 26,
//     color: 'black',
//   },
//   otpContainer: {
//     marginVertical: 20,
//   },
//   otpInput: {
//     borderWidth: 1,
//     borderColor: 'orange',
//     borderRadius: 5,
//     width: 45,
//     height: 45,
//     textAlign: 'center',
//     fontSize: 18,
//     color: '#000',
//   },
//   nextButton: {
//     backgroundColor: 'orange',
//     borderRadius: 19,
//     paddingVertical: 5,
//     paddingHorizontal: 27,
//     // marginTop: 20,
//   },
//   nextButtonText: {
//     color: 'white',
//     fontWeight: '600',
//     fontSize: 18,
//   },
// });

// export default OTPVerificationScreen;

import React, { useRef, useState } from 'react';
import { 
  SafeAreaView, 
  Text, 
  Dimensions, 
  StyleSheet, 
  Image, 
  TouchableOpacity, 
  View, 
  Alert,
  ActivityIndicator
} from 'react-native';
import OTPTextInput from 'react-native-otp-textinput';
import BackHeader from '../customizeComponents/BackHeader';

const { width, height } = Dimensions.get('window');
const OTP_LENGTH = 6;

const OTPVerificationScreen = ({ navigation, route }) => {
  const { confirmation } = route.params;
  const otpInputRef = useRef(null);
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handlePress = () => {
    navigation.navigate('NumLoginScreen');
  };

  const confirmCode = async () => {
    if (code.length !== OTP_LENGTH) {
      setError(`Please enter a ${OTP_LENGTH}-digit OTP`);
      return;
    }

    setError('');
    setLoading(true);

    try {
      await confirmation.confirm(code);
      navigation.navigate('SignInScreen');
    } catch (error) {
      setError('Invalid code. Please try again.');
      Alert.alert('Error', 'Invalid code.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.MainConatiner}>
      <BackHeader navigation={navigation} onPress={handlePress} />
      <View style={styles.contentContainer}>
        <Image source={require('../assets/Images/OTPsecurity.png')} style={styles.otpImage} />
        <Text style={styles.otpText}>OTP verification</Text>
        <OTPTextInput
          ref={otpInputRef}
          inputCount={OTP_LENGTH}
          tintColor="darkorange"
          offTintColor="gray"
          containerStyle={styles.otpContainer}
          textInputStyle={styles.otpInput}
          handleTextChange={setCode}
        />
        {error !== '' && <Text style={styles.errorText}>{error}</Text>}
        {loading ? (
          <ActivityIndicator size="large" color="orange" />
        ) : (
          <TouchableOpacity style={styles.nextButton} onPress={confirmCode}>
            <Text style={styles.nextButtonText}>Next</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  MainConatiner: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  otpImage: {
    height: height * 0.3,
    width: width * 0.45,
  },
  otpText: {
    fontWeight: '600',
    fontSize: 26,
    color: 'black',
    marginBottom: 20,
  },
  otpContainer: {
    // marginVertical: 18,
  },
  otpInput: {
    borderWidth: 1,
    borderColor: 'orange',
    borderRadius: 5,
    width: 45,
    height: 45,
    textAlign: 'center',
    fontSize: 18,
    color: '#000',
  },
  nextButton: {
    backgroundColor: 'orange',
    borderRadius: 19,
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginTop: 20,
  },
  nextButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 18,
  },
  errorText: {
    color: 'red',
    marginTop: 10,
    marginBottom: 10,
  },
});

export default OTPVerificationScreen;