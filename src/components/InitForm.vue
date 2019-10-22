<template>
  <div class="card">
      <div class="title">{{titleApp}}</div>
      <SelecNumberInput v-show="cardInit" label="Jugadores: " :value="users.length" v-on:add="addUser" v-on:remove="removeUser"/>
      <SelecNumberInput v-show="cardInit"  label="Segundos: " :value="seconds"  v-on:add="seconds++" v-on:remove="seconds--"/>
      <PlayButton v-show="cardInit"  v-on:clickBtn="clickBtn"/>
      <TimerCard v-show="!cardInit"  ref="timer" :milliseconds="seconds*1000" :user="userIndex+1" v-on:clickTimer="nextUser" v-bind:style="{ 'background-color': color}"/>
      {{color}}
  </div>
</template>

<script>
import SelecNumberInput from './SelecNumberInput.vue'
import PlayButton from './PlayButton.vue'
import TimerCard from './TimerCard'
export default {
  name: 'InitForm',
  props: {
    msg: String,
    titleApp: String
  },
   components: {
    SelecNumberInput,
    PlayButton,
    TimerCard
  },
  data:function (){
    return {
    usersLength:1,
    users:[],
    seconds:1,
    cardInit:true,
    cronActive: false,
    userIndex:0,
    color:'#FFFFFF',
    colors:['#FF6633', '#FF33FF', '#FFFF99', '#00B3E6','#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D','#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC','#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC','#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399','#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933','#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF']
    }
  },
  methods:{
      clickBtn: function () {
          this.cardInit = false
          this.initCron()
      },
      addUser:function(){
        if(this.users.length<20)
        this.users.push({
           color: this.colors[this.users.length],
           totalTime:0
        })
      },
      removeUser:function(){
        this.users.pop()
      },
      initCron:function () {
        this.color = this.users[this.userIndex].color
           this.$refs.timer.start();
      },
      nextUser:function () {
        this.userIndex = this.userIndex +1 == this.users.length?0 : this.userIndex +1
        this.color = this.users[this.userIndex].color
        this.$refs.timer.start();
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
