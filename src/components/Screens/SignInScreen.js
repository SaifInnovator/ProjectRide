import React, { useState } from 'react'
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import CheckBox from '@react-native-community/checkbox'
import BackHeader from '../customizeComponents/BackHeader'

const SignInScreen = ({ navigation }) => {
    const [isSelected, setSelection] = useState(false)
    const [nameData, setNameData] = useState('')
    const [genderData, setGenderData] = useState('')

    const handleSignIn = () => {
        if (nameData.trim() === '' || genderData.trim() === '') {
            Alert.alert('Error', 'Please fill in both fields.');
            return;
        }
        navigation.navigate('BookingScreen');
    };

    return (
        <View style={styles.mainContainer}>
            <BackHeader />
            <View style={{ marginTop: 49 }}>
                <Text style={styles.title}>
                    Sign in
                </Text>
            </View>
            <View>
                <TextInput
                    style={styles.nameInput}
                    placeholder="Name"
                    value={nameData}
                    onChangeText={text => setNameData(text)}
                    placeholderTextColor="lightgray"
                />
                <TextInput
                    style={styles.genderInput}
                    placeholder="Gender"
                    value={genderData}
                    onChangeText={text => setGenderData(text)}
                    placeholderTextColor="lightgray"
                />
                <View style={styles.checkboxContainer}>
                    <CheckBox
                        value={isSelected}
                        onValueChange={setSelection}
                        tintColors={{ true: 'green', false: 'gray' }}
                    />
                    <Text style={styles.termsText}>
                        By signing up you agree to the <Text style={styles.linkText}>terms&conditions</Text> and <Text style={styles.linkText}>privacy policy</Text>
                    </Text>
                </View>
            </View>
            <TouchableOpacity
                onPress={handleSignIn}
                style={[styles.signInButton, !isSelected && styles.disabledButton]}
                disabled={!isSelected}
            >
                <Text style={styles.signInButtonText}>
                    Sign in
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
    },
    title: {
        fontSize: 25,
        color: 'black',
        fontWeight: '600',
        marginBottom: 20,
        marginHorizontal: 35,
        // textAlign: 'center',
    },
    nameInput: {
        borderWidth: 0.6,
        borderColor: 'darkorange',
        borderRadius: 9,
        marginHorizontal: 20,
        marginBottom: 24,
        padding: 10,
    },
    genderInput: {
        borderWidth: 0.6,
        borderColor: 'darkorange',
        borderRadius: 9,
        marginHorizontal: 20,
        marginBottom: 20,
        padding: 10,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10,
        marginBottom: 20,
    },
    termsText: {
        marginLeft: 6,
        fontSize: 15,
    },
    linkText: {
        color: 'darkorange',
    },
    signInButton: {
        backgroundColor: 'orange',
        borderRadius: 18,
        paddingVertical: 8,
        paddingHorizontal: 35,
        alignSelf: 'center',
    },
    disabledButton: {
        backgroundColor: 'lightgray',
    },
    signInButtonText: {
        color: 'white',
        fontWeight: '600',
        fontSize: 18,
    },
})

export default SignInScreen
