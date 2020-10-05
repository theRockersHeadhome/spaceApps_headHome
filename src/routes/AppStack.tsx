import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import LoginPage from '../Pages/LoginPage';
import MeditationPage from '../Pages/MenuScreen/Pages/SleepManagement/pages/Meditation';
import MenuPage from '../Pages/MenuScreen';
import SchedulePage from '../Pages/MenuScreen/Pages/ScheduleSleeps';

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{
                headerShown: false
            }}>
                <Screen name="LoginPage" component={LoginPage} />
                <Screen name="MeditationPage" component={MeditationPage} />
                <Screen name="MenuPage" component={MenuPage} />
                <Screen name="SchedulePage" component={SchedulePage} />
            </Navigator>
        </NavigationContainer>
    );
}

export default AppStack;