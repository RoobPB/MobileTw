import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'transparent',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 15,
        textAlign: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: 'white',
        padding: 10,
        fontSize: 18,
        borderRadius: 10,
        marginBottom: 10,
        color: '#222F5B',
        height: 50,
        width: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',

    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
    },
    checkboxLabel: {
        marginLeft: 8,
        fontSize: 16,
        color: 'white',
    },
    button: {
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        padding: 10,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'white',
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    checkboxWrapper: {
        backgroundColor: 'rgba(255, 180, 180, 0.5)',
        borderWidth: 1,
        borderColor: 'white',
        padding: 5,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '60%',
        alignSelf: 'center',
        marginBottom: 20,
        marginTop: 10,
    },

});
