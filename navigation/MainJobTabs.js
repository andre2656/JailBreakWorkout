import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Button, Text, View } from 'react-native';
import Main from '../screens/MainAppScreen';
// class Screen extends React.Component {
//     static navigationOptions = ({ navigation }) => ({
//         tabBarLabel: navigation.getParam('title'),
//         tabBarIcon: ({ tintColor }) => (
//             <Feather size={25} name={navigation.getParam('icon')} color={tintColor} />
//         ),
//     });

//     render() {
//         return (
//             <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//                 <Text>{JSON.stringify(this.props.navigation.state.params)}</Text>
//                 <Button
//                     title="Go back"
//                     onPress={() => this.props.navigation.goBack(null)}
//                 />
//             </View>
//         );
//     }
// }


//Needs styling

export const createSimpleTabs = (options = {}) => {
    return createBottomTabNavigator(
        {
            Main: {
                screen: Main,
                params: { title: 'Building', icon: 'building' },
            },
         
        },
        {
            backBehavior: 'history',
            ...options,
            tabBarOptions: {
                activeTintColor: 'navy',
                inactiveTintColor: 'white',
                labelStyle: {fontSize: 16, paddingTop: 5},
                ...options.tabBarOptions,
            },
        }
    );
};

export default createSimpleTabs();
