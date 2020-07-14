import React from 'react';
import { AppLoading, registerRootComponent } from 'expo';
import AppNavigator from './navigation/AppNavigator';
import { Asset } from 'expo-asset';
import { Icon } from '@expo/vector-icons';
import MainTabs, { createSimpleTabs } from './navigation/MainTabs';
// import HomeScreen from './screens/HomeScreen';
// import DashboardScreen from './screens/DashboardScreen';
import {
  Assets as StackAssets,
  createStackNavigator,
} from 'react-navigation-stack';
// import { createAppContainer } from '@react-navigation/native';
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
  Alert, 
  List
} from 'react-native';
// import { List, Divider } from 'react-native-paper';
import RouteNav from './navigation/RouteNavigator';


const data = [
  { component: MainTabs, title: 'Tabs', routeName: 'Tabs' },
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
  static navigationOptions = ({ navigation }) => ({
    tabBarLabel: navigation.getParam('title'),
    tabBarIcon: ({ tintColor }) => (
      <Icon
        name={navigation.getParam('icon')}
        type='font-awesome'
        iconStyle={{ height: 100, width: '100%', marginBottom: -50, backgroundColor: 'black', paddingLeft: '44%', paddingRight: '44%', paddingTop: 10, paddingBottom: '50%', color: 'white' }}
        color={tintColor}
      />
    ),
  });
  static navigationOptions = {
    header: null,
  };


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
        console.error(error);
      });

    }

  constructor(props) {

    super(props)

    this.state = {

      TextInputName: '',
      TextInputEmail: '',
      TextInputPhoneNumber: ''

    }

  }



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
        <Text>Hello World</Text>
      </View>

    );
  };
};
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
    defaultNavigationOptions: {
      gesturesEnabled: false,
    },
  }
);

// const App = createAppContainer(Root);
export default App;
registerRootComponent(App);