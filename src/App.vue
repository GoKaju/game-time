<template>
  <div id="app">
    <InitForm  msg="Welcome to Your Vue.js App" titleApp="GameTimer"/>
    <CardTimes />
  </div>
</template>

<script>
import InitForm  from './components/InitForm.vue'

export default {
  name: 'app',
  components: {
    InitForm
  }
}
</script>

<style >
@font-face {
    font-family: Grinched;
    src: url("assets/GrinchedRegular.otf") format("opentype");
}
html, body, #app{
  touch-action: none;
  height:100%;
  margin:0;
  display: flex;
  flex-direction: column;
 
}
#app {
  
  font-family: 'Grinched', Helvetica, Arial, sans-serif;
  background-color: #e5e5e5;
  color: #2c3e50;
  height: 100%;
  align-items: center;
  justify-content: center
}
</style>
