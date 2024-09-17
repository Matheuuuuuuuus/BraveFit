//import { StyleSheet } from "react-native";

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 20,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: "#537BE2",
//     },
//     title: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         marginBottom: 20,
//         color:'white'
//     },
//     inputContainer: {
//         width: '100%',
//         marginBottom: 15,
//     },
//     label: {
//         fontSize: 16,
//         marginBottom: 5,
//         color:'white',
//     },
//     input: {
//         height: 40,
//         borderColor: '#ffffff',
//         borderWidth: 1,
//         borderRadius: 5,
//         paddingHorizontal: 10,
//     },
//     button: {
//         backgroundColor: '#89B1ED',
//         padding: 15,
//         borderRadius: 5,
//         alignItems: 'center',
//         marginTop: 20,
//         width: '100%',
//     },
//     buttonText: {
//         color: '#fff',
//         fontSize: 18,
//         fontWeight: 'bold',
//     },
//     resultContainer: {
//         marginTop: 20,
//         alignItems: 'center',
//     },
//     resultText: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         color:'yellow',
//     },
// });
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#537BE2',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'white', 
  },
  input: {
    borderWidth: 1,
    borderColor: 'white',
    padding: 10,
    marginBottom: 10,
    width: '80%',
  },
  button: {
    backgroundColor: '#13b31b',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'red',
    fontWeight: 'bold',
  },
  result: {
    color: 'yellow',
    fontSize: 18,
    marginTop: 20,
  },
});

export default styles;
