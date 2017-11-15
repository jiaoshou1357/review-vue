<template>
<div>
 <div class="slider_box">
 	<div class="img">
 		<transition name="come">
 			<img :src="sliders[nowIndex].imgSrc" v-if="isCome">
 		</transition>
 		<transition name="out">
 			<img :src="sliders[nowIndex].imgSrc" v-if="!isCome">
 		</transition>
 	</div>
 	<div class="tittle">{{sliders[nowIndex].tittle}}</div>
 	<div class="items">
 	  <span @click="chooseIt(pre)">上一页</span>
 	  <span 
 	  v-for="(item,index) in sliders"
 	  @click="chooseIt(index)"
 	  :class="{isActive:index==nowIndex}"
 	  >{{index+1}}</span>	
 	  <span @click="chooseIt(next)">下一页</span>
 	</div>
 </div>
</div>	
</template>
<script type="text/javascript">
 export default{
   props:{
     sliders:{
     	type:Array,
     	default:[
     	   {
             tittle:"第一张",
             imgSrc:require('../../assets/1.png')
     	   },
     	   {
             tittle:"第2张",
             imgSrc:require('../../assets/2.png')
     	   },
     	   {
             tittle:"第3张",
             imgSrc:require('../../assets/3.png')
     	   },
     	   {
             tittle:"第4张",
             imgSrc:require('../../assets/4.png')
     	   },
     	]
     }
   },
   data(){
   	return {
      nowIndex:0,
      isCome:true 
   	}
   },
   methods:{
      chooseIt(i){
      	this.isCome=false
      	setTimeout(()=>{
      		this.isCome=true
      		this.nowIndex=i
      		
      	},10)
      }
   },
   computed:{
     next:function(){
       if(this.nowIndex==this.sliders.length-1){
       	 return 0
       }else{
       	return this.nowIndex+1
       }
     },
     pre:function(){
     	if(this.nowIndex==0){
     		return this.sliders.length-1
     	}else{
     		return this.nowIndex-1
     	}
     }
   },
   filters:{

   }	
 }	
</script>
<style type="text/css" scoped>
.slider_box{
	width:500px;height:400px;
	position: relative;border:3px solid #ccc;
	box-sizing:border-box;
	border-radius:5px;
	overflow:hidden;
}
.slider_box .img{position:absolute;width:100%;height:100%;z-index:1;left:0px;top:0px;}
.slider_box .img img{position:absolute;top:0px;left:10px;}
.slider_box .tittle{position:absolute;z-index:2;bottom:10px;left:0px;} 
.slider_box .items{position:absolute;z-index:3;bottom:10px;right:10px;}
.slider_box .items span{margin:0px 10px;background:#ccc;cursor:pointer;} 
.isActive{background:#f80!important;}
.come-enter{
	transform: translateX(-100%);
}
.come-enter-active{
	transition:all 1s;
}
.out-leave-active{
	transform:translateX(100%);
	transition:all 1s;
}
</style>