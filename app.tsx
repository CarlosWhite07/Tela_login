import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, } from 'react-native';

export default function App() {
 
 const [login, setlogin] = useState('');
 const [senha, setSenha] = useState('');
 const [mensagem, setmensagem] = useState(''); 
 const [tela, setTela] = useState(''); 
 
 const [alunos, setAlunos] = useState([]);
 const [nome, setNome] = useState([]);
 const [idade, setIdade] = useState([]);
 const [curso, setCurso] = useState([]);

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

   function cadastrarAluno() {
    const novoAluno = {
    nome,
    idade,
    curso
  };

  setAlunos([...alunos, novoAluno]);

 setNome('');
 setIdade('');
 setCurso('');

 }

if (tela == 'mudar') {
return (
   <View style={styles.container}>
    <Text style={styles.titulo}> Cadastro de Alunos </Text>
    <Text>Nome do aluno: </Text>
    <TextInput style={styles.input} onChangeText={setNome} placeholder = "Digite o nome do aluno" value={nome}/>
    
    <Text>Idade do aluno: </Text>
    <TextInput style={styles.input} onChangeText={setIdade} placeholder = "Digite a idade no aluno" value={idade}/>

    <Text>Curso do aluno: </Text>
    <TextInput style={styles.input} onChangeText={setCurso} placeholder = "Digite o curso no aluno" value={curso}/>

      <Button title= "Cadastrar aluno" style={styles.botao} onPress={cadastrarAluno}/>

    <br/>

      {alunos.map((aluno, index) => (
        <View key={index}>
          <Text>Nome: {aluno.nome}</Text>
          <Text>Idade: {aluno.idade}</Text>
          <Text>Curso: {aluno.curso}</Text>
          <Text>..........</Text>
        </View>
      )
)}

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
