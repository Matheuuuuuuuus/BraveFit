// Style.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  scrollview: {
    flex: 1,
    backgroundColor: '#537BE2',

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
  newsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 10,
  },
  newsItem: {
    width: '45%', 
    marginBottom: 10,
  },
  newsImage: {
    width: '100%',
    height: 200, 
    borderRadius: 8,
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  imageTextContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  imageText: {
    color: '#fff',
    fontSize: 20, 
    textAlign: 'center', 
  },
});
