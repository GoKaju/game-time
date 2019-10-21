<template>
    <div class="playBtn" @click="clickBtn">
        <img src="../assets/icons8-play-64.png" alt="">
    </div>
</template>
<script>
export default {
  name: 'PlayButton',
  event: 'clickBtn',
  methods:{
      clickBtn:function () {
          this.$emit('clickBtn')
      }
  }
}
</script>

<style scoped>
.playBtn{
    margin: 5px
}
.playBtn> img{
  max-width: 60px;  
  cursor: pointer;
}
.playBtn> img:hover{
   max-width: 64px;  
}
</style>