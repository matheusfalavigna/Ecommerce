import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  // serve como dados (fonte unica deles)
  state: {
    products: [],
    productsInBag:[]
  },
  // invocar uma mutação
  mutations: {
    // primeiro argumento sempre é o state, para ter acesso as propriedades
    loadProducts(state, products){
      state.products=products;

    },
    addToBag(state, product){
      // faço o push para o final do array
      state.productsInBag.push(product);

    },
    removeFromBag(state, productId){
      // o metodo filter busca uma condição for satisfeita, ai remove o item
      //para os produtos que tiverem o ID diferente do passado, ele vai manter na lista
      var updateBag = state.productsInBag.filter(item => productId != item.id); 

      state.productsInBag = updateBag;

    },
    
  },
  actions: {
    loadProducts({commit}){
      axios
      .get('https://fakestoreapi.com/products')
      .then(response=> {
        commit('loadProducts',response.data);
      })
    },
    // acao de enviar o prod para o carrinho
    addToBag({commit}, product){
      commit('addToBag',product);

    },
    // remover os itens do carrinho
    removeFromBag({commit}, productId){
      if (confirm("Você realmente quer remover esse item do carrinho?")){
        commit('removeFromBag',productId);
        }
      }

    },
  modules: {
  }
})
