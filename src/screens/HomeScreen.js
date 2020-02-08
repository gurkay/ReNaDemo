import * as React from 'react';
import {
    Text,
    SafeAreaView,
    TouchableOpacity,
    FlatList,
    Image,
    View,
} from 'react-native';

import Header from '../components/Header';
import { screenStyles as styles } from '../screens/screeStyles';

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

class HomeScreen extends React.Component {

    static navigationOptions = {
        headerTitle: () => <Header />,
    }

    render() {
        /**
         * FlatList active passive icons
         */
        var icon = this.props.active
            ? require('../img/icons/activeCheck.png')
            : require('../img/icons/passiveCheck.png');

        return (
            <SafeAreaView style={styles.flatListContainer}>
                <FlatList
                    data={DATA}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={[
                                styles.flatListItem,
                                { backgroundColor: '#81BEF7' },
                            ]}
                        >
                            <View style={styles.flatListImage1}>
                                <Image
                                    source={icon}
                                    style={{ width: 60, height: 60 }}
                                />
                            </View>
                            <View style={styles.flatListInnerText}>
                                <Text> {item.title} </Text>
                            </View>
                            <View style={styles.flatListImage2}>
                                <TouchableOpacity
                                    onPress={() => {
                                        console.log('item id : ' + item.id);
                                        if (item.id === '1') {
                                            this.props.navigation.navigate('Btn', {
                                                itemID: item.id,
                                                param: item.title,
                                            })
                                        }
                                    }}
                                >
                                    <Image
                                        source={require('../img/icons/arrowRight.png')}
                                        style={{ width: 60, height: 60 }}
                                    />
                                </TouchableOpacity>

                            </View>

                        </TouchableOpacity>
                    )}
                    keyExtractor={item => item.id}
                    removeClippedSubviews={false}

                />
            </SafeAreaView>
        );
    }
}

export default HomeScreen;
