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
        Username: 'Dcampbell',
        Firstname: 'Dre',
        Cookie: 'dajfkaljdfjajlk432lkfakj'
    }

    render() {
        return (
            <View style={{ backgroundColor: 'white', height: '100%' }} >
                <Text style={{ fontSize: 35, textAlign: 'center', marginVertical: '50%' }}>Under Maintence</Text>
                <Text>
                    Welcome {this.state.Name}
                </Text>
                <Text>
                   This is your dashboard here you can do (Insert list of setting or views that a user can have )
                </Text>

                <Text>
                    
                </Text>
            </View>
        );
    }
}