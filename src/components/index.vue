<template>
<div id="content">
 <div class="left">
 	<h3>产品名称</h3>
 	<ul>
 		<router-link 
 		tag="li" 
 		:to="item.linkSrc" 
 		v-for="item in pro_name">{{item.name}}
 	    </router-link>
 	</ul>
 </div>
 <div class="right">
 	<Slider></Slider>
 </div>
</div>	
</template>
<script type="text/javascript">
import Slider from './common/slider'
 export default{
   data(){
   	return {
        pro_name:[
         {name:"平板电脑",linkSrc:'/detailes'},
         {name:"max电脑",linkSrc:'/'},
         {name:"min电脑",linkSrc:'/'},
         {name:"review电脑",linkSrc:'/'},
         {name:"平板电脑",linkSrc:'/'},
         {name:"平板电脑",linkSrc:'/'},
         {name:"平板电脑",linkSrc:'/'},
        ]
   	}
   },
   methods:{

   },
   components:{
    Slider
   },
   filters:{

   }	
 }	
</script>
<style type="text/css" scoped>
 #content{font-size:1.6rem;overflow:auto;zoom:1;}
 #content .left{
 	float:left;width:30%;
 	box-sizing:border-box;padding:15px;border:2px solid #ccc;

 }
 #content .left ul li{margin:5px 0px;}
 #content .right{float:right;width:auto;}
</style>