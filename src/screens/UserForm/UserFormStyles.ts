import { StyleSheet } from 'react-native';





export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Align content to the top
    paddingTop: 50, // Reduced padding to move the form up
    paddingHorizontal: 20, // Side padding for overall spacing
    color: 'white',

  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20, // Space below the title
    color: 'white',
  },
  input: {
    height: 50, // Increased height for a larger touch area
    borderColor: '#ced4da', // Softer border color
    borderWidth: 1,
    borderRadius: 5, // Rounded corners
    width: '100%', // Full width
    marginBottom: 15, // Increase space between inputs
    padding: 10, // Inner padding
    fontSize: 16, // Larger font size
    color: 'white',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  buttonContainer: {
    marginTop: 10,
    width: '50%',
    backgroundColor: '#007bff', // A nice blue color
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
    width: '100%', // Ensure it covers the whole screen width
    height: '100%', // Ensure it covers the whole screen height
  }

});
