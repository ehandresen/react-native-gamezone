import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  poppins: {
    fontFamily: 'poppins',
    fontSize: 18,
    color: '#333',
  },
  nunito: {
    fontFamily: 'nunito',
    fontSize: 18,
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  modalContent: {
    marginTop: 50,
    marginLeft: 20,
    flex: 1,
  },
  modalToggle: {
    marginBottom: 10,
    padding: 10,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
  },
});
