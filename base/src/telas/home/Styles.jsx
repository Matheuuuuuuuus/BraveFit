import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor:'#537BE2',
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    newsCard: {
        marginBottom: 20,
 
    },
    newsImage: {
        width: '100%',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    newsTitle: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    newsContent: {
        height: 60,  
        borderBottomStartRadius: 10,
        borderBottomEndRadius: 10,
        backgroundColor: 'black',
        textAlign: 'center',
        elevation: 20,
    },
    textContent: {
      fontSize: 12,
      color: 'white',
      margin: 15,
      fontWeight: 'bold'
    },
    teamContainer: {
        alignItems: 'center',
    },
    sectionTitle: {
      marginTop: 10,
      borderWidth: 2,
      borderColor:'white',
      borderRadius: 10,
      width: 300,
      marginLeft: 55,
      textAlign: 'center',
      fontSize: 23,
      fontWeight: 'bold',
      marginBottom: 10,
      color: 'white',
    },
    subtitle: {
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: "column",
      fontSize: 14,
      fontWeight: 'bold',
      textAlign: 'center',
      color: 'black',
    },
    ScoreText:{    
      fontSize: 14,
      fontWeight: 'bold',
      textAlign: 'center',
      color: 'black',
    },
    card: {
      margin: 10,
      backgroundColor: '#fff',
      borderRadius: 8,
      marginBottom: 16,
      elevation: 4, 
    },
    
    image: {
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
      height: 200,
      width: '100%',
      resizeMode: 'cover',
    },
    content: {
      padding: 16,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 8,
      
    },
    description: {
      fontSize: 14,
    },
    gridContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginLeft: 135,
      marginTop: 20,
    },
    gridItem: {
      width: '44%',
      height: '40%',
      aspectRatio: 1.5,
      margin: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },  
    
    titleScroll: {
      fontSize: 20,
      fontWeight: 'bold',
      margin: 10,
      marginBottom: 10,
    },
    scrollContainer: {
      flexDirection: 'row',
      paddingVertical: 10,
    },
    copy: {
      margin: 10,
    },
    sidebarContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      backgroundColor: '#537BE2', 
      height: '100%',
      width: 250,
      zIndex: 100,
      elevation: 5,
      paddingTop: 50,
      transition: 'none', 
    },
    sidebarContent: {
      paddingHorizontal: 20,
      marginTop: 20,
    },
    sidebarTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 15,
      marginBottom: 20,
      color: '#f2f2f2', 
    },
    sidebarItem: {
      paddingVertical: 15,
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(255, 255, 255, 0.2)', 
      flexDirection: 'row',
      alignItems: 'center', 
    },
    sidebarItemText: {
      fontSize: 18,
      color: '#f2f2f2',
      flex: 1, 
    },
    closeButton: {
      position: 'absolute',
      top: 10,
      right: 10,
      padding: 10,
    },
    closeButtonText: {
      fontSize: 16,
      color: '#f2f2f2',
      marginTop: 20,
    },
});

export default styles;
