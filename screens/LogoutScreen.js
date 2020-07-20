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

export default class Logout extends React.Component {
 
    state = {
       user: '',
       loggedIn: true,
    }
    

    render() {
        return (
            <View style={{ backgroundColor: 'white', height: '100%' }} >
         
                <TouchableOpacity style={{ marginTop: 50, backgroundColor: 'white', width: 120, marginHorizontal: '36%', paddingVertical: 10, borderRadius: '15%', borderColor: '#00c387', borderWidth: 2, textAlign: 'center', marginBottom: 25 }} onPress={() => this.props.navigation.navigate('Measure')}>
                    <Text style={{ fontSize: 32, color: '#00c387', fontWeight: '600' }}> Logout </Text>
                </TouchableOpacity>
            </View>
        );
    }
}