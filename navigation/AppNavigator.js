import React from 'react';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
import MainMenu from './MainMenuNavigator';
// export default createAppContainer(createSwitchNavigator({
//   // You could add another route here for authentication.
//   // Read more at https://reactnavigation.org/docs/en/auth-flow.html
//   Main: MainTabNavigator,
//   App: MainMenu
// }));
export default class App extends React.Component {
  render() {
    /* In the root component we are rendering the app navigator */
    logProps = () => {
      console.log(this.props)
    }
    return (
    <AppContainer />
    );
  }
}

const AppNavigator = createSwitchNavigator({
  App: MainMenu
}, () => { path});

const AppContainer = createAppContainer(AppNavigator);