import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#27438C',
  },
  containerImg: {
    marginTop: 20,
    alignItems: "center",
  },
  imgLogo: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  title: {
    fontSize: 28, 
    fontWeight: 'bold',
    marginBottom: 30, 
    color: '#FFFFFF',
    textAlign: 'center', 
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#FFFFFF', 
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    color: '#FFFFFF',
    backgroundColor: '#4B6FBF',
    fontSize: 16, 
  },
  buttonCont: {
    fontWeight: "bold",
        fontSize: 17,
        color: 'white',
        backgroundColor: '#4B6FBF',
        borderColor: 'white',
        borderWidth: 1,

  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '600', 
    fontSize: 18, 
  },
});

export default styles;