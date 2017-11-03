<template>
<div>
 <div class="mask" v-if="isShowDialog"></div>
 <transition name="ani" >
	 <div class="box" v-if="isShowDialog">
	 	<div class="close" @click="closeIt">X</div>
	 	<slot></slot>
	 </div>
 </transition>
</div>	
</template>
<script type="text/javascript">
 export default{
  props:{
	      isShowDialog:{
	      	type:Boolean,
	      	default:false
	      }
        },
  data(){
    return {

    }
  },
  methods:{
   closeIt(){
   	 this.$emit('on-close')
   }
  }
 }	
</script>
<style type="text/css" scoped>
 .mask{
 	position:fixed;z-index:1;
 	top:0px;left:0px;right:0px;bottom:0px;background: #000;
 	opacity:0.4;
 }	
 .box{
 	position:fixed;z-index:2;padding:30px;
 	border:3px solid #ccc; border-radius:3px;
 	background:#fff;
 	top:50%;
 	left:50%;
 	transform:translate(-50%,-50%);
 }
 .box .close{
 	position:absolute;right:9px;top:9px;
    box-sizing:border-box;
 	width:26px;height:26px;border-radius:13px;
 	border:2px solid #000;text-align: center;
 	font-size:17px;
 	line-height:20px;
 }	
 .ani-enter{
   transform: translate(-50%,-600px);
 }
 .ani-enter-active{
 	transition:all 2s;
 }
</style>