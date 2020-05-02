import React,{useState} from 'react';
import HideWithKeyboard from "react-native-hide-with-keyboard";
import {useNavigation} from "@react-navigation/native";
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';
import localStyles from "./styles.js";
import styles from "../../global.js";


export default function App() {
  return (
    <View style={styles.container}>
    	<Header/>
    	<Main/>
    </View>
  );
}

const Header = () => {
	return (
		<View style={[styles.header,localStyles.header]}>
	      	<Image
	      		style={{width: 100, height: 100}}
	      		source={require("../../../assets/splash.png")}
	      	/>
      	</View>
	)
}

function Main(){
	 const [name,setName] = useState("");
	 const [surname,setSurname] = useState("");
	 const [email,setEmail] = useState("");
	 const [password,setPassword] = useState("");
	 const [phone,setPhone] = useState("");

	  const navigation = useNavigation();

	  function goToLogin(){
	  	navigation.goBack()
	  }

	return(
		<View style={{flex:10,width: "100%"}}>

	      <KeyboardAvoidingView behavior="height" style={[styles.form,localStyles.form]}>
	      	<View style={[styles.inputForm,localStyles.inputForm]}>
	      		<View style={localStyles.inputSelection}>
	      			<Text>Nome</Text>
	      			<TextInput
			      		style={[styles.input,localStyles.input]}
			      		placeholder="Nome"
			      		onChangeText={name=>setName(name)}
			      		default={name}
	      			/>
	      		</View>
	      		<View style={localStyles.inputSelection}>
	      			<Text>Sobrenome</Text>
		      		<TextInput
			      		style={[styles.input,localStyles.input]}
			      		placeholder="Sobrenome"
			      		onChangeText={surname=>setSurname(surname)}
			      		default={surname}
		      		/>
	      		</View>
	      		<View style={localStyles.inputSelection}>
	      			<Text>Email</Text>
		      		<TextInput
			      		style={[styles.input,localStyles.input]}
			      		placeholder="Email"
			      		onChangeText={email=>setEmail(email)}
			      		default={email}
		      		/>
	      		</View>
	      		<View style={localStyles.inputSelection}>
	      			<Text>Telefone</Text>
	      			<TextInput
			      		style={[styles.input,localStyles.input]}
			      		placeholder="Telefone"
			      		onChangeText={phone=>setPhone(phone)}
			      		default={phone}
	      			/>
	      		</View>
	      		<View style={localStyles.inputSelection}>
	      			<Text>Senha</Text>
		      		<TextInput
		      			style={[styles.input,localStyles.input]}
		      			placeholder="Senha"
		      			onChangeText={password=>setPassword(password)}
		      			default={password}
		      		/>
	      		</View>
	      	</View>


	      	<View>
	      		<TouchableOpacity style={styles.enterBtn}>
		      		<Text style={styles.enterBtnText}>
		      			Cadastrar
		      		</Text>
		      	</TouchableOpacity>
		      	
		      	<TouchableOpacity style={styles.enterBtn} onPress={goToLogin}>
		      		<Text style={styles.enterBtnText}>
		      			Já tenho conta
		      		</Text>
		      	</TouchableOpacity>
		     </View>

	      </KeyboardAvoidingView>
      </View>
	)
}