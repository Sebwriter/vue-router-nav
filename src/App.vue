<template>
  <div id="app">
    <HeaderView />
    <router-view />
    <NavbarView />  
    <aside>Sidebar</aside>
    <FooterView />
  </div>
</template>
<script>
import HeaderView from '@/components/HeaderView.vue'
import FooterView from '@/components/FooterView.vue'
import NavbarView from '@/components/NavbarView.vue'



export default {
  name:'App',
  components:{
    HeaderView,
    FooterView,
    NavbarView
  },
  data:()=>({

  })
}
</script>

<style scoped>
@import "./assets/static/css/grid-base.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
