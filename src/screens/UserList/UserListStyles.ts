import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F0EDEE',
      paddingTop: 20,
      paddingHorizontal: 10,
    },
    itemContainer: {
      backgroundColor: '#F4F3EE',
      padding: 20,
      marginVertical: 10,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#D3A625',
      alignItems: 'center',
      shadowOpacity: 0.2,
      shadowRadius: 3,
      shadowColor: '#000',
      shadowOffset: { height: 2, width: 0 },
    },
    itemText: {
      fontSize: 18,
      marginRight: 10,
      color: '#222F5B',
    },
    button: {
      backgroundColor: '#2A623D',
      color: 'white',
      padding: 10,
      borderRadius: 5,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
  });
