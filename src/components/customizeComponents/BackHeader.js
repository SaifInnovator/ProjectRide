// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import Entypo from 'react-native-vector-icons/Entypo';

// const { width, height } = Dimensions.get('window');

// const BackHeader = ({navigation,route}) => {
//   const handleBackPress = () => {
//     // Add custom back button functionality here
//     // For example, you can navigate to a specific screen or perform an action
//     if (navigation) {
//       navigation.goBack();
//     }else{
//       console.log('hgxxvvtyc')
//     }
//   };
//   return (
//     <SafeAreaView style={styles.container}>
//       <TouchableOpacity style={styles.buttonContainer} onPress={handleBackPress}>
//         <Entypo name="chevron-left" size={width * 0.08} color="#ff9900" />
//         <Text style={styles.backButtonText}>Back</Text>
//       </TouchableOpacity>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     paddingHorizontal: width * 0.04,
//     paddingVertical: height * 0.03,
//     alignItems:'center'
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     marginTop:1
//   },
//   backButtonText: {
//     color: 'darkorange',
//     fontSize: width * 0.052,
//     fontWeight:'600',
//   },
// });

// export default BackHeader;
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Entypo from 'react-native-vector-icons/Entypo';

const { width, height } = Dimensions.get('window');

const BackHeader = ({navigation}) => {

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.buttonContainer}  
        onPress={() => {
          navigation.goBack()
        }}>
        <Entypo name="chevron-left" size={width * 0.08} color="#ff9900" />
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: width * 0.04,
    paddingVertical: height * 0.03,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 1,
  },
  backButtonText: {
    color: 'darkorange',
    fontSize: width * 0.052,
    fontWeight: '600',
  },
});

export default BackHeader;