<template>
  <nav>
    <ul class="mymenu" v-for="(el, idx) in navContent" :key="idx">
      <li>
        <router-link :to="{ name: el.name }">{{ el.title }}</router-link>
      </li>
    </ul>
  </nav>
</template>
<script>
import { navContent } from '@/assets/static/js/navbar.js'

export default {
  name: 'NavbarView',
  data: () => ({
    navContent
  })
}
</script>