import React from 'react';
import { Icon } from 'react-native-elements'
import {Text, View} from 'react-native';
import Colors from '../constants/Colors';

export default class TabBarIcon extends React.Component {
    render() {
        return (
            <View style={{ backgroundColor: '#7dce94'}}>
                <Text style={{textAlign: "center", fontSize: 25, paddingTop: 40,paddingBottom: 5, color: 'black'}}>
                    Jail Break Workout
                </Text>
            </View>

        );
    }
}