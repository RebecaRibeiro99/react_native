import React from 'react';
import {StyleSheet, ScrollView, View, TouchableOpacity} from 'react-native';
import {Card, Text} from 'react-native-elements';


const Home = () => {

  return (
    <ScrollView style={styles.container}>
    <ScrollView style={styles.scroll_categorias} horizontal={true}>
      <TouchableOpacity
        onPress={() => console.log('Categoria 1 foi clicada')}
        style={styles.botao_categoria}>
        <View style={styles.view_itens_categoria}>
          <Text style={styles.texto_nome_categoria}>{'Categorias 1'}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => console.log('Categoria 2 foi clicada')}
        style={styles.botao_categoria}>
        <View style={styles.view_itens_categoria}>
          <Text style={styles.texto_nome_categoria}>{'Categorias 2'}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => console.log('Categoria 3 foi clicada')}
        style={styles.botao_categoria}>
        <View style={styles.view_itens_categoria}>
          <Text style={styles.texto_nome_categoria}>{'Categorias 3'}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => console.log('Categoria 4 foi clicada')}
        style={styles.botao_categoria}>
        <View style={styles.view_itens_categoria}>
          <Text style={styles.texto_nome_categoria}>{'Categorias 4'}</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
    <Text  style={styles.titulo_secao}>{'Recentes'}</Text>
    <ScrollView horizontal={true}>
      <Card containerStyle={styles.card_style} >
        <Card.Image style={styles.imagens_cards} source={require('../../assets/img.strogonoff.jpg')} />
        <Card.Divider />
        <Card.Title style={styles.titulo_cards}>Strogonoff</Card.Title>
        <Text style={styles.descricao_cards}>Strogonoff de Frango!</Text>
      </Card>
      <Card containerStyle={styles.card_style}>
        <Card.Image style={styles.imagens_cards} source={require('../../assets/feijoada.jpg')} />
        <Card.Divider />
        <Card.Title style={styles.titulo_cards}>Feijoada</Card.Title>
        <Text style={styles.descricao_cards}>Feijoada Completa!</Text>
      </Card>
      <Card containerStyle={styles.card_style}>
        <Card.Image style={styles.imagens_cards} source={require('../../assets/lasanha.jpg')} />
        <Card.Divider />
        <Card.Title style={styles.titulo_cards}>Lasanha</Card.Title>
        <Text style={styles.descricao_cards}>Lasanha a bolonhesa!</Text>
      </Card>
      <Card containerStyle={styles.card_style}>
        <Card.Image style={styles.imagens_cards} source={require('../../assets/espaguete.jpg')} />
        <Card.Divider />
        <Card.Title style={styles.titulo_cards}>Espaguete</Card.Title>
        <Text style={styles.descricao_cards}>Espaguete ao Molho de tomate!</Text>
      </Card>
      <Card containerStyle={styles.card_style}>
        <Card.Image style={styles.imagens_cards} source={require('../../assets/parmegiana.jpg')} />
        <Card.Divider />
        <Card.Title style={styles.titulo_cards}>Parmegiana</Card.Title>
        <Text style={styles.descricao_cards}>Pargeniana de frango!</Text>
      </Card>
    </ScrollView>
    <Text  style={styles.titulo_secao}>{'Destaque'}</Text>
    <Card containerStyle={styles.card_grande}>
      <Card.Image style={styles.imagens_cards} source={require('../../assets/picanha.jpg')} />
      <Card.Divider />
      <Card.Title style={styles.titulo_card}>Picanha</Card.Title>
      <Text style={styles.descricao_card}>Carne de churrasco!</Text>
    </Card>
  </ScrollView>
);
};
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d0d0e',
    padding: 16,
  },
    scroll_categorias: {
    flexGrow: 0,
  },
  view_itens_categoria: {
    width: 100,
    height: 100,
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  titulo_secao:{
    marginLeft:15,
    fontSize:25,
    color:'pink',
  },
  card_style:{
    backgroundColor: 'pink',
    padding:0,
    marginBottom:20,
    width:125,
    borderRadius: 5,
    borderWidth:0,
  },
  card_grande:{
    backgroundColor: 'pink',
    padding:0,
    marginBottom:20,
    borderRadius: 5,
    borderWidth:0,
  },
  imagens_cards:{
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderWidth:0,
  },
  botao_categoria: {
    alignItems: 'center',
    padding: 10,
  },
  texto_nome_categoria: {
    color: 'pink',
    textAlign: 'center',
    fontSize: 17.5
  },
  titulo_cards:{
    fontSize: 18,
    color:'black',
  },
  titulo_card:{
    fontSize: 25,
    color:'black',
  },
  descricao_cards:{
    marginBottom:10,
    fontSize:16,
    textAlign: 'center',
    color:'#181717',
  },
  descricao_card:{
    textAlign:'center',
    fontSize: 20,
    color:'#181717',
    marginBottom:15,
  },
});

export default Home;