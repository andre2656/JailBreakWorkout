import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainMenuNavigator from './MainMenuNavigator';
export default createAppContainer(createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Main: MainMenuNavigator,
}));


// import React from 'react'
// import { createDrawerNavigator } from 'react-navigation';
// import Icon from 'react-native-vector-icons/FontAwesome5';
// import Settings from '../screens/HomeScreen';  //Tab Nav
// import Profile from '../screens/MeasureScreen'; //Stack Nav

// export default createDrawerNavigator({
//     Settings: {
//         screen: Settings,
//         navigationOptions: {
//             drawerLabel: 'Settings',
//             drawerIcon: ({ tintColor }) => <Icon name="cog" size={17} />,
//         }
//     },
//     Profile: {
//         screen: Profile,
//         navigationOptions: {
//             drawerLabel: 'Profile',
//             drawerIcon: ({ tintColor }) => <Icon name="user-circle" size={17} />,
//         }
//     }
// });