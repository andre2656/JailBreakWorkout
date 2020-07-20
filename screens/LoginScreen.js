import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    FlatList,
    TextInput,
    Picker,
} from 'react-native';
import { Icon, Button } from 'react-native-elements';
import { FormLabel, FormInput, FormValidationMessage, } from 'react-native-elements'
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';
import { createStackNavigator, } from 'react-navigation';

export default class Measure extends React.Component {
   
    state = {
    }
    UsernameAuth = (event) => {
        // username or email will get us the information pertaining to the jobs this user can see
        this.setState({ Username: event },
            () => {

            })
    }
    PasswordAuth = (event) => {

        // {password logic goes here} 
        this.setState({ Password: event },
            () => {

            })
    }
    Submit = (event) => {
        console.log('Sobmit was hit \n\n\n !!!!' + event)
    }



    render() {
        return (
            <View style={{ backgroundColor: 'white', height: '100%' }} >
            </View>
        );
    }
}