import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#27438C',
        justifyContent: 'space-between', 
        alignItems: 'center',
        padding: 16,
      },
      mainContent: {
        alignItems: 'center',
        marginTop: 50, 
      },
      imageLogo: {
        width: 300, 
        height: 300,
      },
      textContainer: {
        alignItems: 'center',
        marginBottom: 40, 
      },
      textLogo: {
        color: '#fff',
        fontSize: 70,
        fontWeight: 'bold',
        textAlign: 'center',
      },
      descriptionLogo: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 8,
      },
      buttonContainer: {
        alignItems: 'center',
        marginBottom: 40, 
      },
      button: {
        backgroundColor: '#537BE2',
        width: 250, 
        marginBottom: 10,
        fontWeight: 'bold',
        borderColor: 'white',
        borderWidth: 1,
      },
      text: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
      },
});

export default styles;