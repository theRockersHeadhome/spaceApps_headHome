import React from 'react';
import { Image, Text, TextInput, View } from 'react-native';

import styles from './styles'

function LoginPage() {
    return (
        <View style={styles.container}>
            <View style={styles.loginView}>
                <TextInput />
                <TextInput />
            </View>
        </View>);
}

export default LoginPage;