import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, } from 'react-native';

export default function App() {
 
 const [login, setlogin] = useState('');
 const [senha, setSenha] = useState('');
 const [mensagem, setmensagem] = useState(''); 
 const [tela, setTela] = useState(''); 
 

 function validarLogin() {
   setmensagem('');
   if(login === 'admin' && senha == '123456') {
      setTela('mudar');
   } else{
     setmensagem('Login ou senha incorretos');
   }
 }

  function voltartela(){
    setTela('');
    setlogin('');
    setSenha('');
    setmensagem('');
  }

if (tela == 'mudar') {
return (
   <View>
    <Text style={styles.titulo}> Mudou de tela </Text>
      <Button title= "Voltar" style={styles.botao} onPress={voltartela}/>
   </View>
 );

}


return(
  <View style={styles.container}>
  <Text style={styles.titulo}>Tela de login </Text>

  <Text>Login:</Text>
  <TextInput style={styles.input}placeholder="Digite seu login:" onChangeText={setlogin} />

  <Text>Senha:</Text>
  <TextInput style={styles.input}placeholder="Digite seu senha:" onChangeText={setSenha}/>

  <Button title="Entrar" style={styles.botao} onPress={validarLogin}/>

  <Text>{mensagem}</Text>

  </View>


  );
}

const styles = StyleSheet.create ({
  container: {
    alignItems: "center",
    backgroundColor: "#4CAF50",
    flex: 1,
  },

  titulo:{
    fontSize: 25,
    color: "blue"
},

input:{
textAlign:"center",
borderWidth: 2,
borderColor: "blue",
borderRadius: 8,
backgroundColor: "yellow",
margin: 10,
},

botao: {
  
  },
});
