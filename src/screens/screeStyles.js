import { StyleSheet } from 'react-native';
import { color } from '../config/colors';

export const screenStyles = StyleSheet.create({
    homeScreenContainer: {
        flex: 1,
        marginTop: 10,
    },
    homeScreenItem: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    homeScreenTitle: {
        fontSize: 32,
    },
    flatListContainer: {
        flex: 1,
        marginTop: 4,
    },
    flatListItem: {
        flexDirection:'row',
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 4,
        marginHorizontal: 16,
    },
    flatListTitle: {
        fontSize: 32,
    },
    containerButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    flatListContainerITI: {
        flexDirection: 'row',
        backgroundColor: 'red',
        //height: 50,
        flexWrap: 'wrap'
    },
    flatListImage1: {
        flex: 1,
        backgroundColor: '#81BEF7',
        marginLeft: 1,
        marginRight: 1,
        marginTop: 1,
        marginBottom: 1,
        alignItems: 'flex-start',
    },
    flatListInnerText: {
        flex: 3,
        backgroundColor: '#81BEF7',
        marginLeft: 1,
        marginRight: 1,
        marginTop: 1,
        marginBottom: 1,
        alignItems: 'center',
        fontSize:60,
    },
    flatListImage2: {
        flex: 1,
        backgroundColor: '#81BEF7',
        marginLeft: 1,
        marginRight: 1,
        marginTop: 1,
        marginBottom: 1,
        alignItems: 'flex-end',
    },
});