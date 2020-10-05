import React from 'react';
import { Image, View } from 'react-native';

import Logo from '../../../assets/logos/Logo-01.png';
import styles from './styles'

function loadingPage() {
    return (<View style={styles.container}>
        <View style={styles.logo}>

            <Image style={styles.img} source={Logo} />
        </View>
    </View>);
}

export default loadingPage;