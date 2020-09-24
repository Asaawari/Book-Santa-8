import * as React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {Image} from 'react-native';
import BookDonateScreen from '../screens/BookDonateScreen';
import ReceiverDetailsScreen from '../screens/ReceiverDetailsScreen';

export const AppStackNavigator = createStackNavigator({
    BookDonateList : {
        screen : BookDonateScreen,
            navigationOptions : {
                headerShown : false
            }
    },
    ReceiverDetails : {
        screen : ReceiverDetailsScreen,
            navigationOptions : {
                headerShown : false
            }
    },
},
{initialRouteName : 'BookDonateList'}
)