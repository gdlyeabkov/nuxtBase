<template>
<header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">NuxtJS</a>

    <div class="collapse navbar-collapse" >
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <Nuxt-link exact active-class="active" class="nav-link" to="/">Home</Nuxt-link>
        </li>
        <li class="nav-item">
          <Nuxt-link active-class="active" class="nav-link" to="/users">Users</Nuxt-link>
        </li>
        <li class="nav-item">
          <Nuxt-link no-prefetch active-class="active" class="nav-link" to="/about">About</Nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link active-class="active" class="nav-link" to="/login" href="#" @click.prevent="logout">logout</Nuxt-link>
        </li>
         <li class="nav-item" v-if="isAuth">
          <a href="#" @click.prevent="logout">logout</a>
        </li>

      </ul>

    </div>
  </nav>
</header>
</template>
<script>
export default {
  methods:{
    logout(){
      this.$store.dispatch('logout')
    }
  },
  computed:{
    isAuth(){
      return this.$store.getters.isAuth
    }
  }
}
</script>
