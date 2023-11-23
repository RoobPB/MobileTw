import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,

  },
  postContainer: {
    backgroundColor: '#445DB0',
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowColor: '#000',
    shadowOffset: { height: 2, width: 0 },
  },
  postText: {
    fontSize: 16,
    marginBottom: 5,
    color: '#FFF',
  },
  authorText: {
    fontSize: 14,
    color: '#FFF',
    fontStyle: 'italic',
  },
  dateText: {
    fontSize: 12,
    color: '#FFF',
    marginTop: 5,
  },

  rowBack: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  backRightBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: '75%',
    backgroundColor: '#7F0000',
    right: 0,
    borderRadius: 10,
  },
  backTextWhite: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 18,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
});
