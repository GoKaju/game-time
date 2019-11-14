<template>
<div class="card-times"  @click="$emit('clickTimer')">

    <div  >
      <div class="player-number">Jugador # {{user}}</div>
      <div class="timer">{{seconds}}.<small>{{millisecond}}</small></div>
    </div>
    <div class="back-button"  @click="$emit('clickBack')" >
      <img src="../assets/icons8-down-left-48.png" alt="">
    </div>
</div>
</template>
<script>
export default {
  name: 'TimerCard',
  props:['user','milliseconds'],
  event:['clickTimer','clickBack'],
  data:function () {
    return {
      dt:null,
      control:null,
      isMarch :false,
      seconds:15,
      millisecond:0
    }
  },
  methods:{
    init:function () {
      this.start()
    },
    start:function  () {
         if (this.isMarch == false) { 
            this.dt = new Date();
            this.dt.setMilliseconds( this.dt.getMilliseconds() + this.milliseconds );
            this.control = setInterval(this.cronometro,10);
            this.isMarch = true;
            }else{
              clearInterval(this.control);
              this.isMarch = false
              this.start();
            }
         },
    cronometro: function () {
              // Get today's date and time
        var now = new Date().getTime();
          
        // Find the distance between now and the count down date
        var distance = this.dt.getTime() -now;

        this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
        this.millisecond = Math.floor((distance % (1000)));
          

        // If the count down is over, write some text 
        if (distance <= 0) {
          clearInterval(this.control);
          this.seconds = 0
          this.millisecond = 0
          
          var audio = new Audio(require('../assets/superMarioBros-gameOver.mp3'));
          audio.play();
        }
    },
    stop:function () {
        clearInterval(this.control);
          this.seconds = 0
        this.millisecond = 0
    }
        
  }
}
</script>
<style scoped>
.card-times {
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.player-number{
  position: relative;
  top: -30px;
  font-size: 40px;
}
.timer{
  font-size: 72px;
}
.back-button{
  position: relative;
  bottom: -65px;
  left: -20px;
  cursor: pointer;
  align-self: flex-start;
}
</style>