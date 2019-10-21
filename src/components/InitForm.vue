<template>
  <div class="card">
      <div class="title">{{titleApp}}</div>
      <SelecNumberInput v-show="cardInit" label="Usuarios: " :value="usersLength" v-on:add="usersLength++" v-on:remove="usersLength--"/>
      <SelecNumberInput v-show="cardInit"  label="Segundos: " :value="seconds"  v-on:add="seconds++" v-on:remove="seconds--"/>
      <PlayButton v-show="cardInit"  v-on:clickBtn="clickBtn"/>
        <CardTimes v-show="!cardInit"/>
  </div>
</template>

<script>
import SelecNumberInput from './SelecNumberInput.vue'
import PlayButton from './PlayButton.vue'
import CardTimes from './CardTimes'
export default {
  name: 'InitForm',
  props: {
    msg: String,
    titleApp: String
  },
   components: {
    SelecNumberInput,
    PlayButton,
    CardTimes
  },
  data:function (){
    return {
    usersLength:1,
    users:new Array(),
    seconds:1,
    cardInit:true,
    cronActive: false,
    userIndex:0
    }
  },
  methods:{
      clickBtn: function () {
         this.createUsers()
          this.cardInit = false
          this.initCron()
      },
      createUsers:function () {
          this.users = new Array() 
          for (let index = 1; index <= this.usersLength; index++) {

             this.users.add({
                  user:index,
                  color: '#e01e5a',
                  totalTime:0
              })
              
          }
      },
      initCron:function () {
          this.cronActive = true
      }
  }
}
</script>

<style scoped>
.card {
    width: 60%;
    background-color: white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.title {
    position: relative;
    top:-45px;
    font-size: 72px;
    width: 100%;
    text-align: center;
}
@media (max-width: 600px) {
.card {
    width: 90%;
  }
}
</style>
