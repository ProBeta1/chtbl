import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        marginTop: 5,
        marginBottom: 5,
        paddingTop: 30,
        paddingBottom: 30,
        flexDirection: 'column'
    },
    header: {
        fontSize: 22,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginBottom: 10
    },
    line: {
        height: 2,
        backgroundColor: '#C4C4C4'
    },
    item: {
        padding: 2,
        flexDirection: 'column',
        margin: 10
    }

})