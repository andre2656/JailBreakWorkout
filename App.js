import React from 'react';
import { AppLoading, registerRootComponent } from 'expo';
import AppNavigator from './navigation/AppNavigator';
import { Asset } from 'expo-asset';
import Font from 'expo-font'
import { Icon } from '@expo/vector-icons'
import RouteNavigation from './navigation/MainTabNavigator';
import SimpleStack from './navigation/MainTabNavigator';
import MainJobTabs, { createSimpleTabs } from './navigation/MainJobTabs';
import {
  Assets as StackAssets,
  createStackNavigator,
} from 'react-navigation-stack';
import { createAppContainer } from '@react-navigation/native';
import {
  StatusBar,
  Platform,
  View,
  StyleSheet,
  FlatList, 
  I18nManager,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  AppRegistry,
  Alert
} from 'react-native';
import CheckBox from 'react-native-check-box';
import { List, Divider } from 'react-native-paper';
import { Button } from 'react-native-elements';
import RouteNav from './navigation/RouteNavigator';
// gesturesEnabled


const data = [
  { component: MainJobTabs, title: 'Job', routeName: 'JobTabs' },
  { component: RouteNav, title: 'MainMenu', routeName: 'Main' },
 
];
['initialRoute', 'none', 'order', 'history'].forEach(backBehavior => {
  data.push({
    component: createSimpleTabs({
      backBehavior: backBehavior,
      initialRouteName: 'Main', // more easy to test initialRoute behavior
    }),
    title: `Tabs backBehavior=${backBehavior}`,
    routeName: `Tabs backBehavior=${backBehavior}`,
  });
});
Asset.loadAsync(StackAssets);
export class Home extends React.Component {
  state = {
    isLoadingComplete: false,
    menuOpen: false,
    displayMenu: 0,
    isChecked: true,
  };
  menuClicked = () => {
    if (this.state.menuOpen) {
      this.setState({
        menuOpen: false,
        displayMenu: 0,
      })
    } else if (!this.state.menuOpen) {
      this.setState({
        menuOpen: true,
        displayMenu: 65,
      })
    }
  };
  submitPressed = () => {

    //add verification here
    this.props.navigation.navigate('Main')
  
  }


  componentDidMount() {

    return fetch('http://192.168.2.103/')
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson),
        }, function () {
          // In this block you can do something with new state.
          console.log(ds)
        });
      })
      .catch((error) => {
        // console.error(error);
      });

  };




  constructor(props) {

    super(props)

    this.state = {

      TextInputName: '',
      TextInputEmail: '',
      TextInputPhoneNumber: ''

    }

  };

  _renderItem = ({ item }) => (
    <List.Item
      title={item.title}
      onPress={() => this.props.navigation.navigate(item.routeName)}
    />
  );

  _keyExtractor = item => item.routeName;

  render() {
    return (
      <View style={{ backgroundColor: 'white', height: '100%' }} >
      
        <View style={{ marginTop: '45%' }}>
          <View style={{ borderColor: 'transparent', width: '90%', flexDirection: 'row', marginTop: 20, marginHorizontal: '5%', borderColor: 'transparent', borderBottomColor: 'black', borderWidth: 2, marginTop: '5%' }}>
            <TextInput style={{ maxHeight: 150, maxWidth: 350, width: '100%', fontSize: 23, padding: 10 }}
              keyboardType='default'
              onChange={this.UsernameAuth}
              placeholder={'Username'}
              placeholderTextColor={'black'}
              returnKeyType={'next'}
              type={'username'} />
          </View>
          <View style={{ borderColor: 'transparent', width: '90%', flexDirection: 'row', marginTop: '6%', marginHorizontal: '5%', borderColor: 'transparent', borderBottomColor: 'black', borderWidth: 2, }}>
            <TextInput style={{ maxHeight: 150, maxWidth: 350, width: '100%', fontSize: 23, padding: 10 }}
              keyboardType='default'
              onChange={this.PasswordAuth}
              placeholder={'Password'}
              placeholderTextColor={'black'}
              secureTextEntry={this.state.isChecked}
              returnKeyType={'done'}
              type={'password'}
            />
          </View>
          <View style={{ flexDirection: 'row', marginVertical: '5%' }}>
            <CheckBox
              style={{ paddingLeft: '35%', width: '100%', height: 30, paddingRight: '5%' }}
              onClick={() => {
                this.setState({
                  isChecked: !this.state.isChecked,
                })
              }}
              isChecked={!this.state.isChecked}
              leftText={"Show Password?"}
              leftTextStyle={{ fontSize: 23 }}
              checkedImage={<Image source={require('./assets/images/active.png')} style={{ height: 30, width: 60 }} />}
              unCheckedImage={<Image source={require('./assets/images/disable.png')} style={{ height: 30, width: 60 }} />}
            />

          </View>
          <View style={{ width: '90%', flexDirection: 'row', marginTop: '15%', marginHorizontal: '5%', }}>
            <TouchableOpacity
              style={{ marginTop: 25, height: 65, backgroundColor: '#F5F5F5', width: '30%', marginHorizontal: '35%', paddingVertical: 0, borderColor: 'transparent', borderBottomColor: '#282828', borderTopColor: '#282828', borderWidth: 2, textAlign: 'center' }}
              onPress={() => this.props.navigation.navigate('Main')} >
              <Text style={{ fontSize: 32, color: 'black', fontWeight: '600', marginTop: '8%', textAlign: "center"  }}> Login </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      
    );
  }
}


const Root = createStackNavigator(
  {
    Home: createStackNavigator({ Home }),
    ...data.reduce((acc, it) => {
      acc[it.routeName] = {
        screen: it.component,
        navigationOptions: {
          title: it.title,
        },
      };

      return acc;
    }, {}),
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);

const App = createAppContainer(Root);
export default App;
registerRootComponent(App);