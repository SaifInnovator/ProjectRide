import React from "react";
import { Image, Text, View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'

const { width, height } = Dimensions.get('window');

const WelcomeScreen = ({ navigation }) => {
    return (
        <View style={{flex: 1,}}>
            <View style={styles.mainContainer}>
                <Image source={require('../assets/Images/OnlineTaxi.png')}
                    style={styles.OnlineTaxiImageStyle} />
                <Text style={styles.textstyle}>
                    Welcome
                </Text>
                <Text style={styles.sloganTextStyle}>
                    Enjoy the ride Share the better experience
                </Text>
                <TouchableOpacity style={styles.TouchableConatinerStyle}
                onPress={() => navigation.navigate('NumLoginScreen')}>
                    <Text style={styles.GoButtonText}>
                        Go
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    OnlineTaxiImageStyle: {
        width: width * 0.8,
        height: height * 0.43,
        resizeMode: 'contain',
    },
    textstyle: {
        color: 'black',
        fontWeight: "bold",
        fontSize: 28,
    },
    sloganTextStyle: {
        color: 'grey',
        padding:12
    },
    TouchableConatinerStyle: {
        paddingHorizontal: 32,
        backgroundColor: "#ff9900",
        borderRadius: 20,
        paddingVertical:7
    },
    GoButtonText: {
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold'
    }
})
export default WelcomeScreen