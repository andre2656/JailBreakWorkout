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
} from 'react-native';
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';
import { Icon, Button } from 'react-native-elements';
export default class HomeScreen extends React.Component {
 
    state = {
    }
    static navigationOptions = ({ navigation }) => ({
        tabBarLabel: navigation.getParam('title'),
        tabBarIcon: ({ tintColor }) => (
            <Icon
                name={navigation.getParam('icon')}
                type='font-awesome'
                iconStyle={{ height: 85, width: '100%', marginBottom: -50, backgroundColor: 'black', paddingLeft: '44%', paddingRight: '44%', paddingTop: 10, paddingBottom: '50%', color: '#00ace3', }}
                color={tintColor}
            />
        ),
    });
    async componentDidMount() {
       let Name= this.props.navigation.getParam('name')
       this.setState({JobName: Name})
    }

      

    render() {
        return (
            <View style={{ backgroundColor: 'white', marginTop: '50%' }}>
               <Text>This is a main screen after user clicks on list can pass props to gain info.</Text>
            </View>
        );
    }
};
