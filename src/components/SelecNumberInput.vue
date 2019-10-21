<template>
    <div class="container">
        <div>{{label}}</div>
        <div class="arrow" @click="remove">
            <img src="../assets/icons8-chevron-left-48.png" alt="">
        </div>
        <div class="value">{{value}}</div>
        <div class="arrow" @click="add">
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
  max-height: 24px;  
  cursor: pointer;
}
.arrow> img:hover{
  max-height: 28px;  
}
.value{
   font-size: 32px; 
   cursor: default;
}
</style>