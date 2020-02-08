import { StyleSheet } from 'react-native';
import { colors } from '../config/colors';

export const compStyles = StyleSheet.create({
    containerHeader: {
        flex: 1,
        width: 30,
        height: 30,
        alignItems: 'center',
    },
    titleHeader: {
        fontSize: 36,
        fontWeight: '700',
        color: colors.accent,
    },
    flatListContainer: {
        flex: 1,
        marginTop: 10,
    },
    flatListItem: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    flatListTitle: {
        fontSize: 32,
    },
    containerButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});