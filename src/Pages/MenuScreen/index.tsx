import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import styles from './styles'

function MenuPage() {
    const { navigate } = useNavigation();


    function handleClassToNavigate(page: string) {
        return navigate(page);
    }

    return (
        <View style={styles.container}>
            <View style={styles.titleBox}>
                <Text style={styles.title}>Good Moning</Text>
                <Text style={styles.subtitle}>What would you do?</Text>
            </View>
            <View style={styles.divButtons}>
                <View style={styles.pButtons}>
                    <TouchableOpacity
                        style={styles.MenuButton}
                        onPress={() => {
                            handleClassToNavigate('SchedulePage')
                        }}
                    >
                        <Text>Sleep Management</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.MenuButton}
                        onPress={() => {
                            handleClassToNavigate('SchedulePage')
                        }}
                    >
                        <Text>Sleep Diary</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.pButtons}>
                    <TouchableOpacity
                        style={styles.MenuButton}
                        onPress={() => {
                            handleClassToNavigate('MenuPage')
                        }}
                    >
                        <Text>Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.MenuButton}
                        onPress={() => {
                            handleClassToNavigate('MenuPage')
                        }}
                    >
                        <Text>Health Aid</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>);
}

export default MenuPage;