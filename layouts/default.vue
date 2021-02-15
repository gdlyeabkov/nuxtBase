<template>
  <div>
    <Navbar/>
    <main>
      <div class="container">
        <Nuxt />
      </div>
    </main>
  </div>
</template>

<style>
</style>
<script>
import Navbar from "@/components/Navbar"
export default {
  components:{
    Navbar
  }
}
</script>
