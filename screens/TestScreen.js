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
    Button
} from 'react-native';
import { NavigationEvents, createStackNavigator, createAppContainer } from 'react-navigation';
import { WebBrowser } from 'expo';
export default class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };
    state = {
        FirstName: 'User',
        Username: 'DCampbell',
        Cookie: 'fja;bdkfajdw42nkdjaj;ew32lkj',
        menuOpen: false,
        displayMenu: 0,
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

        this.props.navigation.navigate('JobTabs', { name: name })
    }

    render() {
        return (
            <View>
                <Text>Test</Text>
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
