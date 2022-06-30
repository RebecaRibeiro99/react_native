import React from 'react';
import {Card, Text} from 'react-native-elements';
import {StyleSheet} from 'react-native';
import { ProdutoType } from '../models/ProdutoType';


const CardProduto = (props:ProdutoType) => {
  const dadosDoProduto = props.dados;
  // console.log(dadosDoProduto)
  return (
    <Card containerStyle={styles.card_style}>
      <Card.Image
        style={styles.imagens_cards}
        source={{uri:dadosDoProduto.imagemProduto}}
      />
      <Card.Divider />
      <Card.Title style={styles.titulo_cards}>{dadosDoProduto.nomeProduto}</Card.Title>
      <Text style={styles.descricao_cards}>{dadosDoProduto.descricaoProduto}</Text>
    </Card>
  );
};
const styles = StyleSheet.create({
  card_style: {
    backgroundColor: 'pink',
    padding: 0,
    marginBottom: 20,
    width: 125,
    borderRadius: 5,
    borderWidth: 0,
  },
  imagens_cards: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderWidth: 0,
  },

  titulo_cards: {
    fontSize: 18,
    color: 'black',
  },
  descricao_cards: {
    marginBottom: 10,
    fontSize: 16,
    textAlign: 'center',
    color: '#181717',
  },
});
export default CardProduto;
