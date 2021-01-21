import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      textAlign: 'center',
      fontWeight:"bold",
      fontSize:50,
      color: "#000",
      marginBottom: 40
    },
    inputView:{
      width: "30%",
      borderRadius:25,
      backgroundColor: "#e7e4eb",
      height:50,
      marginBottom:20,
      justifyContent:"center",
      padding:20,
      borderColor: "black",

    },
    inputText:{
      height:50,
      color:"white"
    },
    loginBtn:{
      width: "30%",
      backgroundColor: "#4a1b75",
      borderRadius:25,
      height:50,
      alignItems: "center",
      justifyContent: "center",
      marginTop:40,
      marginBottom:10
    },
    loginText: {
      color: 'white',
      fontSize: 20
    },
    policyText: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    policyResults: {
      fontSize: 18,
      textTransform: 'capitalize'
    },
    policyRef: {
      fontSize: 18,
    }
  });
  
export default styles;