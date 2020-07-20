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
import { NavigationEvents, createStackNavigator, createAppContainer } from 'react-navigation';
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';
import { Icon, Button } from 'react-native-elements';
export default class HomeScreen extends React.Component {

  state={
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
  navigateJob = (name) => {

    this.props.navigation.navigate('JobTabs', {name: name})
  }

  render() {
    return (
      <View>

        <View style={{ backgroundColor: 'white', height: '100%', width: '100%', marginTop: 50 }}>

          <Text style={{ textAlign: 'center', fontSize: 25, fontWeight: 'bold', marginTop: '5%' }}>Welcome <Text style={{ fontWeight: 'normal', }}>{this.state.FirstName}</Text></Text>
          <Text style={{ paddingHorizontal: '5%', textAlign: 'center', marginBottom: '2%', fontSize: 20 }}>This is your Dashboard. </Text>
         
          <View >
            <Text style={{ fontSize: 25, textAlign: 'center', paddingTop: '5%', backgroundColor: 'white' }}>Title</Text>


              <View
                style={{
                  flexDirection: 'row',
                  height: 'auto',
                }}>
                <FlatList
                 
                  //Data acuired from the flatlist will be from the database with the  get latest job call
                  data={[
                    { key: "List of Items 1",},
                    { key: 'List of Items 2',},
                  ]}

                  renderItem={({ item }) =>
                    // On click item will take user to the selected job passing item.key as a prop to get the information needed from the Database
                    <TouchableOpacity style={{ paddingLeft: 15, paddingRight: 15 , marginTop: 10}} onPress={() => this.navigateJob(item.key,)}>
                      <View style={{ flexDirection: 'row', backgroundColor: '#F5F5F5', borderColor: 'transparent', borderBottomColor: '#282828', borderTopColor: '#282828', borderWidth: 2, overflow: 'hidden', height: 60, width: '100%' }}>
                        <Text style={{color: 'black', fontSize: 19, marginTop: 10, textAlign: "center", width: '80%', paddingLeft: 5 }}>{item.key}</Text>
                      </View>
                    </TouchableOpacity>
                  }
                />
              </View>
          </View>
        </View>
      </View>
    );
  }
  //Romove once app is in production.
  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}
//Remove once app is in production


//Delete styles that are not used.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 10,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 0,
    marginBottom: 0,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 0,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 0,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
