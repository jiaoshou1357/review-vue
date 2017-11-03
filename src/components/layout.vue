<template>
<div>
 <vDialog :isShowDialog="isShowDialogReg" @on-close="isShowDialogReg=false">
 	<vReg></vReg>
 </vDialog>	
 <div id="header">
  <ul class="right_nav">
  	<li @click="isShowDialogReg=true">注册</li>
  	<li>登录</li>
  	<li>关于</li>
  </ul>	
 </div>	
 <div id="content">
 	<router-view></router-view>
 </div>	
 <div id="footer">
 	<h3>底部</h3>
 </div>	
</div>	
</template>
<script type="text/javascript">
import vDialog from './common/dialog'
import vReg from './common/reg'
 export default{
   data(){
   	return {
      isShowDialogReg:false,
   	}
   },
   methods:{

   },
   filters:{

   },
   components:{vDialog,vReg}	
 }	
</script>
<style type="text/css">
 *{padding:0px;margin:0px;list-style-type:none;text-decoration:none;border:0px;outline:none;}
 img{display:block;}
 body{font-size:62.5%;font-family:'';}
 #header{width:100%;height:80px;line-height:80px;background:#000;color:white;}
 #header .right_nav{float:right;margin-right:10%;overflow:auto;zoom:1;}
 #header .right_nav li{float:left;margin:5px 20px;font-size:19px;font-weight:600;}
 #content{max-width:1200px;width:100%;margin:0px auto;}
 #footer{width:100%;height:50px;line-height:50px;color:white;background:black;}	
</style>