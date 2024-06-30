import React, { useState, useEffect } from 'react';
import { Button, Text, TextInput, TouchableOpacity, View } from 'react-native';
import auth from '@react-native-firebase/auth';

function Firebase() {
    // If null, no SMS has been sent
    const [confirm, setConfirm] = useState(null);

    // verification code (OTP - One-Time-Passcode)
    const [code, setCode] = useState('');

    // Handle login
    function onAuthStateChanged(user) {
        if (user) {
            // Some Android devices can automatically process the verification code (OTP) message, and the user would NOT need to enter the code.
            // Actually, if he/she tries to enter it, he/she will get an error message because the code was already used in the background.
            // In this function, make sure you hide the component(s) for entering the code and/or navigate away from this screen.
            // It is also recommended to display a message to the user informing him/her that he/she has successfully logged in.
        }
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    // Handle the button press
    const signInWithPhoneNumber = async (phoneNumber) => {
        const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
        setConfirm(confirmation);
    }

    const confirmCode = async () => {
        try {
            const res = await confirm.confirm(code);
            console.log(res)
        } catch (error) {
            console.log('Invalid code.');
        }
    }

    if (!confirm) {
        return (
            <View>
                <TouchableOpacity style={{
                    width: 250,
                    height: 50,
                    justifyContent: 'center',
                    borderWidth: 0.5,
                    alignSelf: 'center',
                    marginTop: 100,
                    paddingHorizontal: 10
                }}
                    onPress={() => signInWithPhoneNumber('+91 7266-055-915')}>
                    <Text>"Phone Number Sign In"</Text>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
            <TextInput value={code}
                maxLength={6}
                keyboardType='number-pad'
                onChangeText={text => setCode(text)}
                style={{ borderWidth: 1, width: 200, marginBottom: 50, }} />
            <Button title="Confirm Code" onPress={() => confirmCode()} />
        </View>
    );
}
export default Firebase
