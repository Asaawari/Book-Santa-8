import * as React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {AppTabNavigator} from './AppTabNavigator';
import CustomSideBarMenu from './CustomSideBarMenu';
import SettingsScreen from '../screens/SettingsScreen';
import MyDonationScreen from '../screens/MyDonationsScreen';
import NotificationsScreen from '../screens/NotificationsScreen';

export const AppDrawerNavigator = createDrawerNavigator({
    Home : {screen : AppTabNavigator},
    Settings : {screen : SettingsScreen},
    MyDonations : {screen : MyDonationScreen},
    Notifications : {screen : NotificationsScreen},
},
{contentComponent : CustomSideBarMenu},
{initialRouteName : 'Home'
})