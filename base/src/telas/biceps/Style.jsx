import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
      scrollview: {
        flex: 1,
      },
        card: {
          backgroundColor: '#537BE2',
          marginBottom: 16,
          elevation: 4, 
        },
        image: {
          borderWidth: 1,
          borderColor: 'black',
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
          height: 310,
          width: '100%',
          resizeMode: 'contain',
        },
        content: {
          padding: 16,
        },
        title: {
          fontSize: 20,
          fontWeight: 'bold',
          margin: 10,
          color:'white',

        },
        titleContent: {
          fontSize: 20,
          fontWeight: 'bold',
          marginBottom: 10,
          color:'white',

        },
        description: {
          fontSize: 14,
          color:'white',

        },
        titleCard: {
          fontSize: 25,
          fontWeight: 'bold',
          marginBottom: 10,
          color:'white',

        },
        subtituloCard: {
          fontSize: 13,
          fontWeight: 'bold',
          marginBottom: 8,
          color:'white',

        },
      
  });

export default styles;