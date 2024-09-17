import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#537BE2',
  },
  cadastroContainer: {
    margin: 10,
  },
  input: {
    width: 100,
  },
  headerComponentContainer: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  headerIconsContainer: {
    width: 50,
    flexDirection: 'row',
    margin: 10,
  },
  headerIcon: {
    padding: 2,
  },
    newsCard: {
    marginBottom: 6,
  },
  newsImage: {
    margin: 10,
    width: '98%',
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    padding: 10,
    height: 100,
    borderColor: '#fff',
    borderWidth: 2, 
    borderRadius: 20,
    margin: 10,
    fontWeight: 'bold',
  },
  receitaButton: {
    backgroundColor: '#89B1ED',
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  buttonContainer: {
    alignItems: 'center',
  },
});

export default styles;
