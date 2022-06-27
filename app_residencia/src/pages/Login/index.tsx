import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Text, Input, Icon, Button} from 'react-native-elements';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = ({email, senha}) => {
    console.log(`Email: ${email} - Senha: ${senha}`);
    navigation.navigate('Home')
  };

  return (
    <View style={styles.container}>
      <Text style={styles.texto_entrada}>{'Bem-vindo'}</Text>
      <Input
        placeholder="E-mail"
        onChangeText={setEmail}
        value={email}
        leftIcon={
          <Icon name="user" color="pink" type="font-awesome" size={26} />
        }
        inputStyle={styles.inputs}
        placeholderTextColor={'pink'}
      />
      <Input
        placeholder="Senha"
        onChangeText={setSenha}
        value={senha}
        leftIcon={
          <Icon name="key" color="pink" type="font-awesome" size={26} />
        }
        inputStyle={styles.inputs}
        placeholderTextColor={'pink'}
      />
      <TouchableOpacity style={{ borderRadius: 50 , marginTop:30 }}>
      <Button
        title="Entrar"
        onPress={() => handleLogin({email, senha})}
        titleStyle={styles.titulobotao}
        buttonStyle={styles.botaostyle}
      /></TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d0d0e',
    padding: 16,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  texto_entrada: {
    fontWeight: 'bold',
    fontSize: 35,
    marginBottom: 60,
    textAlign: 'center',
    color: 'pink',
  },
  inputs: {
    color: 'white',
  },
  titulobotao: {
    color: '#0d0d0e',
    margin: 5,
    fontSize:25
  },
  botaostyle: {
    backgroundColor: 'pink',
    borderRadius: 50,
  },
});

export default Login;
