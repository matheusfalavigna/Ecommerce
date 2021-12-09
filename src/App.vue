
<template>
  <div id="nav">
    <router-link to="/">Início</router-link> -
    <router-link to="/basket">Carrinho ({{this.productsInBag.length}})</router-link> - 
    <router-link to="/product">Product</router-link> 
  </div>
  <router-view/>
</template>

<script>

  
  export default {
    // carregar os dados, fazendo uma requisição get a API fake
    // invocando a acao de carregar produtos

    created(){
      this.$store.dispatch('loadProducts');
    },
    // ela sera craida para pegar os produtos que estao no back
    computed :{
      productsInBag(){
        return this.$store.state.productsInBag;
      }
    }

  }
  
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 1280px;
  margin: 80px auto;
}

#nav {
  padding: 16px 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  text-align: center;
  background-color: rgb(37, 37, 37);
  color: white;


  a {
    color: white;
    text-decoration: none;

    &.router-link-exact-active {
      color: #007bff;
    }
  }
}
</style>
