import React,{useState} from 'react';
import HideWithKeyboard from "react-native-hide-with-keyboard";
import {useNavigation} from "@react-navigation/native";
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';
import localStyles from "./styles.js";
import styles from "../../global.js";

export default function Login() {
  const [text,setText] = useState("");

  const navigation = useNavigation();  

  function goToRegister(){
    navigation.navigate("Register");
  }

  function goToHome(){
    navigation.navigate("Home")
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{flex:1,padding: 15, flexBasis: 147}}>
          <Image 
            style={{width: 112, height: 112}}
            source={require("../../../assets/splash.png")}
          />
        </View>
        <View style={{flex:1, justifyContent: "flex-end"}}>
          <Text >Comunidade SEBRAE</Text>
        </View>
        <View style={{flex:1}}/>
      </View>

      <View style={localStyles.main}>
        <KeyboardAvoidingView behavior="height" style={styles.form}>
          
          <View style={styles.inputForm}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              onChangeText={text => setText(text)}
              default={text}
            />
            <TextInput
              style={styles.input}
              placeholder="Senha"
              onChangeText={text => setText(text)}
              default={text}
            />
          </View>
          
          <View>
            <TouchableOpacity style={styles.enterBtn} onPress={goToHome}>
              <Text style={styles.enterBtnText}>ENTRAR</Text>
            </TouchableOpacity>
          </View>
      </KeyboardAvoidingView>

        <HideWithKeyboard style={localStyles.footer}>
          <View style={localStyles.footerButtons}>
            <TouchableOpacity style={{marginBottom: 10}}>
              <Text style={{}}>Esqueci minha senha</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={goToRegister}>
              <Text style={{}}>Cadastrar</Text>
            </TouchableOpacity>
          </View>
        
          <View style={{flex:1,flexBasis: 30}}>
            
          </View>
        </HideWithKeyboard>
      </View>
      
      
    </View>
  );
}