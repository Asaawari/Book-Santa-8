import * as React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {DrawerItems} from 'react-navigation-drawer';
import firebase from 'firebase';

export default class CustomSidebarMenu extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.drawerItemContainer}>
                 <DrawerItems {...this.props}/>
                </View>
                <View style={styles.logoutContainer}>
                    <TouchableOpacity style={styles.logoutButton} onPress={()=>{
                        this.props.navigation.navigate('WelcomeScreen')
                        firebase.auth().signOut().then(function() {
                            // Sign-out successful.
                          }).catch(function(error) {
                            // An error happened.
                          });
                    }}>
                        <Text style={styles.logoutText}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1
    },
    drawerItemContainer : {
        flex : 0.8,
        marginTop : 100
    },
    logoutContainer : {
        flex : 0.2,
        justifyContent : 'flex-end',
        paddingBottom : 13,
        marginBottom : 100
    },
    logoutButton : {
        height : 30,
        width : '100%',
        justifyContent : 'center',
        padding : 10
    }
})