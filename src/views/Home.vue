<template>
  <div class="home">
    <div class="products">
       <!-- o for usando o vue
       adicionando a borda azul quando o intem é selecionado
        -->
      <div 
        v-for="(product, index) in this.products" :key="index"
        class="product"
        :class="{inBag : isInBag(product)}"
        >


        <div class="product-image" :style="{backgroundImage: 'url('+ product.image + ')' }">
        </div>

        <!-- pega o valor do titulo do produto -->
        <!-- toFixed adiciona a quantidade de casas decimais que vc quiser -->
        
        <h4>{{ product.title }}</h4>
        <p class="price">R$ {{ product.price.toFixed(2)}}</p>
        <!-- aqui ele vai adicionar os produtos para o carrinho -->
        <!-- neste if o vue percorre o array e retorna true, para cada produto que 
        encontra na lista isInBag, caso ache o prod nao mostra mais o botao-->

        <button v-if="!isInBag(product)" @click="addToBag(product)">Adicionar ao carrinho</button>

        <!-- botão para remover item do carrinho -->
        <button 
          v-else 
          class="remove"
          @click="this.$store.dispatch('removeFromBag', product.id)"
          >Remover do carrinho</button>

      </div>

    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {

    }
   },
  computed:{
    products(){
      return this.$store.state.products;
     },
    //  tudo que tiver em begs vem pra ca
      productsInBag(){
      return this.$store.state.productsInBag;
    }
  },

    methods: {
      addToBag(product) {
        product.quantity = 1;
        this.$store.dispatch('addToBag', product);
      },
      // metodo para verificar se o produto esta no carrinho
      isInBag(product) {
        return this.productsInBag.find(item => item.id == product.id)
      }
    }
  }

</script>

<style lang="scss">

  .home {

    .products {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;


      .product {
        flex: 0 0 30%;
        box-sizing: border-box;  
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        padding: 16px;
        margin: 8px;
        height: 360px;

        @media only screen and (max-width: 769px) {
          flex: 0 0 40%;
        }

        @media only screen and (max-width: 640px) {
          flex: 0 0 90%;
        }

        &.inBag {
          border: 1px solid #2ED50C;
        }
        
        .product-image {
          margin: 20px auto;
          width: 160px;
          height: 140px;
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
        }
        h4 {
          margin: 22px auto;
          font-size: 12px;
          max-width: 60%;
          font-weight: normal;
        }

        p.price {
          font-size: 20px;
          font-weight: bold;
        }

        button {
          color: #fff;
          background-color: #2ED50C;
          border: 1px solid #2ED50C;
          border-radius: 100px;
          font-weight: 400;
          text-align: center;
          padding: 8px 16px;
          cursor: pointer;

          &:hover {
            opacity: 0.8;
          }

          &.remove {
            color: #fff;
            background-color: #E51C0B;
            border: 1px solid #E51C0B;
            border-radius: 100px;
            font-weight: 400;
            text-align: center;
            padding: 8px 16px;
            cursor: pointer;
          }
        }
      }
    }

  }


</style>
