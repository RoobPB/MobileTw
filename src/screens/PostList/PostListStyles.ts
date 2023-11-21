import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  postContainer: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowColor: '#000',
    shadowOffset: { height: 0, width: 0 },
  },
  postText: {
    fontSize: 16,
    marginBottom: 5,
  },
  authorText: {
    fontSize: 14,
    color: 'gray',
  },
  dateText: {
    fontSize: 12,
    color: 'gray',
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
    width: 100, // Ökad bredd
    height: '75%', // Gör knappen lika hög som posten
    backgroundColor: 'red',
    right: 0,
    borderRadius: 10, // Rundade hörn
  },
  backTextWhite: {
    color: '#FFF',
    fontWeight: 'bold', // Fetstilt typsnitt
    fontSize: 18, // Större textstorlek
  },
});
