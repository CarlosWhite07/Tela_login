import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

export default function App() {
 
 const [login, setlogin] = useState('');
 const [senha, setSenha] = useState('');
 const [mensagem, setmensagem] = useState(''); 
 const [tela, setTela] = useState(''); 
 
 const [alunos, setAlunos] = useState([]);
 const [nome, setNome] = useState('');
 const [idade, setIdade] = useState('');
 const [curso, setCurso] = useState('');
 const [editandoIndex, setEditandoIndex] = useState(null);

 function validarLogin() {
   setmensagem('');
   if(login === 'admin' && senha === '123456') {
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
  const novoAluno = { nome, idade, curso };

  if (editandoIndex !== null) {
    const listaAtualizada = [...alunos];
    listaAtualizada[editandoIndex] = novoAluno;
    setAlunos(listaAtualizada);
    setEditandoIndex(null);
  } else {
    setAlunos([...alunos, novoAluno]);
  }

  setNome('');
  setIdade('');
  setCurso('');
 }

 function editarAluno(index) {
  const aluno = alunos[index];

  setNome(aluno.nome);
  setIdade(aluno.idade);
  setCurso(aluno.curso);

  setEditandoIndex(index);
 }

 function removerAluno(index) {
   const novaLista = alunos.filter((_, i) => i !== index);
   setAlunos(novaLista); 
 }

 if (tela === 'mudar') {
 return (
   <View style={styles.container}>
    <Text style={styles.titulo}>Cadastro de Alunos</Text>

    <Text style={styles.label}>Nome:</Text>
    <TextInput 
      style={styles.input} 
      onChangeText={setNome} 
      placeholder="Digite o nome"
      value={nome}
    />
    
    <Text style={styles.label}>Idade:</Text>
    <TextInput 
      style={styles.input} 
      onChangeText={setIdade} 
      placeholder="Digite a idade"
      value={idade}
    />

    <Text style={styles.label}>Curso:</Text>
    <TextInput 
      style={styles.input} 
      onChangeText={setCurso} 
      placeholder="Digite o curso"
      value={curso}
    />

    <View style={styles.botao}>
      <Button 
        title={editandoIndex !== null ? "Atualizar aluno" : "Cadastrar aluno"} 
        onPress={cadastrarAluno}
      />
    </View>

    {alunos.map((aluno, index) => (
      <View key={index} style={styles.card}>
        <Text>Nome: {aluno.nome}</Text>
        <Text>Idade: {aluno.idade}</Text>
        <Text>Curso: {aluno.curso}</Text>

        <Button 
          title="Editar" 
          onPress={() => editarAluno(index)}
        />

        <Button 
          title="Excluir" 
          onPress={() => removerAluno(index)}
        />
      </View>
    ))}

    <View style={styles.botao}>
      <Button title="Voltar" onPress={voltartela}/>
    </View>
   </View>
 );
}

return(
  <View style={styles.container}>
    <Text style={styles.titulo}>Tela de Login</Text>

    <Text style={styles.label}>Login:</Text>
    <TextInput 
      style={styles.input}
      placeholder="Digite seu login"
      onChangeText={setlogin}
    />

    <Text style={styles.label}>Senha:</Text>
    <TextInput 
      style={styles.input}
      placeholder="Digite sua senha"
      onChangeText={setSenha}
      secureTextEntry
    />

    <View style={styles.botao}>
      <Button title="Entrar" onPress={validarLogin}/>
    </View>

    <Text style={styles.mensagem}>{mensagem}</Text>

  </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5F9EA0",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  titulo: {
    fontSize: 26,
    color: "black",
    marginBottom: 20,
  },

  label: {
    alignSelf: "flex-start",
    marginLeft: 20,
    fontSize: 16,
    color: "black",
  },

  input: {
    width: "90%",
    textAlign: "center",
    borderWidth: 3,
    borderColor: "#E0FFFF",
    borderRadius: 8,
    backgroundColor: "#E0EEEE",
    marginBottom: 15,
    padding: 8,
  },

  botao: {
    width: "60%",
    marginVertical: 10,
  },

  mensagem: {
    marginTop: 10,
    color: "red",
    fontWeight: "bold",
  },

  card: {
    backgroundColor: "white",
    width: "90%",
    padding: 10,
    marginTop: 10,
    borderRadius: 8,
  }
});
