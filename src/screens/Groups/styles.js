import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        margin: 30
    },
    formContainer: {
        flexDirection: 'row',
        height: 80,
        marginTop: 40,
        marginBottom: 20,
        flex: 1,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 30,
        paddingRight: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        height: 48,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        paddingLeft: 16,
        flex: 1,
        marginRight: 5
    },
    button: {
        borderRadius: 10,
        backgroundColor: '#00ABE3',
        margin: 10,
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 5,
        paddingBottom: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16
    },
    listContainer: {
        marginTop: 20,
        padding: 20,
    },
    entityContainer: {
        marginTop: 16,
        borderBottomColor: '#cccccc',
        borderBottomWidth: 1,
        paddingBottom: 16
    },
    entityText: {
        fontSize: 20,
        color: '#333333'
    },
    title: {
        fontSize: 24,
        fontWeight: '800',
        marginBottom: 10,
    },
    gtext: {
        color: '#8E8E8E',
        fontSize: 16
    },
    head: {
        backgroundColor: '#5B479C',
        margin: 10,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 5,
        paddingBottom: 5
    },
    wtext: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 18
    },
    intro: {
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 10,
        marginBottom: 20,
    },
    img: {
        width: 300,
        height: 200
    },
    btext: {
        textAlign: 'center',
        margin: 10
    }
})
