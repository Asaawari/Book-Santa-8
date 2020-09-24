import * as React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {Header, Icon} from 'react-native-elements';

const MyHeader = (props) =>{
    return(
        <Header
        centerComponent={{text : props.title, style : {color : 'white', fontSize : 20, fontWeight : 'bold'}}}
        backgroundColor = "purple"
        />
    )
}

export default MyHeader;