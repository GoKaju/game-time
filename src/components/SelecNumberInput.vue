<template>
    <div class="container">
        <div>{{label}}</div>
        <div class="arrow" @mousedown="remove" @mouseup="clickMouseDown=false">
            <img src="../assets/icons8-chevron-left-48.png" alt="">
        </div>
        <div class="value">{{value}}</div>
        <div class="arrow" @mousedown="add"  @mouseup="clickMouseDown=false">
            <img src="../assets/icons8-chevron-right-48.png" alt="">
        </div>
    </div>
</template>

<script>
export default {
  name: 'SelecNumberInput',
  props: {
    label: String,
    value: Number
  },
  event:['add','remove'],
  data:function(){
      return{
          clickMouseDown: false
      }
  },
  methods:{
      add: function () {
          this.$emit('add')
      },
      remove: function () {
          this.$emit('remove')
      },
  }
}
</script>


<style scoped>
.container{
    touch-action: none;
    display: flex;
    flex-direction: row;
    font-size: 24px;
    align-items: center;
    justify-content: center;
    margin: 5px
}
.container> div {
    padding: 3px;
}
.arrow> img{
    touch-action: none;
  max-height: 24px;  
  cursor: pointer;
}
.arrow> img:hover{
    touch-action: none;
  max-height: 28px;  
}
.value{
    touch-action: none;
   font-size: 32px; 
   cursor: default;
}
</style>