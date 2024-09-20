import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#27438C',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
  },
  containerImg: {
    height: '5%',
    alignItems: "center",
  },
  imgLogo: {
    resizeMode: "contain",
    width: 200,
    height: 200,
  },
  title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      color: 'white'
  },
  input: {
      width: '100%',
      borderWidth: 1,
      borderColor: 'white',
      borderRadius: 5,
      padding: 10,
      marginBottom: 10,
      color: 'white',
      backgroundColor: '#02142f',
  },
  buttonCont: {
    backgroundColor: '#537BE2',
    borderColor: 'white',
    borderWidth: 1,
  },
});

export default styles;