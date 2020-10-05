import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#22323f',
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginView: {
        backgroundColor: '#2d4253',
        width: '70%',
        height: '45%',
        borderRadius: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputs: {
        width: '100%',
        alignItems: 'center'
    },
    textInput: {
        backgroundColor: '#f7fbfd',
        height: 50,
        marginBottom: 10,
        width: '80%',
        borderRadius: 5,
    }
});

export default styles;