import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 50,
    paddingHorizontal: 20,
    color: 'white',

  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  input: {
    height: 50,
    borderColor: '#ced4da',
    borderWidth: 1,
    borderRadius: 5,
    width: '100%',
    marginBottom: 15,
    padding: 10,
    fontSize: 16,
    color: 'white',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  buttonContainer: {
    marginTop: 10,
    width: '50%',
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16
  },

  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  }

});
