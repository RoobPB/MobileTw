import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    backgroundImage: {
      flex: 1,
      width: '100%',
      height: '100%',
      justifyContent: 'center',
    },
    container: {
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      borderRadius: 10,
      padding: 20,
      margin: 20,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 5,
    },
    input: {

      borderRadius: 5,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.2,
      shadowRadius: 3,
      elevation: 2,
    },
    loggedInText: {
        fontSize: 25,
        color: 'green',
        margin: 20,
    },

  });
