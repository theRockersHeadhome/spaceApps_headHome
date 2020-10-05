import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert, Button, Image, Text, TextInput, View } from 'react-native';

import styles from './styles'

function LoginPage() {
    const { navigate } = useNavigation();

    function handleClassToNavigate() {
        navigate('MenuPage');
    }

    return (
        <View style={styles.container}>
            <View style={styles.loginView}>
                <View style={styles.inputs}>
                    <TextInput
                        style={styles.textInput}
                        placeholder='Login'
                    />
                </View>
                <View style={styles.inputs}>
                    <TextInput
                        style={styles.textInput}
                        placeholder='Password'
                    />
                </View>
                <Button
                    title='SIGN IN'
                    color="#22323f"
                    onPress={handleClassToNavigate}
                />
            </View>
        </View>);
}

export default LoginPage;