import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    titleBox: {
        width: '100%',
        height: '35%',

        backgroundColor: '#22323f',
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
        elevation: 10,

        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    title: {
        marginStart: 20,
        fontSize: 40,
        color: '#ffffff'
    },
    subtitle: {
        marginTop: 15,
        marginStart: 35,
        fontSize: 20,
        color: '#ffffff'
    },
    divButtons: {
        width: '100%',
        height: '100%',

        flex: 1,
        display: 'flex',
        flexDirection: 'row',
    },
    pButtons: {
        flex: 1,
        width: '100%',
        height: '100%',

        display: 'flex',
        alignItems: 'center',
    },
    MenuButton: {
        width: '80%',
        height: '30%',
        marginTop: 30,

        elevation: 20,
        backgroundColor: '#ffffff',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',

    }
});

export default styles;