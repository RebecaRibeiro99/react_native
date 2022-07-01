import React, {useContext} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {Card, Text} from 'react-native-elements';
import {useEffect, useState} from 'react';
import AxiosInstance from '../../api/AxiosInstance';
import CardProduto from '../../components/cardProduto';
import {AutenticacaoContext} from '../../context/AutenticacaoContext';
import Loader from '../../components/Loader';
import BarraPesquisa from '../../components/BarraPesquisa';
import {Categoriatype} from '../../models/CategoriaType';
import { ProdutoType } from '../../models/ProdutoType';

const Home = ({navigation}) => {
  //console.log('Params:' + JSON.stringify(route));
  //console.log('token: ' + token);
  const {usuario} = useContext(AutenticacaoContext);
  console.log('Usuario: ' + JSON.stringify(usuario));
  const [categoria, setCategoria] = useState<Categoriatype[]>([]);
  const [produtos, setProdutos] = useState<ProdutoType[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getDadosCategoria();
    getProdutos();
  }, []);

  const getDadosCategoria = async () => {
    // setLoading(true);
    AxiosInstance.get(`/categoria`, {
      headers: {Authorization: `Bearer ${usuario.token}`},
    })
      .then(result => {
        //  console.log('Dados das categorias:' + JSON.stringify(result.data));
        setCategoria(result.data);
        // setLoading(false);
      })
      .catch(error => {
        console.log(
          'Erro ao carregar a lista de categoria - ' + JSON.stringify(error),
        );
      });
  };
  function ListCategoria({categoria}) {
    return (
         <Card containerStyle={styles.card_style}>
      <Card.Image
        style={styles.imagens_cards}
        source={{uri:categoria.nomeImagem}}
      />
      <Card.Title style={styles.texto_nome_categoria}>{categoria.nomeCategoria}</Card.Title>
    </Card>
    );
  }
  const getProdutos = async () => {
    // setLoading(true);
    AxiosInstance.get(`/produto`, {
      headers: {Authorization: `Bearer ${usuario.token}`},
    })
      .then(result => {
        console.log('Dados dos produtos:' + JSON.stringify(result.data));
        setProdutos(result.data);
        // setLoading(false);
      })
      .catch(error => {
        console.log(
          'Erro ao carregar a lista de produtos - ' + JSON.stringify(error),
        );
      });
  };
  function ListProduto({produtos}) {
    return <CardProduto navigation={navigation} dados={produtos} />;
  }
  setTimeout(() => {
    if (produtos && categoria) {
      setCarregando(false);
    }
  }, 2000);

  return (
    <ScrollView style={styles.container}>
      <BarraPesquisa navigation={navigation}/>
      {carregando && (
        <View style={styles.containerLoader}>
          <Loader cor="pink" />
          <Text style={styles.nomeLoader}>Carregando</Text>
        </View>
      )}
      {!carregando && (
        <View>
          <Text style={styles.titulo_secao}>{'Categorias'}</Text>
          <FlatList 
            data={categoria}
            keyExtractor={(item, index) => String(item.idCategoria)}
            renderItem={({item}) => <ListCategoria categoria={item} />}
            horizontal={true}
            // onEndReached={getDadosCategoria}
            // onEndReachedThreshold={0.1}
            // ListFooterComponent={ <FooterList load={loading}/>}
          />
          {/* <ScrollView style={styles.scroll_categorias} horizontal={true}>
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
          </ScrollView> */}
          <Text style={styles.titulo_secao}>{'Cardápio'}</Text>

          <FlatList
            data={produtos}
            keyExtractor={(item, index) => String(item.idProduto)}
            renderItem={({item}) => <ListProduto produtos={item} />}
            horizontal={true}
            // onEndReached={getDadosCategoria}
            // onEndReachedThreshold={0.1}
            // ListFooterComponent={ <FooterList load={loading}/>}
          />
          {/* <ScrollView horizontal={true}>
            {produtos.map((produto, indice) => (
              <TouchableOpacity key={indice}>
                <CardProduto dados={produto} />
              </TouchableOpacity>
            ))}
          </ScrollView> */}
          <Text style={styles.titulo_secao}>{'Mais vendido'}</Text>
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
function FooterList({load}) {
  if (!load) return null;
  return (
    <View style={styles.loading}>
      <ActivityIndicator size={25} color="pink" />
    </View>
  );
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
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
    backgroundColor: 'pink',
    justifyContent: 'center',
    marginRight: 20,
    marginLeft: 15,
    marginTop:30
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
  imagens_cards: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderWidth: 0,
  },

  titulo_cards: {
    fontSize: 18,
    color: 'black',
  },
  card_grande: {
    backgroundColor: 'pink',
    padding: 0,
    marginBottom: 20,
    borderRadius: 5,
    borderWidth: 0,
  },
  botao_categoria: {
    alignItems: 'center',
    padding: 10,
  },
  texto_nome_categoria: {
    color: 'black',
    textAlign: 'center',
    fontSize: 17.5,
    padding: 5,
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
    textAlign: 'center',
  },
  containerLoader: {
    position: 'relative',
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    marginTop: '50%',
  },
});

export default Home;
