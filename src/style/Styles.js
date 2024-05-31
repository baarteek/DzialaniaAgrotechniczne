import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingHorizontal: '1%',
    },
    button: {
      backgroundColor: '#098516',
      borderRadius: 10,
      width: '100%',
      padding: '4%',
      marginVertical: '1%'
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 20,
      textAlign: 'center'
    },
    smallButton: {
      backgroundColor: '#098516',
      borderRadius: 10,
      width: 'auto',
      padding: '3%',
      marginVertical: '1%'
    },
    smallButtonText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 16,
      textAlign: 'center'
    },
    input: {
      width: '100%',
      padding: 10,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      marginVertical: 10,
    },
    label: {
      fontSize: 18,
      marginVertical: 10,
    },
    scrollContainer: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: '1%',
    },
  });

  export default styles;