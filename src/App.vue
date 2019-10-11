<template>
  <div id="app">
    <headernav></headernav>
    <div class="container">

      <router-view/>
    </div>
  </div>
</template>

<script>
//import createQuestion from './components/createQuestion.vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import headernav from './components/headerComponent.vue'

export default {
  name: 'app',
  components: {
    headernav,
    
  }
}
</script>

<style>

