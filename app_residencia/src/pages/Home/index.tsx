import React, {useContext} from 'react';
import {StyleSheet, ScrollView, View, TouchableOpacity} from 'react-native';
import {Card, Text} from 'react-native-elements';
import {useEffect, useState} from 'react';
import AxiosInstance from '../../api/AxiosInstance';
import {Axios} from 'axios';
import CardProduto from '../../components/cardProduto';
import {AutenticacaoContext} from '../../context/AutenticacaoContext';
import Loader from '../../components/Loader';

type Categoriatype = {
  idCategoria: number;
  nomeCategoria: string;
  nomeImagem: string;
};

const Home = ({navigation}) => {
  //console.log('Params:' + JSON.stringify(route));
  //console.log('token: ' + token);
  const {usuario} = useContext(AutenticacaoContext);
  console.log('Usuario: ' + JSON.stringify(usuario));
  const [categoria, setCategoria] = useState<Categoriatype[]>([]);
  const [produtos, setProdutos] = useState<any[]>([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    getDadosCategoria();
    getProdutos();
  }, []);

  const getDadosCategoria = async () => {
    AxiosInstance.get(`/categoria`, {
      headers: {Authorization: `Bearer ${usuario.token}`},
    })
      .then(result => {
        // console.log('Dados das categorias:' + JSON.stringify(result.data));
        setCategoria(result.data);
      })
      .catch(error => {
        console.log(
          'Erro ao carregar a lista de categoria - ' + JSON.stringify(error),
        );
      });
  };
  const getProdutos = async () => {
    AxiosInstance.get(`/produto`, {
      headers: {Authorization: `Bearer ${usuario.token}`},
    })
      .then(result => {
        // console.log('Dados dos produtos:' + JSON.stringify(result.data));
        setProdutos(result.data);
      })
      .catch(error => {
        console.log(
          'Erro ao carregar a lista de produtos - ' + JSON.stringify(error),
        );
      });
  };

  setTimeout(() => {
    if (produtos && categoria) {
      setCarregando(false);
    }
  }, 2000);

  return (
    <ScrollView style={styles.container}>
      {carregando && (
        <View style={styles.containerLoader}>
          <Loader cor="pink"/>
          <Text style={styles.nomeLoader}>Carregando</Text>
        </View>
      )}
      {!carregando && (
        <View>
          <ScrollView style={styles.scroll_categorias} horizontal={true}>
            {categoria.map((categoria, indice) => (
              <TouchableOpacity
                key={indice}
                onPress={() =>
                  console.log(
                    `Categoria ${categoria.nomeCategoria} foi clicada`,
                  )
                }
                style={styles.botao_categoria}>
                <View style={styles.view_itens_categoria}>
                  <Text style={styles.texto_nome_categoria}>
                    {categoria.nomeCategoria}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <Text style={styles.titulo_secao}>{'Recentes'}</Text>
          <ScrollView horizontal={true}>
            {produtos.map((produto, indice) => (
              <TouchableOpacity key={indice}>
                <CardProduto dados={produto} />
              </TouchableOpacity>
            ))}
          </ScrollView>
          <Text style={styles.titulo_secao}>{'Destaque'}</Text>
          <Card containerStyle={styles.card_grande}>
            <Card.Image
              style={styles.imagens_cards}
              source={require('../../assets/picanha.jpg')}
            />
            <Card.Divider />
            <Card.Title style={styles.titulo_card}>Picanha</Card.Title>
            <Text style={styles.descricao_card}>Carne de churrasco!</Text>
          </Card>
        </View>
      )}
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
  titulo_secao: {
    marginLeft: 15,
    fontSize: 25,
    color: 'pink',
  },
  card_style: {
    backgroundColor: 'pink',
    padding: 0,
    marginBottom: 20,
    width: 125,
    borderRadius: 5,
    borderWidth: 0,
  },
  card_grande: {
    backgroundColor: 'pink',
    padding: 0,
    marginBottom: 20,
    borderRadius: 5,
    borderWidth: 0,
  },
  imagens_cards: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderWidth: 0,
  },
  botao_categoria: {
    alignItems: 'center',
    padding: 10,
  },
  texto_nome_categoria: {
    color: 'pink',
    textAlign: 'center',
    fontSize: 17.5,
  },
  titulo_cards: {
    fontSize: 18,
    color: 'black',
  },
  titulo_card: {
    fontSize: 25,
    color: 'black',
  },
  descricao_cards: {
    marginBottom: 10,
    fontSize: 16,
    textAlign: 'center',
    color: '#181717',
  },
  descricao_card: {
    textAlign: 'center',
    fontSize: 20,
    color: '#181717',
    marginBottom: 15,
  },
  nomeLoader: {
    marginTop: 20,
    fontSize: 25,
    color: 'pink',
    textAlign:'center'
  },
  containerLoader:{
    position: 'relative',
    flex: 1,
    alignContent:'center',
    justifyContent:'center',
    marginTop: '50%'
  }
});

export default Home;
