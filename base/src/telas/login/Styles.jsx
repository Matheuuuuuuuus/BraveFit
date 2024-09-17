import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#27438C',
        alignItems: 'center',
        justifyContent: 'center',
      },
      fundo: {
        marginTop: 30,
        padding: 10,
        width: 390,
        height: 560,
      },
      tittle: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'left',
        paddingLeft: 10,
        color: 'white',
      },
    
      buttonReg: {
        backgroundColor: '#537BE2',
        borderColor: 'white',
        borderWidth: 1,
        fontSize: 10,
        width: 120,
        margin: 5,
      },
      buttonText: {
        fontWeight: "bold",
        fontSize: 17,
        color: 'white',
      },
      remember: {
        fontWeight: "bold",
        fontSize: 17,
        color: 'white',
        margin: 10,
        marginLeft: 11,
        borderBottomColor: 'white',
        width: '40%',
        borderWidth: 1,
      },
      buttonCont: {
        backgroundColor: '#89B1ED',
        borderColor: 'white',
        borderWidth: 1,
        padding: 10,
        width: 150,
        margin: 5,
      },
      botao: {
        flexDirection: "row"
      },
      containerImg: {
        marginTop: 60,
        height: '100%',
        alignItems: "center",
      },
      imgLogo: {
        resizeMode: "contain",
        width: 200,
        height: 200,
      }
        
});

export default styles;