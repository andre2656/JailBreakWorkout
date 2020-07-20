import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { MaterialIcons } from 'react-native-vector-icons';
import TabBarIcon from '../components/TabBarIcon';
import MainJobScreen from '../screens/MainAppScreen';
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
const MainJobStack = createStackNavigator({
  Main: MainJobScreen,
});

MainJobStack.navigationOptions = {
  tabBarLabel: 'Main',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'building' : 'building'}
    />
  ),
};

const SimpleStack = createStackNavigator({
  MainJob: {
    screen: MainJobStack,
    params: {text: 'MainJob', nextPage: 'MeasureStack'}
  },
},
{
    initialRouteName: 'PageOne',

    // these are the defaults
    cardShadowEnabled: true,
    cardOverlayEnabled: false,

    // headerTransitionPreset: 'uikit',
  });
export default class StackWithRefocus extends React.Component {
  static router = SimpleStack.router;

  _emitRefocus = () => {
    this.props.navigation.emit('refocus', {});
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <SimpleStack navigation={this.props.navigation} />
        <View style={{ position: 'absolute', bottom: 10, right: 10 }}>
          <TouchableOpacity onPress={this._emitRefocus}>
            <MaterialIcons name="center-focus-strong" size={30} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}