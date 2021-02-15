<template>
  <form @submit.prevent="onSubmit">
    <h1><Login</h1>
    <div class="form-group">
      <input type="text" class="form-control">
    </div>
    <div class="form-group">
      <input type="password" class="form-control">
    </div>
  </form>
  <nuxt-link to="/">Home</nuxt-link>
  <button class="btn btn-primary" type="submit">Login</button>
</template>
<style scoped>

</style>
<script>
export default {
  layout:'empty',
  methords:{
    onSubmit(){
      this.$store.dispatch('login')
    }
  }
}
</script>
