import React,{useState,useEffect} from 'react';
import HideWithKeyboard from "react-native-hide-with-keyboard";
import {useNavigation} from "@react-navigation/native";
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';
import { Zocial, SimpleLineIcons } from '@expo/vector-icons';
import localStyles from "./styles.js";
import styles from "../../global.js";

export default function Login() {

  return (
    <View style={styles.container}>
        <Header/>  
        <Main/>
        <Footer/>
    </View>
  );
}


const Header = () => {
  return(
    <View style={styles.header}>
      <View style={{flex:1,padding: 15, flexBasis: 147,justifyContent: "center"}}>
        <Image 
          style={{width: 160, height: 160}}
          source={require("../../../assets/splash.png")}
        />
      </View>
    </View>
  )
}


function Main(){
  const [text,setText] = useState("");

  const navigation = useNavigation();

  function goToHome(){
    navigation.navigate("Home")
  }

  return(
    <View style={localStyles.main}>
        <KeyboardAvoidingView behavior="padding" style={styles.form}>
          
          <View style={styles.inputForm}>
            <View behavior="padding" style={{flex:1,flexDirection:"row", justifyContent: "center", alignItems: "center",width: "100%", borderWidth: 3, minHeight: 50}}>
              <Zocial name="email" size={18} style={{padding:10}}/>
              <TextInput
                style={styles.input}
                placeholder="Email"
                onChangeText={text => setText(text)}
                default={text}
              />
            </View>
            <View style={{flex:1,flexDirection:"row", justifyContent: "center", alignItems: "center",width: "100%", borderWidth: 3, marginTop: 10, minHeight: 50, marginBottom: 10}}>
              <SimpleLineIcons name="lock" size={18} style={{padding:10}}/>
              <TextInput
                style={styles.input}
                placeholder="Senha"
                onChangeText={text => setText(text)}
                default={text}
              />
            </View>
            <TouchableOpacity style={styles.enterBtn} onPress={goToHome}>
              <Text style={styles.enterBtnText}>ENTRAR</Text>
            </TouchableOpacity>
          </View>
      </KeyboardAvoidingView>
    </View>
  )
}

const Footer = () => {
  const navigation = useNavigation(); 

  function goToRegister(){
    navigation.navigate("Register");
  }

  return(
    <View style={localStyles.footer}>
      <HideWithKeyboard style={localStyles.footerButtons}>
        <TouchableOpacity style={{flex:1,marginBottom: 10,justifyContent: "center"}}>
          <Text style={{}}>Esqueci minha senha</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goToRegister} style={{flex:1}}>
          <Text style={{}}>Cadastrar</Text>
        </TouchableOpacity>
      </HideWithKeyboard>
    </View>
  )
}