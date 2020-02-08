import * as React from 'react';
import {
    Text,
    SafeAreaView,
    TouchableOpacity,
    FlatList,
    Button,
    View,
} from 'react-native';

import { compStyles as styles } from './compStyles';

const DATA = [
    {
        id: '1',
        title: 'Button Component',
    },
    {
        id: 'ytrasdsas',
        title: 'Second Item',
    },
    {
        id: 'adasdwewr',
        title: 'Third Item',
    },
    {
        id: 'hd7acbbea',
        title: 'Fourty Item',
    },
    {
        id: 'oirasdsas',
        title: 'Five Item',
    },
    {
        id: 'wwwsdwewr',
        title: 'Six Item',
    },
    {
        id: 'uy88dbbea',
        title: 'Seven Item',
    },
    {
        id: 'qwersdsas',
        title: 'Eight Item',
    },
    {
        id: 'ewqsdwewr',
        title: 'Night Item',
    },
];

function GoToButton(screenName, screenItemID, screenParam) {
    console.log('Name: ' + screenName + 'ID : ' + screenItemID + 'Param: ' + screenParam);
    return (
        <Button
            title={`Go to ${screenName}`}
            onPress={() => this.props.navigation.navigate(screenName, {
                itemID: screenItemID,
                param: screenParam,
            })}
        />
    );
}

class FlatListComp extends React.Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
        console.log(navigationOptions);
        // Notice the logs ^
        // sometimes we call with the default navigationOptions and other times
        // we call this with the previous navigationOptions that were returned from
        // this very function
        return {
          title: navigation.getParam('otherParam', 'A Nested Details Screen'),
          headerStyle: {
            backgroundColor: navigationOptions.headerTintColor,
          },
          headerTintColor: navigationOptions.headerStyle.backgroundColor,
        };
    };

    render() {
        //const {navigate} = this.props.navigation;
        const { navigation } = this.props;
        const itemID = navigation.getParam('itemID', 'NO-ID');
        const param = navigation.getParam('param', 'some default value');

        return (

            <View>
                <Button
                    title={`Go to deneme`}
                    onPress={() => this.props.navigation.push('Btn', {
                        itemID: 82,
                        param: 'test',
                    })}
                />
            </View>

        );
    }
}

export default FlatListComp;