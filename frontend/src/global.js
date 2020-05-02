import {StyleSheet} from "react-native";

export default StyleSheet.create({
	container: {
	    flex: 1,
	    backgroundColor: '#fff',
	    alignItems: 'center',
	    justifyContent: 'center',
      width: "100%",
	},
  header:{
    flex:1,    
    flexBasis: 100,
    width: "100%",
    alignItems: "center",
  },
  	form: {
      flex:1,
      justifyContent: "center",
      textAlign: "center",
  		width: "100%",
      paddingLeft: 20,
      paddingRight: 20,
      
  	},
  	inputForm: {
      flex:1,
      maxHeight:200,
  	},
  	input: {
      flex:1,
      height: "100%",
      paddingLeft: 0,
      minHeight: 100
    },
    enterBtn: {
      backgroundColor: "blue",
      padding: 12,
      marginBottom: 2,
    },
    enterBtnText: {
      color: "white",
      textAlign: "center"
    },
    action:{
      marginTop: 20
    }
})