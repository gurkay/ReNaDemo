import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from '../screens/HomeScreen';
import ButtonScreen from '../screens/ButtonScreen';

const RootStack = createStackNavigator(
    {
        Home: HomeScreen,
        Btn: ButtonScreen,
    },
    {
        initialRouteName: 'Home',
    }
);

const Routes = createAppContainer(RootStack);

export default Routes;