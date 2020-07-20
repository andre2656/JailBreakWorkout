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
  TextInput
} from 'react-native';
import { Icon, Button } from 'react-native-elements';
export default class SettingsScreen extends React.Component {
 
  state= {
    Username: 'username',
    Firstname: 'Dre',
    Cookie: 'dajfkaljdfjajlk432lkfakj'
  }
  
  
  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
      <View style={{ backgroundColor: 'white', height: '100%' }} >
        <Text style ={{ fontSize: 35,textAlign: 'center', marginVertical: '50%' }}>Under Maintence </Text>
      </View>
    );
  }
}


