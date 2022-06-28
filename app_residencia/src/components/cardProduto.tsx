import React from 'react';
import {Card, Text} from 'react-native-elements';
import {StyleSheet} from 'react-native';

const CardProduto = (props: any) => {
  const dadosDoProduto = props.dados;
  console.log(dadosDoProduto)
  return (
    <Card containerStyle={styles.card_style}>
      <Card.Image
        style={styles.imagens_cards}
        source={require('../assets/img.strogonoff.jpg')}
      />
      <Card.Divider />
      <Card.Title style={styles.titulo_cards}>{dadosDoProduto.nomeProduto}</Card.Title>
      <Text style={styles.descricao_cards}>Strogonoff de Frango!</Text>
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
