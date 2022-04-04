<template>
  <div id="app">
    <HeaderView />
    <router-view />
    <nav>
      <ul class="mymenu">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link :to="{name:'testimonials'}">Témoignages</router-link>
        </li>
        <li>
          <router-link :to="{name:'rates'}">Rates</router-link>
        </li>
        <li>
          <router-link :to="{name:'teams'}">Teams</router-link>
        </li>
      </ul>
    </nav>
    
    <aside>Sidebar</aside>
    <FooterView />
  </div>
</template>
<script>
import HeaderView from '@/components/HeaderView.vue'
import FooterView from '@/components/FooterView.vue'
export default {
  name:'App',
  components:{
    HeaderView,
    FooterView
  }
}
</script>

<style scoped>
@import "./assets/static/css/grid-base.css";
@import "./assets/static/css/home.css";
@import "./assets/static/css/testimonials.css";
@import "./assets/static/css/huge-table.css";
@import "./assets/static/css/team.css";
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
