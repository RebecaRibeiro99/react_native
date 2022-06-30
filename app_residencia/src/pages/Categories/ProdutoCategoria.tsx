import React, {useEffect, useState, useContext} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';
import CardProduto from '../../components/cardProduto';
import AxiosInstance from '../../api/AxiosInstance';
import {ProdutoType} from '../../models/ProdutoType';
import {AutenticacaoContext} from '../../context/AutenticacaoContext';
import Loader from '../../components/Loader';
import {usePesquisar} from '../../context/PesquisaContext';

const ProdutoCategoria = () => {
  const {usuario} = useContext(AutenticacaoContext);
  const [produtos, setProdutos] = useState<ProdutoType[]>([]);
  const [carregando, setCarregando] = useState(true);
  const pesquisar = usePesquisar();

  useEffect(() => {
    getProdutos();
  }, []);

  const getProdutos = async () => {
    AxiosInstance.get(`/produto`, {
      headers: {Authorization: `Bearer ${usuario.token}`},
    })
      .then(result => {
        const ListaProduto = result.data;
        let ListaTemporaria: any = [];
        ListaProduto.filter(produto => {
          if (produto.nomeCategoria === pesquisar.pesquisa.nomeCategoria) {
            ListaTemporaria.push(produto);
            setProdutos(ListaTemporaria);
          }
        });
      })
      .catch(error => {
        console.log(
          'Erro ao carregar a lista de produtos - ' + JSON.stringify(error),
        );
      });
  };
  function ListProduto({produtos}) {
    return <CardProduto dados={produtos} />;
  }
  setTimeout(() => {
    if (produtos) {
      setCarregando(false);
    }
  }, 2000);
  return (
    <View style={styles.container}>
      {carregando && (
        <View style={styles.containerLoader}>
          <Loader cor="pink" />
          <Text style={styles.nomeLoader}>Carregando</Text>
        </View>
      )}
      {!carregando && (
        <View>
          <Text style={styles.titulo_secao}>{'PRODUTO X CATEGORIA'}</Text>

          <FlatList
            data={produtos}
            keyExtractor={(item, index) => String(item.idProduto)}
            renderItem={({item}) => <ListProduto produtos={item} />}
            horizontal={true}
          />
        </View>
      )}
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
  titulo_secao: {
    marginLeft: 15,
    fontSize: 25,
    color: 'pink',
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

export default ProdutoCategoria;
